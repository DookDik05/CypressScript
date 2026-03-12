describe("TC-TASK: Tasks / Backlog Tests", () => {
  const loginPage = PageObjects.loginPage;
  const tasksPage = PageObjects.tasksPage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    tasksPage.visitTasks();
  });

  describe("TC-TASK-001: Create Task", () => {
    it("should create a new task", () => {
      const taskName = `Test Task ${Date.now()}`;
      tasksPage.createTask(taskName, "Task Description");
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-TASK-002: Edit Task", () => {
    it("should edit an existing task", () => {
      tasksPage.clickEditButton();
      tasksPage.fillTaskForm("Updated Task Name");
      tasksPage.clickSaveButton();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-TASK-003: Delete Task", () => {
    it("should delete a task", () => {
      tasksPage.clickDeleteButton();
      tasksPage.confirmDelete();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-TASK-004: Add Subtask", () => {
    it("should add a subtask", () => {
      tasksPage.openFirstTask();
      tasksPage.clickAddSubtask();
      cy.get("[data-testid='subtask-name-input']").type("Subtask Name");
      cy.get("button:contains('Save')").click();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-TASK-005: Upload Attachment", () => {
    it("should upload file attachment", () => {
      tasksPage.openFirstTask();
      tasksPage.clickUploadButton();
      tasksPage.uploadFile("cypress/fixtures/example.json");
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-TASK-006: Import Excel", () => {
    it("should import tasks from Excel", () => {
      tasksPage.clickImportButton();
      tasksPage.uploadFile("cypress/fixtures/example.json");
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });
});
