import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";

interface TestResult {
  tcId: string;
  module: string;
  scenario: string;
  status: "Passed" | "Failed" | "Skipped";
  steps: string;
  expectedResult: string;
  actualResult: string;
  priority: "High" | "Medium" | "Low";
  dateTime: string;
  notes: string;
}

interface TestCase {
  title: string;
  state: string;
  duration?: number;
  fullTitle: string;
  err?: { message?: string };
}

interface TestSuite {
  title: string;
  tests: TestCase[];
  suites: TestSuite[];
}

interface TestSpec {
  suites: TestSuite[];
  file: string;
}

function getAllJsonFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllJsonFiles(file));
    } else if (file.endsWith(".json")) {
      results.push(file);
    }
  });
  return results;
}

async function getTestResultsFromJson(): Promise<TestResult[]> {
  const possiblePaths = [
    "cypress/reports/html/.jsons",
    "cypress/reports",
    "mochawesome-report"
  ];
  
  let jsonFiles: string[] = [];
  for (const dir of possiblePaths) {
    if (fs.existsSync(dir)) {
      jsonFiles = jsonFiles.concat(getAllJsonFiles(dir));
    }
  }
  
  // Filter for potential result files
  jsonFiles = jsonFiles.filter(f => (f.includes('mochawesome') || f.includes('index')) && f.endsWith('.json'));
  const results: TestResult[] = [];

  for (const file of jsonFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const data = JSON.parse(content);
      
      // Process each suite and test
      if (data.results) {
        data.results.forEach((spec: TestSpec) => {
          const processSuites = (suites: TestSuite[], moduleName: string) => {
            suites.forEach((suite: TestSuite) => {
              const currentModuleName = suite.title || moduleName;
              
              suite.tests.forEach((test: TestCase) => {
                const tcIdMatch = test.title.match(/TC-[A-Z]+-\d+/i);
                const tcId = tcIdMatch ? tcIdMatch[0] : "N/A";
                
                results.push({
                  tcId: tcId,
                  module: currentModuleName,
                  scenario: test.title,
                  status: test.state === 'passed' ? 'Passed' : (test.state === 'pending' ? 'Skipped' : 'Failed'),
                  steps: "Automatic execution via Cypress",
                  expectedResult: "Test passes according to assertions",
                  actualResult: test.state === 'passed' ? "All assertions passed" : (test.err?.message || "Test failed"),
                  priority: "Medium",
                  dateTime: test.duration ? `${test.duration}ms` : "N/A",
                  notes: test.fullTitle
                });
              });
              
              if (suite.suites) {
                processSuites(suite.suites, currentModuleName);
              }
            });
          };
          
          if (spec.suites) {
            processSuites(spec.suites, spec.file || "Unknown");
          }
        });
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  return results;
}

async function generateExcelReport(): Promise<void> {
  console.log("Reading test results from JSON files...");
  const dynamicResults = await getTestResultsFromJson();
  
  if (dynamicResults.length === 0) {
    console.warn("No test results found in JSON files. Ensure tests have run.");
    return;
  }

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Test Results");

  worksheet.columns = [
    { header: "TC ID", key: "tcId", width: 15 },
    { header: "Module", key: "module", width: 20 },
    { header: "Scenario", key: "scenario", width: 35 },
    { header: "Status", key: "status", width: 12 },
    { header: "Steps", key: "steps", width: 40 },
    { header: "Expected Result", key: "expectedResult", width: 30 },
    { header: "Actual Result", key: "actualResult", width: 30 },
    { header: "Priority", key: "priority", width: 12 },
    { header: "Duration/Time", key: "dateTime", width: 20 },
    { header: "Full Title / Notes", key: "notes", width: 35 },
  ];

  const headerRow = worksheet.getRow(1);
  headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF4472C4" },
  };
  headerRow.alignment = { horizontal: "center", vertical: "middle" };

  dynamicResults.forEach((result) => {
    const row = worksheet.addRow(result);
    const statusColor = result.status === "Passed" ? "FFD4EDDA" : (result.status === "Failed" ? "FFF8D7D7" : "FFF0F0F0");
    row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: statusColor } };
    row.getCell("scenario").alignment = { wrapText: true };
    row.getCell("actualResult").alignment = { wrapText: true };
  });

  const summarySheet = workbook.addWorksheet("Summary");
  const modules = [...new Set(dynamicResults.map((r) => r.module))];
  summarySheet.columns = [
    { header: "Module", key: "module", width: 25 },
    { header: "Passed", key: "passed", width: 12 },
    { header: "Failed", key: "failed", width: 12 },
    { header: "Total", key: "total", width: 12 },
    { header: "Pass Rate (%)", key: "passRate", width: 15 },
  ];

  const summaryHeaderRow = summarySheet.getRow(1);
  summaryHeaderRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
  summaryHeaderRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF4472C4" } };

  modules.forEach((module) => {
    const moduleResults = dynamicResults.filter((r) => r.module === module);
    const passed = moduleResults.filter((r) => r.status === "Passed").length;
    const failed = moduleResults.filter((r) => r.status === "Failed").length;
    const total = moduleResults.length;
    const passRate = ((passed / total) * 100).toFixed(2);
    
    const row = summarySheet.addRow({
      module,
      passed,
      failed,
      total,
      passRate: `${passRate}%`,
    });

    const color = failed === 0 ? "FFD4EDDA" : "FFF8D7D7";
    row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: color } };
  });

  const reportDir = "cypress/reports";
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

  const fileName = path.join(reportDir, `Cypress_Test_Report_${new Date().toISOString().split("T")[0]}.xlsx`);
  await workbook.xlsx.writeFile(fileName);
  console.log(`Excel report generated: ${fileName}`);
}

generateExcelReport().catch(console.error);
