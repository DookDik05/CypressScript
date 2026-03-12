describe("TC-USER: Manage User Tests", () => {
  const loginPage = PageObjects.loginPage;
  const usersPage = PageObjects.usersPage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    usersPage.visitUsers();
  });

  describe("TC-USER-001: Create User", () => {
    it("should create a new user", () => {
      const userEmail = `testuser${Date.now()}@tlogical.com`;
      usersPage.createUser(userEmail, "Test User");
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-USER-002: Edit User", () => {
    it("should update user information", () => {
      usersPage.clickEditButton();
      cy.get("[data-testid='user-name-input']").clear().type("Updated Name");
      usersPage.clickSaveButton();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-USER-003: Reset Password", () => {
    it("should generate new password for user", () => {
      usersPage.clickResetPassword();
      cy.get("[data-testid='confirm-button']").click();
      usersPage.verifyNewPasswordGenerated();
    });
  });
});
