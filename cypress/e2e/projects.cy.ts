describe("TC-PROJ: Projects Tests", () => {
  const loginPage = PageObjects.loginPage;
  const projectsPage = PageObjects.projectsPage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    projectsPage.visitProjects();
  });

  describe("TC-PROJ-001: Create Project", () => {
    it("should create a new project", () => {
      const projectName = `Test Project ${Date.now()}`;
      projectsPage.createProject(projectName, "Test Description");
      projectsPage.verifyProjectListDisplayed();
    });
  });

  describe("TC-PROJ-002: Edit Project", () => {
    it("should edit an existing project", () => {
      projectsPage.clickEditButton();
      projectsPage.fillProjectForm("Updated Project Name");
      projectsPage.clickSaveButton();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-PROJ-003: Delete Project", () => {
    it("should delete a project", () => {
      const initialCount = projectsPage.getProjectCount();
      projectsPage.clickDeleteButton();
      projectsPage.confirmDelete();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-PROJ-004: Reorder Project", () => {
    it("should reorder projects", () => {
      projectsPage.clickMoveUp(0);
      cy.get("[data-testid='success-message']").should("be.visible");
    });

    it("should move project down", () => {
      projectsPage.clickMoveDown(0);
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });
});
