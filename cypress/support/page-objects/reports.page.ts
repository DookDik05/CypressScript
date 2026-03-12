export class ReportsPage {
  visitReports() {
    cy.visit("/reports");
  }

  verifyStaffView() {
    cy.get("[role='main'], .reports, .report-container, [class*='report']", { timeout: 4000 }).should("be.visible");
  }

  verifyTeamView() {
    cy.get("[role='main'], .reports, .report-container, [class*='report']", { timeout: 4000 }).should("be.visible");
  }

  editManDay(value: string) {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/edit/i).click();
    cy.get("input[type='number'], input[type='text']", { timeout: 4000 }).first().clear().type(value);
  }

  saveManDay() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  verifyReportData() {
    cy.get("table, tbody, tr, td, div[role='row']", { timeout: 4000 }).should("have.length.greaterThan", 0);
  }
}
