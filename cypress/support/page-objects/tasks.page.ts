export class TasksPage {
  visitTasks() {
    cy.visit("/tasks");
  }

  clickCreateButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/create|new|add/i).click();
  }

  fillTaskForm(name: string, description?: string) {
    cy.get('input[type="text"], input[placeholder*="name"], input[placeholder*="title"], input[aria-label*="name"]', { timeout: 4000 }).first().clear().type(name);
    if (description) {
      cy.get('textarea, [contenteditable="true"], [role="textbox"], input[type="text"][placeholder*="description"], input[type="text"][placeholder*="details"]', { timeout: 4000 }).first().clear().type(description);
    }
  }

  clickSaveButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit|create/i).click();
  }

  createTask(name: string, description?: string) {
    this.clickCreateButton();
    this.fillTaskForm(name, description);
    this.clickSaveButton();
  }

  clickEditButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"], span', { timeout: 4000 }).contains(/edit|update|modify/i).first().click();
  }

  clickDeleteButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/delete|remove|trash/i).click();
  }

  confirmDelete() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/confirm|delete|yes/i).click();
  }

  clickAddSubtask() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/add|subtask|sub/i).click();
  }

  clickUploadButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/upload|attach/i).click();
  }

  clickImportButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/import/i).click();
  }

  openFirstTask() {
    cy.get('.task-item, [role="row"], li, div[class*="task"], [class*="item"], tbody tr', { timeout: 4000 }).first().click();
  }

  addSubtask(taskName: string) {
    this.clickAddSubtask();
    cy.get('input[type="text"], input[placeholder*="task"], input[placeholder*="name"], textarea', { timeout: 4000 }).type(taskName);
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit|add/i).click();
  }

  uploadFile(filePath: string) {
    cy.get('input[type="file"]', { timeout: 4000 }).selectFile(filePath);
    this.clickUploadButton();
  }

  importFromExcel(filePath: string) {
    cy.get('input[type="file"]', { timeout: 4000 }).selectFile(filePath);
    this.clickImportButton();
  }
}
