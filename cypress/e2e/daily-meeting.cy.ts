describe("TC-DM: Daily Meeting Tests", () => {
  const loginPage = PageObjects.loginPage;
  const dailyMeetingPage = PageObjects.dailyMeetingPage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    // Wait for login to complete to avoid 401 race condition
    loginPage.verifyLoginSuccess();
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
      // Calculate a valid weekday to ensure it appears on work-week calendars
      const d = new Date();
      if (d.getDay() === 6) d.setDate(d.getDate() + 2); // If Saturday, add 2 days
      else if (d.getDay() === 0) d.setDate(d.getDate() + 1); // If Sunday, add 1 day
      const validDate = d.getDate();
      
      dailyMeetingPage.clickDate(validDate);
      
      dailyMeetingPage.clickCreateTaskFromDate();
      
      // Use generic selectors since the app doesn't have data-testid attributes
      cy.get('input[type="text"], input[placeholder*="task" i], input[placeholder*="name" i], textarea, input', { timeout: 10000 })
        .filter(':visible')
        .first().type("Daily Meeting Task");
      cy.contains('button, [role="button"], [class*="btn"]', /save|submit/i, { timeout: 10000 }).click({ force: true });
      
      dailyMeetingPage.verifyTaskCreated("Daily Meeting Task");
    });
  });
});
