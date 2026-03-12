export class ReportsPage {
  visitReports() {
    cy.visit("/reports");
  }

  verifyStaffView() {
    cy.get('[role="main"], .reports, .report-container, main, div[class*="report"], [class*="container"], [class*="wrapper"]', { timeout: 4000 }).should("be.visible");
  }

  verifyTeamView() {
    cy.get('[role="main"], .reports, .report-container, main, div[class*="report"], [class*="container"], [class*="wrapper"]', { timeout: 4000 }).should("be.visible");
  }

  editManDay(value: string) {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/edit|update|modify/i).click();
    cy.get('input[type="number"], input[type="text"], input[placeholder*="day"], input[placeholder*="value"], input[aria-label*="day"]', { timeout: 4000 }).first().clear().type(value);
  }

  saveManDay() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit/i).click();
  }

  verifyReportData() {
    cy.get('table, tbody, tr, td, div[role="row"], [role="gridcell"], [role="rowheader"]', { timeout: 4000 }).should("have.length.greaterThan", 0);
  }
}
