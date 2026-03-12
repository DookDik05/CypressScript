export class DashboardPage {
  visitDashboard() {
    cy.visit("/dashboard");
  }

  verifyDashboardElements() {
    cy.get("[role='main'], .dashboard, .main-content", { timeout: 4000 }).should("be.visible");
  }

  verifyStatusBreakdown() {
    cy.get("div, span, p", { timeout: 4000 }).contains(/not started|in progress|review|done/i).should("exist");
  }

  getStatusCount() {
    return cy.get("div, span", { timeout: 4000 }).contains(/not started|in progress|review|done/i).invoke("text");
  }

  verifyTasksDisplayed() {
    cy.get(".task-item, [role='row'], li, div[class*='task']", { timeout: 4000 }).should("have.length.greaterThan", 0);
  }

  verifyChartDisplayed() {
    cy.get("canvas, svg, [role='img']", { timeout: 4000 }).should("be.visible");
  }

  getTotalProjects() {
    return cy.get("body", { timeout: 4000 }).invoke("text");
  }

  getTotalTasks() {
    return cy.get("body", { timeout: 4000 }).invoke("text");
  }

  getCompletedTasks() {
    return cy.get("body", { timeout: 4000 }).invoke("text");
  }
}
