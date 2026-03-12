export class TasksPage {
  // Updated selectors to match likely DOM structure
  private createButton = ".task-create-btn, .btn-create, button";
  private taskNameInput = "input[name='taskName'], input[type='text']";
  private taskDescriptionInput = "textarea[name='taskDescription'], textarea";
  private saveButton = ".task-save-btn, .btn-save, button";
  private editButton = ".task-edit-btn, .btn-edit, button";
  private deleteButton = ".task-delete-btn, .btn-delete, button";
  private confirmButton = ".task-confirm-btn, .btn-confirm, button";
  private taskList = ".task-list, [role='main'], ul";
  private taskItem = ".task-item, [role='row'], li";
  private addSubtaskButton = ".task-add-subtask-btn, .btn-add-subtask, button";
  private uploadButton = ".task-upload-btn, .btn-upload, button";
  private fileInput = "input[name='file'], input[type='file']";
  private importButton = ".task-import-btn, .btn-import, button";

  visitTasks() {
    cy.visit("/tasks");
  }

  clickCreateButton() {
    cy.get(this.createButton).click();
  }

  fillTaskForm(name: string, description?: string) {
    cy.get(this.taskNameInput).clear().type(name);
    if (description) {
      cy.get(this.taskDescriptionInput).clear().type(description);
    }
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
  }

  createTask(name: string, description?: string) {
    this.clickCreateButton();
    this.fillTaskForm(name, description);
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

  openFirstTask() {
    cy.get(this.taskItem).first().click();
  }

  clickAddSubtask() {
    cy.get(this.addSubtaskButton).click();
  }

  clickUploadButton() {
    cy.get(this.uploadButton).click();
  }

  uploadFile(filePath: string) {
    cy.get(this.fileInput).selectFile(filePath);
  }

  clickImportButton() {
    cy.get(this.importButton).click();
  }

  getTaskCount() {
    return cy.get(this.taskItem).its("length");
  }

  verifyTaskListDisplayed() {
    cy.get(this.taskList).should("be.visible");
  }
}
