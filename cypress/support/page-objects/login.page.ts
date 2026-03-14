export class AuthPage {
  loginWithEmail(email: string, password: string) {
    cy.visit("/login");
    cy.wait(500);
    cy.get('input[name="email"], input[placeholder*="email"], input[placeholder*="Email"], input[aria-label*="email"]', { timeout: 8000 }).filter(':visible').clear().type(email, { delay: 50 });
    cy.get('input[name="password"], input[type="password"], input[placeholder*="password"], input[placeholder*="Password"], input[aria-label*="password"]', { timeout: 8000 }).filter(':visible').clear().type(password, { delay: 50 });
    cy.wait(200);
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 8000 }).filter(':visible').contains(/login|sign in|enter|submit/i).click();
  }

  login(email: string, password: string) {
    this.loginWithEmail(email, password);
  }

  visitLogin() {
    cy.visit("/login");
  }

  enterEmail(email: string) {
    cy.get('input[name="email"], input[placeholder*="email"], input[placeholder*="Email"], input[aria-label*="email"]', { timeout: 8000 }).filter(':visible').clear().type(email, { delay: 50 });
  }

  enterPassword(password: string) {
    cy.get('input[name="password"], input[type="password"], input[placeholder*="password"], input[placeholder*="Password"], input[aria-label*="password"]', { timeout: 8000 }).filter(':visible').clear().type(password, { delay: 50 });
  }

  clickSignIn() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 8000 }).contains(/login|sign in|enter|submit/i).click();
  }

  togglePasswordVisibility() {
    // Look for the password input first to find its container
    cy.get('input[type="password"], input[name="password"], input[type="text"][name="password"]', { timeout: 4000 })
      .filter(':visible')
      .first()
      .parent()
      .then(($parent) => {
        // Search for buttons or icons within the same container
        const $toggle = $parent.find('button, [role="button"], svg, i').filter((i, el) => {
          const html = el.outerHTML.toLowerCase();
          return html.includes('eye') || html.includes('visibility') || html.includes('toggle') || html.includes('show') || html.includes('hide');
        });
        
        if ($toggle.length > 0) {
          cy.wrap($toggle.first()).click({ force: true });
        } else {
          // Fallback: try to find any button sibling of the password field
          cy.get('input[name="password"], input[type="password"]').filter(':visible').first().siblings('button, [role="button"]').first().click({ force: true });
        }
      });
  }

  getPasswordInputType() {
    return cy.get('input[type="password"], input[name="password"], input[placeholder*="password"]', { timeout: 4000 }).first().then(($input) => {
      return $input.attr('type');
    });
  }

  clickForgotPassword() {
    cy.get('a, button, [role="button"], div[role="button"], span', { timeout: 4000 }).contains(/forgot|reset|password/i).click();
  }

  visitForgotPassword() {
    cy.visit("/login");
    cy.wait(500);
    cy.get('a, button, [role="button"], div[role="button"], span', { timeout: 4000 }).contains(/forgot|reset|password/i).click();
    cy.wait(500);
  }

  visitResetPassword() {
    // Some apps use hyphen, some use underscore. My testing showed underscore might be needed with a token.
    cy.visit("/reset_password?token=test_token");
    cy.wait(1000);
  }

  submitForgotPasswordForm(email: string) {
    cy.get('input[name="email"], input[placeholder*="email"], input[placeholder*="Email"], input[aria-label*="email"]', { timeout: 4000 }).type(email);
    cy.get('button, [role="button"], div[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/send|submit/i).click();
  }

  resetPassword(token: string, newPassword: string, confirmPassword: string) {
    cy.get('input[type="password"], input[placeholder*="password"], input[placeholder*="รหัสผ่าน"]', { timeout: 8000 }).first().clear().type(newPassword);
    cy.get('input[type="password"], input[placeholder*="confirm"], input[placeholder*="ยืนยัน"]', { timeout: 8000 }).then(($els) => {
      if ($els.length > 1) {
        cy.wrap($els).last().clear().type(confirmPassword);
      } else {
        // Try to find by index if placeholder matching didn't yield multiple
        cy.get('input[type="password"]', { timeout: 4000 }).eq(1).clear().type(confirmPassword);
      }
    });
    cy.get('button, [type="submit"]', { timeout: 4000 }).contains(/reset|submit|save|confirm|ยืนยัน|บันทึก/i).click();
  }

  verifyLoginSuccess() {
    cy.url({ timeout: 8000 }).should("match", /dashboard|personal|combined/);
  }

  verifyErrorMessage(message: string) {
    cy.get("body", { timeout: 4000 }).should("contain", message);
  }

  verifyErrorMessageDisplayed(message?: string) {
    if (message) {
      cy.get("body", { timeout: 4000 }).should("contain", message);
    } else {
      cy.get('[role="alert"], .error-message, .error, .text-red-500, div[class*="error"], p[class*="error"], span[class*="error"]', { timeout: 4000 }).should("be.visible");
    }
  }
}

export class LoginPage extends AuthPage {
  visit() {
    cy.visit("/");
  }
}
