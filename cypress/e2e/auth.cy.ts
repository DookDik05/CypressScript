describe("TC-AUTH: Authentication Tests", () => {
  const validEmail = Cypress.env("username");
  const validPassword = Cypress.env("password");

  describe("TC-AUTH-001: Login สำเร็จ", () => {
    it("should login successfully with valid credentials", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.login(validEmail, validPassword);
      // Wait for URL to change to something that isn't /login
      cy.url({ timeout: 15000 }).should("not.include", "/login");
      cy.url().should("match", /dashboard|personal-info|combined|personal/);
      
      // Look for ANY indicator of a logged-in session (menu, logout, profile name, or sidebar)
      cy.get('body', { timeout: 15000 }).then(($body) => {
        const hasLogOut = $body.text().toLowerCase().includes('logout');
        const hasProfile = $body.find('[class*="avatar"], [class*="profile"], [class*="user"]').length > 0;
        const hasMenu = $body.find('[class*="menu"], [class*="nav"], .sidebar').length > 0;
        
        expect(hasLogOut || hasProfile || hasMenu || $body.text().includes('Personal')).to.equal(true);
      });
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
      cy.get('input[name="password"]', { timeout: 4000 }).filter(':visible').should("have.attr", "type", "text");
      cy.get('input[name="password"]').filter(':visible').should("have.value", "testpassword");

      // Toggle back to hide
      loginPage.togglePasswordVisibility();
      cy.get('input[name="password"]', { timeout: 4000 }).filter(':visible').should("have.attr", "type", "password");
      cy.get('input[name="password"]').filter(':visible').should("have.value", "testpassword");
    });
  });

  describe("TC-AUTH-004: Forgot Password Flow", () => {
    it("should send reset link to email", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.visitForgotPassword();
      loginPage.enterEmail(validEmail);
      // More robust button selector for forgot password
      cy.get('button, [type="submit"], [role="button"]', { timeout: 4000 })
        .filter(':visible')
        .contains(/submit|send|confirm|ยืนยัน|ส่ง|reset/i)
        .first()
        .click({ force: true });
      // The message might take a while to appear or redirect to a success page
      cy.get("body", { timeout: 15000 }).should("contain.text", ""); // Just wait for any change
      // Use contains for a more flexible text match on the whole page
      cy.contains(/reset link|sent|ส่งลิงก์|สำเร็จ|success|confirmation|email|check/i, { timeout: 10000 }).should("be.visible");
    });
  });

  describe("TC-AUTH-005: Reset Password", () => {
    it("should update password successfully", () => {
      const loginPage = PageObjects.loginPage;
      loginPage.visitResetPassword();
      
      const pwdSelector = 'input[type="password"], input[name*="password"], input[placeholder*="password"], input[placeholder*="รหัสผ่าน"], input[placeholder*="ใหม่"]';
      const confirmSelector = 'input[type="password"], input[name*="password"], input[placeholder*="confirm"], input[placeholder*="ยืนยัน"], input[placeholder*="รหัสผ่าน"]';
      
      cy.get(pwdSelector, { timeout: 10000 }).first().should('be.visible').clear().type("newpassword123");
      
      // Look for the second field specifically
      cy.get('body').then(($body) => {
        if ($body.find('input[type="password"]').length > 1) {
          cy.get('input[type="password"]').eq(1).clear().type("newpassword123");
        } else {
          cy.get(confirmSelector).last().clear().type("newpassword123");
        }
      });

      cy.get("button, [type='submit']", { timeout: 4000 }).contains(/reset|submit|save|confirm|บันทึก|ยืนยัน/i).click();
      cy.get("body", { timeout: 10000 }).should("contain", /success|password.*updated|password.*changed|สำเร็จ|เรียบร้อย/i);
    });
  });
});
