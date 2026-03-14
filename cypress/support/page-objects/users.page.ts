export class UsersPage {
  visitUsers() {
    cy.visit("/combined/manageuser");
  }

  fillUserForm(email: string, name: string) {
    cy.get("input[type='email'], input[placeholder*='email' i], input", { timeout: 4000 }).first().type(email);
    cy.get("input[placeholder*='name' i], input[aria-label*='name' i], input", { timeout: 4000 }).eq(1).type(name);
  }

  createUser(email: string, name: string) {
    cy.get("button", { timeout: 4000 }).contains(/create|new|add/i).click();
    this.fillUserForm(email, name);
    cy.get("button", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  clickEditButton() {
    cy.get("button", { timeout: 4000 }).contains(/edit/i).click();
  }

  clickResetPasswordButton() {
    cy.get("button", { timeout: 4000 }).contains(/reset|password/i).click();
  }

  clickResetPassword() {
    this.clickResetPasswordButton();
  }

  verifyNewPasswordGenerated() {
    cy.contains(/password|generated|reset/i, { timeout: 4000 }).should("exist");
  }

  getUserList() {
    return cy.get("div[class*='user'], li, [role='row'], tbody tr", { timeout: 4000 });
  }
}
