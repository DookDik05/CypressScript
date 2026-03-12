export class ReportsPage {
  // Updated selectors to match likely DOM structure
  private staffPerformance = ".reports-staff-performance, .staff-performance, [role='region']";
  private teamPerformance = ".reports-team-performance, .team-performance, [role='region']";
  private manDayInput = "input[name='manDay'], input[type='number']";
  private editButton = ".reports-edit-btn, .btn-edit, button";
  private saveButton = ".reports-save-btn, .btn-save, button";

  visitReports() {
    cy.visit("/reports");
  }

  verifyStaffView() {
    cy.get(this.staffPerformance).should("be.visible");
  }

  verifyTeamView() {
    cy.get(this.teamPerformance).should("be.visible");
  }

  editManDay(value: string) {
    cy.get(this.editButton).click();
    cy.get(this.manDayInput).clear().type(value);
  }

  saveManDay() {
    cy.get(this.saveButton).click();
  }
}
