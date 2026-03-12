export class ProjectsPage {
  visitProjects() {
    cy.visit("/projects");
  }

  clickCreateButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/create|new|add/i).click();
  }

  fillProjectForm(name: string, description?: string) {
    cy.get("input[type='text'], input[placeholder*='name']", { timeout: 4000 }).first().clear().type(name);
    if (description) {
      cy.get("textarea, [contenteditable='true'], [role='textbox']", { timeout: 4000 }).first().clear().type(description);
    }
  }

  clickSaveButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  createProject(name: string, description?: string) {
    this.clickCreateButton();
    this.fillProjectForm(name, description);
    this.clickSaveButton();
  }

  getProjectsList() {
    return cy.get(".project-item, [role='row'], li, div[class*='project']", { timeout: 4000 });
  }

  verifyProjectListDisplayed() {
    this.getProjectsList().should("have.length.greaterThan", 0);
  }

  clickEditButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/edit/i).first().click();
  }

  editProject(name: string, description?: string) {
    this.clickEditButton();
    this.fillProjectForm(name, description);
    this.clickSaveButton();
  }

  clickDeleteButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/delete/i).click();
  }

  confirmDelete() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/confirm|delete|yes/i).click();
  }

  deleteProject() {
    this.clickDeleteButton();
    this.confirmDelete();
  }

  getProjectCount() {
    return this.getProjectsList().its("length");
  }

  clickMoveUp() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/up|move up|▲/i).click();
  }

  clickMoveDown() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/down|move down|▼/i).click();
  }
}
