describe("TC-DASH: Dashboard Tests", () => {
  const loginPage = PageObjects.loginPage;
  const dashboardPage = PageObjects.dashboardPage;

  beforeEach(() => {
    // Login before each test
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    dashboardPage.visitDashboard();
  });

  describe("TC-DASH-001: Dashboard Summary", () => {
    it("should display dashboard summary elements", () => {
      dashboardPage.verifyDashboardElements();
    });

    it("should display total projects", () => {
      dashboardPage.getTotalProjects().then((projects) => {
        expect(projects).to.exist;
      });
    });

    it("should display total tasks", () => {
      dashboardPage.getTotalTasks().then((tasks) => {
        expect(tasks).to.exist;
      });
    });

    it("should display completed tasks", () => {
      dashboardPage.getCompletedTasks().then((completed) => {
        expect(completed).to.exist;
      });
    });
  });

  describe("TC-DASH-002: Status Breakdown", () => {
    it("should display task status breakdown", () => {
      dashboardPage.verifyStatusBreakdown();
    });

    it("should display all status categories", () => {
      dashboardPage.getStatusCount("not-started");
      dashboardPage.getStatusCount("in-progress");
      dashboardPage.getStatusCount("review");
      dashboardPage.getStatusCount("done");
    });
  });
});
