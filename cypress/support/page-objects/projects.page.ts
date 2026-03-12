export class ProjectsPage {
  visitProjects() {
    cy.visit("/projects");
  }

  clickCreateButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/create|new|add/i).click();
  }

  fillProjectForm(name: string, description?: string) {
    cy.get('input[type="text"], input[placeholder*="name"], input[placeholder*="title"], input[aria-label*="name"]', { timeout: 4000 }).first().clear().type(name);
    if (description) {
      cy.get('textarea, [contenteditable="true"], [role="textbox"], input[type="text"][placeholder*="description"], input[type="text"][placeholder*="details"]', { timeout: 4000 }).first().clear().type(description);
    }
  }

  clickSaveButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit|create/i).click();
  }

  createProject(name: string, description?: string) {
    this.clickCreateButton();
    this.fillProjectForm(name, description);
    this.clickSaveButton();
  }

  getProjectsList() {
    return cy.get('.project-item, [role="row"], li, div[class*="project"], [class*="item"], tbody tr', { timeout: 4000 });
  }

  verifyProjectListDisplayed() {
    this.getProjectsList().should("have.length.greaterThan", 0);
  }

  clickEditButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"], span', { timeout: 4000 }).contains(/edit|update|modify/i).first().click();
  }

  editProject(name: string, description?: string) {
    this.clickEditButton();
    this.fillProjectForm(name, description);
    this.clickSaveButton();
  }

  clickDeleteButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/delete|remove|trash/i).click();
  }

  confirmDelete() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/confirm|delete|yes/i).click();
  }

  deleteProject() {
    this.clickDeleteButton();
    this.confirmDelete();
  }

  getProjectCount() {
    return this.getProjectsList().its("length");
  }

  clickMoveUp() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"], span', { timeout: 4000 }).contains(/up|move up|▲|^\s*↑|^\s*⬆/i).click();
  }

  clickMoveDown() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"], span', { timeout: 4000 }).contains(/down|move down|▼|^\s*↓|^\s*⬇/i).click();
  }
}
