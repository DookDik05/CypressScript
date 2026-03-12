export class AuthPage {
  loginWithEmail(email: string, password: string) {
    cy.visit("/login");
    cy.wait(500);
    cy.get('input[name="email"], input[placeholder*="email"], input[placeholder*="Email"], input[aria-label*="email"]', { timeout: 8000 }).clear().type(email, { delay: 50 });
    cy.get('input[name="password"], input[type="password"], input[placeholder*="password"], input[placeholder*="Password"], input[aria-label*="password"]', { timeout: 8000 }).clear().type(password, { delay: 50 });
    cy.wait(200);
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 8000 }).contains(/login|sign in|enter|submit/i).click();
  }

  login(email: string, password: string) {
    this.loginWithEmail(email, password);
  }

  visitLogin() {
    cy.visit("/login");
  }

  enterEmail(email: string) {
    cy.get('input[name="email"], input[placeholder*="email"], input[placeholder*="Email"], input[aria-label*="email"]', { timeout: 8000 }).clear().type(email, { delay: 50 });
  }

  enterPassword(password: string) {
    cy.get('input[name="password"], input[type="password"], input[placeholder*="password"], input[placeholder*="Password"], input[aria-label*="password"]', { timeout: 8000 }).clear().type(password, { delay: 50 });
  }

  clickSignIn() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 8000 }).contains(/login|sign in|enter|submit/i).click();
  }

  togglePasswordVisibility() {
    // Try to find and click the password visibility toggle button
    cy.get('button, [role="button"], svg, i', { timeout: 4000 })
      .filter((index, el) => {
        const text = Cypress.$(el).text();
        const ariaLabel = Cypress.$(el).attr('aria-label') || '';
        const title = Cypress.$(el).attr('title') || '';
        return /show|hide|toggle|eye|visibility|password/i.test(text + ariaLabel + title);
      })
      .first()
      .click({ force: true });
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
    cy.visit("/login");
    cy.wait(500);
  }

  submitForgotPasswordForm(email: string) {
    cy.get('input[name="email"], input[placeholder*="email"], input[placeholder*="Email"], input[aria-label*="email"]', { timeout: 4000 }).type(email);
    cy.get('button, [role="button"], div[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/send|submit/i).click();
  }

  resetPassword(token: string, newPassword: string, confirmPassword: string) {
    cy.get('input[type="password"], input[name*="password"], input[placeholder*="new"], input[placeholder*="New"]', { timeout: 4000 }).first().clear().type(newPassword);
    cy.get('input[type="password"], input[name*="password"], input[placeholder*="confirm"], input[placeholder*="Confirm"]', { timeout: 4000 }).last().clear().type(confirmPassword);
    cy.get('button, [role="button"], div[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/reset|submit|save/i).click();
  }

  verifyLoginSuccess() {
    cy.url({ timeout: 8000 }).should("include", /dashboard|personal|combined/);
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


