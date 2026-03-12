describe("TC-DM: Daily Meeting Tests", () => {
  const loginPage = PageObjects.loginPage;
  const dailyMeetingPage = PageObjects.dailyMeetingPage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    dailyMeetingPage.visitDailyMeeting();
  });

  describe("TC-DM-001: Calendar View", () => {
    it("should display calendar with weekdays", () => {
      dailyMeetingPage.verifyCalendarDisplayed();
      dailyMeetingPage.verifyWeekDaysDisplayed();
    });
  });

  describe("TC-DM-002: Create Task From Date", () => {
    it("should create task with selected date", () => {
      dailyMeetingPage.clickDate(0);
      dailyMeetingPage.clickCreateTaskFromDate();
      cy.get("[data-testid='task-name-input']").type("Daily Meeting Task");
      cy.get("button:contains('Save')").click();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });
});
