describe("TC-AUTH: Authentication Tests", () => {
  const validEmail = Cypress.env("username");
  const validPassword = Cypress.env("password");

  describe("TC-AUTH-001: Login สำเร็จ", () => {
    it("should login successfully with valid credentials", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.login(validEmail, validPassword);
      cy.url().should("include", "/dashboard");
      cy.get("body").should("contain", "Dashboard");
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

      // Initially should be hidden (type="password")
      loginPage
        .getPasswordInputType()
        .then((type) => {
          expect(type).to.equal("password");
        });

      // Toggle to show
      loginPage.togglePasswordVisibility();
      loginPage
        .getPasswordInputType()
        .then((type) => {
          expect(type).to.equal("text");
        });

      // Toggle back to hide
      loginPage.togglePasswordVisibility();
      loginPage
        .getPasswordInputType()
        .then((type) => {
          expect(type).to.equal("password");
        });
    });
  });

  describe("TC-AUTH-004: Forgot Password Flow", () => {
    it("should send reset link to email", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.visitForgotPassword();
      loginPage.enterEmail(validEmail);
      cy.get("button:contains('Submit')").click();
      cy.get("[data-testid='success-message']").should(
        "contain",
        "reset link"
      );
    });
  });

  describe("TC-AUTH-005: Reset Password", () => {
    it("should update password successfully", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.visitResetPassword();
      cy.get("[data-testid='new-password-input']").type("newpassword123");
      cy.get("[data-testid='confirm-password-input']").type("newpassword123");
      cy.get("button:contains('Submit')").click();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });
});
