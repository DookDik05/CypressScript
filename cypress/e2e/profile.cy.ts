describe("TC-PI: Personal Information Tests", () => {
  const loginPage = PageObjects.loginPage;
  const profilePage = PageObjects.profilePage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    profilePage.visitProfile();
  });

  describe("TC-PI-001: Update Profile", () => {
    it("should update user profile", () => {
      profilePage.updateProfile("Updated Name", "newemail@tlogical.com");
      profilePage.verifyProfileUpdated();
    });
  });

  describe("TC-PI-002: Change Password", () => {
    it("should change user password", () => {
      profilePage.changePassword(
        Cypress.env("password"),
        "newpassword123",
        "newpassword123"
      );
      profilePage.verifyPasswordChanged();
    });
  });
});
