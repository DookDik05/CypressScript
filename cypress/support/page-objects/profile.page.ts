export class ProfilePage {
  visitProfile() {
    cy.visit("/profile");
  }

  clickEditButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/edit/i).first().click();
  }

  fillProfileForm(name?: string, email?: string) {
    if (name) {
      cy.get("input[type='text'], input[placeholder*='name']", { timeout: 4000 }).first().clear().type(name);
    }
    if (email) {
      cy.get("input[type='email'], input[placeholder*='email']", { timeout: 4000 }).first().clear().type(email);
    }
  }

  updateProfile(name?: string, email?: string) {
    this.clickEditButton();
    this.fillProfileForm(name, email);
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  changePassword(currentPassword: string, newPassword: string, confirmPassword: string) {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/change password|password/i).click();
    cy.get("input[type='password'], input[placeholder*='current']", { timeout: 4000 }).eq(0).clear().type(currentPassword);
    cy.get("input[type='password'], input[placeholder*='new']", { timeout: 4000 }).eq(1).clear().type(newPassword);
    cy.get("input[type='password'], input[placeholder*='confirm']", { timeout: 4000 }).eq(2).clear().type(confirmPassword);
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  verifyProfileUpdated() {
    cy.get("body", { timeout: 4000 }).should("contain", /updated|saved|success/i);
  }

  verifyPasswordChanged() {
    cy.get("body", { timeout: 4000 }).should("contain", /password|changed|updated|success/i);
  }
}
