export class UsersPage {
  visitUsers() {
    cy.visit("/users");
  }

  clickCreateButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/create|new|add/i).click();
  }

  fillUserForm(email: string, name?: string) {
    cy.get('input[type="email"], input[placeholder*="email"], input[aria-label*="email"], input[id*="email"]', { timeout: 4000 }).first().clear().type(email);
    if (name) {
      cy.get('input[type="text"], input[placeholder*="name"], input[placeholder*="full name"], input[aria-label*="name"], input[id*="name"]', { timeout: 4000 }).first().clear().type(name);
    }
  }

  clickSaveButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit|create/i).click();
  }

  createUser(email: string, name?: string) {
    this.clickCreateButton();
    this.fillUserForm(email, name);
    this.clickSaveButton();
  }

  clickEditButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"], span', { timeout: 4000 }).contains(/edit|update|modify/i).first().click();
  }

  clickResetPasswordButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/reset|password/i).click();
  }

  verifyNewPasswordGenerated() {
    cy.get("body", { timeout: 4000 }).should("contain", /password|generated|created|reset|sent/i);
  }

  editUser(name?: string, email?: string) {
    this.clickEditButton();
    if (name) {
      cy.get('input[type="text"], input[placeholder*="name"], input[placeholder*="full name"], input[aria-label*="name"]', { timeout: 4000 }).first().clear().type(name);
    }
    if (email) {
      cy.get('input[type="email"], input[placeholder*="email"], input[aria-label*="email"]', { timeout: 4000 }).first().clear().type(email);
    }
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit|update/i).click();
  }

  clickResetPassword() {
    this.clickResetPasswordButton();
  }

  confirmResetPassword() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/confirm|yes|reset/i).click();
  }

  resetUserPassword() {
    this.clickResetPassword();
    this.confirmResetPassword();
  }
}
