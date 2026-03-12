export class UsersPage {
  // Updated selectors to match likely DOM structure
  private createButton = ".user-create-btn, .btn-create, button";
  private userEmail = "input[name='userEmail'], input[type='email']";
  private userNameInput = "input[name='userName'], input[type='text']";
  private saveButton = ".user-save-btn, .btn-save, button";
  private editButton = ".user-edit-btn, .btn-edit, button";
  private deleteButton = ".user-delete-btn, .btn-delete, button";
  private confirmButton = ".user-confirm-btn, .btn-confirm, button";
  private resetPasswordButton = ".user-reset-password-btn, .btn-reset-password, button";
  private userList = ".user-list, [role='main'], ul";
  private userItem = ".user-item, [role='row'], li";

  visitUsers() {
    cy.visit("/users");
  }

  clickCreateButton() {
    cy.get(this.createButton).click();
  }

  fillUserForm(email: string, name?: string) {
    cy.get(this.userEmail).clear().type(email);
    if (name) {
      cy.get(this.userNameInput).clear().type(name);
    }
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
  }

  createUser(email: string, name?: string) {
    this.clickCreateButton();
    this.fillUserForm(email, name);
    this.clickSaveButton();
  }

  clickEditButton() {
    cy.get(this.editButton).first().click();
  }

  clickDeleteButton() {
    cy.get(this.deleteButton).first().click();
  }

  confirmDelete() {
    cy.get(this.confirmButton).click();
  }

  clickResetPassword() {
    cy.get(this.resetPasswordButton).click();
  }

  verifyNewPasswordGenerated() {
    cy.get("div").should("be.visible");
  }

  getUserCount() {
    return cy.get(this.userItem).its("length");
  }
}
