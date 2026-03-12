describe("TC-NOTI: Notifications Tests", () => {
  const loginPage = PageObjects.loginPage;
  const notificationsPage = PageObjects.notificationsPage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    notificationsPage.visitNotifications();
  });

  describe("TC-NOTI-001: Notification Display", () => {
    it("should display notifications sorted by time", () => {
      notificationsPage.verifyNotificationsSorted();
    });
  });

  describe("TC-NOTI-002: Mark as Read", () => {
    it("should mark notification as read", () => {
      notificationsPage.clickNotification(0);
      notificationsPage.markAsRead();
      notificationsPage.verifyNotificationMarkedAsRead();
    });
  });
});
