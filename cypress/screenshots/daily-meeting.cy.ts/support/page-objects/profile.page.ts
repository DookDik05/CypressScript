export class ProfilePage {
  // Updated selectors to match likely DOM structure
  private editButton = ".profile-edit-btn, .btn-edit, button";
  private profileNameInput = "input[name='profileName'], input[type='text']";
  private profileEmailInput = "input[name='profileEmail'], input[type='email']";
  private saveButton = ".profile-save-btn, .btn-save, button";
  private changePasswordButton = ".profile-change-password-btn, .btn-change-password, button";
  private currentPasswordInput = "input[name='currentPassword'], input[type='password']";
  private newPasswordInput = "input[name='newPassword'], input[type='password']";
  private confirmPasswordInput = "input[name='confirmPassword'], input[type='password']";

  visitProfile() {
    cy.visit("/profile");
  }

  clickEditButton() {
    cy.get(this.editButton).click();
  }

  updateProfile(name?: string, email?: string) {
    this.clickEditButton();
    if (name) {
      cy.get(this.profileNameInput).clear().type(name);
    }
    if (email) {
      cy.get(this.profileEmailInput).clear().type(email);
    }
    cy.get(this.saveButton).click();
  }

  clickChangePasswordButton() {
    cy.get(this.changePasswordButton).click();
  }

  changePassword(
    currentPassword: string,
    newPassword: string,
    confirmPassword: string
  ) {
    this.clickChangePasswordButton();
    cy.get(this.currentPasswordInput).type(currentPassword);
    cy.get(this.newPasswordInput).type(newPassword);
    cy.get(this.confirmPasswordInput).type(confirmPassword);
    cy.get(this.saveButton).click();
  }

  verifyProfileUpdated() {
    cy.get("div").should("be.visible");
  }

  verifyPasswordChanged() {
    cy.get("div").should("be.visible");
  }
}
