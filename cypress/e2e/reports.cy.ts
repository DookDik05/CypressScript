describe("TC-REP: Performance Reports Tests", () => {
  const loginPage = PageObjects.loginPage;
  const reportsPage = PageObjects.reportsPage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    reportsPage.visitReports();
  });

  describe("TC-REP-001: Staff View", () => {
    it("should display staff performance", () => {
      reportsPage.verifyStaffView();
    });
  });

  describe("TC-REP-002: Admin View", () => {
    it("should display team performance for admin", () => {
      reportsPage.verifyTeamView();
    });
  });

  describe("TC-REP-003: Edit Actual Man-day", () => {
    it("should update man-day value", () => {
      reportsPage.editManDay("5.5");
      reportsPage.saveManDay();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });
});
