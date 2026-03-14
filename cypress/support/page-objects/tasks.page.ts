export class TasksPage {
  visitTasks() {
    cy.visit("/combined/app/tasks");
  }

  fillTaskForm(name: string) {
    cy.get("input[placeholder*='name' i], input[aria-label*='name' i], input", { timeout: 4000 }).first().type(name);
  }

  createTask(name: string) {
    cy.get("button", { timeout: 4000 }).contains(/create|new|add/i).click();
    this.fillTaskForm(name);
    cy.get("button", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  clickAddSubtask() {
    cy.get("button", { timeout: 4000 }).contains(/subtask|sub-task|add sub/i).click();
  }

  clickUploadButton() {
    cy.get("button, [role='button']", { timeout: 4000 }).contains(/upload|attach|file/i).click();
  }

  clickImportButton() {
    cy.get("button", { timeout: 4000 }).contains(/import|upload|excel/i).click();
  }

  clickEditButton() {
    cy.get("button", { timeout: 4000 }).contains(/edit/i).click();
  }

  clickDeleteButton() {
    cy.get("button", { timeout: 4000 }).contains(/delete|remove/i).click();
  }

  openFirstTask() {
    cy.get("div[class*='task'], li, [role='row'], tbody tr, article, [class*='item']", { timeout: 4000 }).first().click();
  }
}
