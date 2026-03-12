describe("TC-AUTH: Authentication Tests", () => {
  const validEmail = Cypress.env("username");
  const validPassword = Cypress.env("password");

  describe("TC-AUTH-001: Login สำเร็จ", () => {
    it("should login successfully with valid credentials", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.login(validEmail, validPassword);
      cy.url().should("include", /dashboard|personal-info|combined/);
      cy.get("body", { timeout: 8000 }).should("contain", /Dashboard|Personal/);
    });
  });

  describe("TC-AUTH-002: Login password ผิด", () => {
    it("should show error when password is incorrect", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.visitLogin();
      loginPage.enterEmail(validEmail);
      loginPage.enterPassword("wrongpassword");
      loginPage.clickSignIn();
      loginPage.verifyErrorMessageDisplayed("Invalid email or password");
    });
  });

  describe("TC-AUTH-003: Show / Hide Password", () => {
    it("should toggle password visibility", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.visitLogin();
      loginPage.enterPassword("testpassword");

      // Check that password field exists
      cy.get('input[type="password"]', { timeout: 4000 }).should("exist");

      // Toggle to show
      loginPage.togglePasswordVisibility();
      cy.get('input[type="text"]', { timeout: 4000 }).should("have.value", "testpassword");

      // Toggle back to hide
      loginPage.togglePasswordVisibility();
      cy.get('input[type="password"]', { timeout: 4000 }).should("have.value", "testpassword");
    });
  });

  describe("TC-AUTH-004: Forgot Password Flow", () => {
    it("should send reset link to email", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.visitForgotPassword();
      loginPage.enterEmail(validEmail);
      cy.get("button", { timeout: 4000 }).contains(/submit|send/i).click();
      cy.get("div, span, p", { timeout: 4000 }).contains(/reset link|sent/i).should("be.visible");
    });
  });

  describe("TC-AUTH-005: Reset Password", () => {
    it("should update password successfully", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.visitResetPassword();
      cy.get('input[type="password"], input[name*="password"], input[placeholder*="password"]', { timeout: 4000 }).first().type("newpassword123");
      cy.get('input[type="password"], input[name*="password"], input[placeholder*="password"]', { timeout: 4000 }).eq(1).type("newpassword123");
      cy.get("button", { timeout: 4000 }).contains(/reset|submit|save|confirm/i).click();
      cy.get("div, span, p", { timeout: 4000 }).contains(/success|password.*updated|password.*changed/i).should("be.visible");
    });
  });
});
