export class ProjectsPage {
  // Updated selectors to match likely DOM structure
  private createButton = ".project-create-btn, .btn-create, button";
  private projectNameInput = "input[name='projectName'], input[type='text']";
  private saveButton = ".project-save-btn, .btn-save, button";
  private editButton = ".project-edit-btn, .btn-edit, button";
  private deleteButton = ".project-delete-btn, .btn-delete, button";
  private confirmButton = ".project-confirm-btn, .btn-confirm, button";
  private projectList = ".project-list, [role='main'], ul";
  private projectItem = ".project-item, [role='row'], li";
  private moveUpButton = ".project-move-up-btn, .btn-move-up, button";
  private moveDownButton = ".project-move-down-btn, .btn-move-down, button";

  visitProjects() {
    cy.visit("/projects");
  }

  clickCreateButton() {
    cy.get(this.createButton).click();
  }

  fillProjectForm(name: string, description?: string) {
    cy.get(this.projectNameInput).clear().type(name);
    if (description) {
      cy.get("textarea")
        .clear()
        .type(description);
    }
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
  }

  createProject(name: string, description?: string) {
    this.clickCreateButton();
    this.fillProjectForm(name, description);
    this.clickSaveButton();
  }

  clickEditButton() {
    cy.get(this.editButton).first().click();
  }

  clickDeleteButton() {
    cy.get(this.deleteButton).first().click();
  }

  confirmDelete() {
    cy.get(this.confirmButton).click();
  }

  getProjectCount() {
    return cy.get(this.projectItem).its("length");
  }

  clickMoveUp(index: number = 0) {
    cy.get(this.moveUpButton).eq(index).click();
  }

  clickMoveDown(index: number = 0) {
    cy.get(this.moveDownButton).eq(index).click();
  }

  verifyProjectListDisplayed() {
    cy.get(this.projectList).should("be.visible");
  }
}
