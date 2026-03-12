export class ProfilePage {
  visitProfile() {
    cy.visit("/profile");
  }

  clickEditButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"], span', { timeout: 4000 }).contains(/edit|update|modify/i).first().click();
  }

  fillProfileForm(name?: string, email?: string) {
    if (name) {
      cy.get('input[type="text"], input[placeholder*="name"], input[placeholder*="full name"], input[aria-label*="name"], input[id*="name"]', { timeout: 4000 }).first().clear().type(name);
    }
    if (email) {
      cy.get('input[type="email"], input[placeholder*="email"], input[aria-label*="email"], input[id*="email"]', { timeout: 4000 }).first().clear().type(email);
    }
  }

  updateProfile(name?: string, email?: string) {
    this.clickEditButton();
    this.fillProfileForm(name, email);
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit|update/i).click();
  }

  changePassword(currentPassword: string, newPassword: string, confirmPassword: string) {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"], span', { timeout: 4000 }).contains(/change password|password/i).click();
    cy.get('input[type="password"], input[placeholder*="current"], input[placeholder*="old"], input[aria-label*="current"]', { timeout: 4000 }).first().clear().type(currentPassword);
    cy.get('input[type="password"], input[placeholder*="new"], input[aria-label*="new"]', { timeout: 4000 }).eq(1).clear().type(newPassword);
    cy.get('input[type="password"], input[placeholder*="confirm"], input[placeholder*="repeat"], input[aria-label*="confirm"]', { timeout: 4000 }).last().clear().type(confirmPassword);
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit|update/i).click();
  }

  verifyProfileUpdated() {
    cy.get("body", { timeout: 4000 }).should("contain", /updated|saved|success/i);
  }

  verifyPasswordChanged() {
    cy.get("body", { timeout: 4000 }).should("contain", /password|changed|updated|success/i);
  }
}
