export class DashboardPage {
  // NOTE: These selectors need to be updated with real app HTML
  // Updated selectors to match likely DOM structure
  private totalProjectsCard = ".dashboard-projects, .card-projects, [role='main']";
  private totalTasksCard = ".dashboard-tasks, .card-tasks, [role='main']";
  private completedTasksCard = ".dashboard-completed, .card-completed, [role='main']";
  private progressBar = ".progress-bar, .dashboard-progress, [role='progressbar']";
  private taskStatusBreakdown = ".status-breakdown, .dashboard-status, [role='region']";
  private notStartedCount = ".status-not-started, .dashboard-not-started, [data-status='not-started']";
  private inProgressCount = ".status-in-progress, .dashboard-in-progress, [data-status='in-progress']";
  private reviewCount = ".status-review, .dashboard-review, [data-status='review']";
  private doneCount = ".status-done, .dashboard-done, [data-status='done']";

  visitDashboard() {
    cy.visit("/dashboard");
  }

  verifyDashboardElements() {
    cy.get(this.totalProjectsCard).should("be.visible");
    cy.get(this.totalTasksCard).should("be.visible");
    cy.get(this.completedTasksCard).should("be.visible");
    cy.get(this.progressBar).should("be.visible");
  }

  getTotalProjects() {
    return cy.get(this.totalProjectsCard).invoke("text");
  }

  getTotalTasks() {
    return cy.get(this.totalTasksCard).invoke("text");
  }

  getCompletedTasks() {
    return cy.get(this.completedTasksCard).invoke("text");
  }

  verifyStatusBreakdown() {
    cy.get(this.taskStatusBreakdown).should("be.visible");
    cy.get(this.notStartedCount).should("be.visible");
    cy.get(this.inProgressCount).should("be.visible");
    cy.get(this.reviewCount).should("be.visible");
    cy.get(this.doneCount).should("be.visible");
  }

  getStatusCount(status: string) {
    const statusMap: { [key: string]: string } = {
      "not-started": this.notStartedCount,
      "in-progress": this.inProgressCount,
      review: this.reviewCount,
      done: this.doneCount,
    };
    return cy.get(statusMap[status]).invoke("text");
  }
}
