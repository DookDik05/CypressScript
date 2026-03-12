export class AuthPage {
  loginWithEmail(email: string, password: string) {
    cy.visit("/login");
    cy.wait(500);
    cy.get('input[name="email"]', { timeout: 8000 }).clear().type(email, { delay: 50 });
    cy.get('input[type="password"]', { timeout: 8000 }).clear().type(password, { delay: 50 });
    cy.wait(200);
    cy.get('button[data-slot="button"]', { timeout: 8000 }).then(($btn) => {
      if ($btn.length) {
        $btn[0].click();
      } else {
        cy.get("button").contains(/login|sign in/i).click();
      }
    });
  }

  login(email: string, password: string) {
    this.loginWithEmail(email, password);
  }

  visitLogin() {
    cy.visit("/login");
  }

  enterEmail(email: string) {
    cy.get('input[name="email"]', { timeout: 8000 }).clear().type(email, { delay: 50 });
  }

  enterPassword(password: string) {
    cy.get('input[type="password"]', { timeout: 8000 }).clear().type(password, { delay: 50 });
  }

  clickSignIn() {
    cy.get('button[data-slot="button"]', { timeout: 8000 }).then(($btn) => {
      if ($btn.length) {
        $btn[0].click();
      } else {
        cy.get("button").contains(/login|sign in/i).click();
      }
    });
  }

  togglePasswordVisibility() {
    cy.get("button[aria-label*='password'], button[title*='password'], button svg", { timeout: 4000 }).first().click();
  }

  getPasswordInputType() {
    return cy.get('input[type="password"]', { timeout: 4000 }).should("be.visible");
  }

  clickForgotPassword() {
    cy.get("a, button", { timeout: 4000 }).contains(/forgot|reset/i).click();
  }

  visitForgotPassword() {
    cy.visit("/forgot-password");
  }

  visitResetPassword() {
    cy.visit("/reset-password");
  }

  submitForgotPasswordForm(email: string) {
    cy.get('input[name="email"]', { timeout: 4000 }).type(email);
    cy.get("button", { timeout: 4000 }).contains(/send|submit/i).click();
  }

  resetPassword(token: string, newPassword: string, confirmPassword: string) {
    cy.get("input", { timeout: 4000 }).eq(0).type(newPassword);
    cy.get("input", { timeout: 4000 }).eq(1).type(confirmPassword);
    cy.get("button", { timeout: 4000 }).contains(/reset|submit/i).click();
  }

  verifyLoginSuccess() {
    cy.url({ timeout: 8000 }).should("include", "/dashboard");
  }

  verifyErrorMessage(message: string) {
    cy.get("body", { timeout: 4000 }).should("contain", message);
  }

  verifyErrorMessageDisplayed() {
    cy.get('div, p, span', { timeout: 4000 }).contains(/error|incorrect|invalid/i).should("be.visible");
  }
}

export class LoginPage extends AuthPage {
  visit() {
    cy.visit("/");
  }
}


