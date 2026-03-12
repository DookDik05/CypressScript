export class LoginPage {
  // CSS selectors for form elements
  private readonly emailInput = 'input[name="email"]';
  private readonly passwordInput = 'input[type="password"]';
  private readonly signInButton = 'button[data-slot="button"]';  // Target button by data-slot attribute
  private readonly errorMessage = '.error-message, [role="alert"], .text-red-500';
  // Password toggle button is inside the relative div container with the password input
  private readonly passwordToggle = 'input[type="password"] ~ button';
  private readonly forgotPasswordLink = 'a[href="/forgot_password"]';
  private readonly resetPasswordLink = 'a[href="/reset-password"]';

  visitLogin() {
    cy.visit("/login");
    cy.get("body").should("be.visible");
  }

  visitForgotPassword() {
    cy.visit("/forgot_password");
  }

  visitResetPassword() {
    cy.visit("/reset-password");
  }

  enterEmail(email: string) {
    cy.get(this.emailInput).clear().type(email);
  }

  enterPassword(password: string) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickSignIn() {
    cy.get(this.signInButton).click();
  }

  togglePasswordVisibility() {
    cy.get(this.passwordToggle).click();
  }

  getPasswordInputType() {
    return cy.get(this.passwordInput).invoke("attr", "type");
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  verifyErrorMessageDisplayed(message: string) {
    cy.get(this.errorMessage).should("contain", message);
  }

  login(email: string, password: string) {
    this.visitLogin();
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickSignIn();
  }
}

