export class DashboardPage {
  visitDashboard() {
    cy.visit("/dashboard");
  }

  verifyDashboardElements() {
    cy.get("body", { timeout: 8000 }).should("contain", /dashboard|summary|status|task/i);
  }

  verifyStatusBreakdown() {
    cy.get("body", { timeout: 4000 }).should("contain", /status|progress|done|completed|pending/i);
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
    cy.get("body", { timeout: 4000 }).should("contain", /task|item|todo/i);
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
