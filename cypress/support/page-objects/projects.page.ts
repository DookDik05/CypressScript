export class ProjectsPage {
  visitProjects() {
    cy.visit("/combined/app/projects");
  }

  getProjectsList() {
    return cy.get("div[class*='project'], li, [role='row'], tbody tr, article, [class*='card']", { timeout: 4000 });
  }

  createProject(name: string) {
    cy.get("button", { timeout: 4000 }).contains(/create|new|add/i).click();
    cy.get("input", { timeout: 4000 }).first().type(name);
    cy.get("button", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  editProject(projectName: string, newName: string) {
    this.getProjectsList().contains(projectName).click();
    cy.get("button", { timeout: 4000 }).contains(/edit/i).click();
    cy.get("input", { timeout: 4000 }).clear().type(newName);
    cy.get("button", { timeout: 4000 }).contains(/save/i).click();
  }

  deleteProject(projectName: string) {
    this.getProjectsList().contains(projectName).click();
    cy.get("button", { timeout: 4000 }).contains(/delete|remove/i).click();
    cy.get("button", { timeout: 4000 }).contains(/confirm|yes|delete/i).click();
  }

  clickEditButton() {
    cy.get("button", { timeout: 4000 }).contains(/edit/i).click();
  }

  clickMoveUp() {
    cy.get("button, [role='button'], svg", { timeout: 4000 }).contains(/up|↑|move up/i).click();
  }

  clickMoveDown() {
    cy.get("button", { timeout: 4000 }).contains(/down|↓|move down/i).click();
  }

  fillProjectForm(name: string) {
    cy.get("input, textarea", { timeout: 4000 }).first().type(name);
  }

  getProjectCount() {
    return this.getProjectsList().then(($items) => {
      return $items.length;
    });
  }
}
