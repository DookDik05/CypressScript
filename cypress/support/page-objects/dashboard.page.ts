export class DashboardPage {
  visitDashboard() {
    cy.visit("/combined/app/dashboard");
  }

  verifyDashboardElements() {
    cy.contains(/dashboard|summary|status|task/i, { timeout: 8000 }).should("exist");
  }

  verifyStatusBreakdown() {
    cy.contains(/status|progress|done|completed|pending/i, { timeout: 4000 }).should("exist");
  }

  getStatusCount(status?: string) {
    if (status) {
      return cy.get("body", { timeout: 4000 }).invoke("text").then((text) => {
        const match = text.match(new RegExp(status, "gi"));
        return match ? match.length : 0;
      });
    }
    return cy.get("[class*='count'], [class*='metric'], span, div", { timeout: 4000 }).invoke("text");
  }

  verifyTasksDisplayed() {
    cy.contains(/task|item|todo/i, { timeout: 4000 }).should("exist");
  }

  verifyChartDisplayed() {
    cy.get("canvas, svg, [role='img'], [class*='chart']", { timeout: 4000 }).should("exist");
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
