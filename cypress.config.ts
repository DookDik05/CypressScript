import { defineConfig } from "cypress";
import fs from "node:fs";

export default defineConfig({
  e2e: {
    baseUrl: "https://hr.tlogical.com/",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Rental Space Test",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      saveJson: true,
      overwrite: false,
      reportDir: "cypress/reports",
    },
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("cypress-mochawesome-reporter/plugin")(on);
      
      // Add tasks to write files
      on("task", {
        writeFile({ path, content }: { path: string; content: string }) {
          if (!content) {
            console.warn(`Warning: Empty content for file ${path}`);
            return null;
          }
          fs.writeFileSync(path, content);
          return null;
        },
        writePageHTML(data: string | { filename: string; html: string }) {
          let filename = "cypress/page-html.txt";
          let html: string;
          
          // Handle both string and object parameters
          if (typeof data === "string") {
            html = data;
          } else if (typeof data === "object" && data.html && data.filename) {
            html = data.html;
            filename = data.filename;
          } else {
            console.warn("Warning: Invalid writePageHTML parameter");
            return null;
          }
          
          if (!html) {
            console.warn(`Warning: Empty HTML content for ${filename}`);
            return null;
          }
          fs.writeFileSync(filename, html);
          return null;
        }
      });
    },
    // Removed unsupported webpackConfig property
    env: {
      username: "staff@tlogical.com",
      // This password is intentionally hardcoded for test setup only
      password: "test12345",
      // branch_code: "test129",
    },
  },
});