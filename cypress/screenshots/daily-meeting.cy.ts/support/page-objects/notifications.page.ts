export class NotificationsPage {
  // Updated selectors to match likely DOM structure
  private notificationList = ".notifications-list, ul, [role='list']";
  private notificationItem = ".notification-item, li, [role='listitem']";
  private unreadNotification = ".notification-unread, .unread, [aria-unread='true']";
  private markAsReadButton = ".mark-read-btn, button, [aria-label*='mark as read']";

  visitNotifications() {
    cy.visit("/notifications");
  }

  getNotificationCount() {
    return cy.get(this.notificationItem).its("length");
  }

  clickNotification(index: number = 0) {
    cy.get(this.notificationItem).eq(index).click();
  }

  markAsRead() {
    cy.get(this.markAsReadButton).click();
  }

  verifyNotificationsSorted() {
    cy.get("div").then(($times) => {
      const times = Cypress._.map($times, (el) => el.innerText);
      const sorted = [...times].sort().reverse();
      expect(times).to.deep.equal(sorted);
    });
  }

  verifyNotificationMarkedAsRead() {
    cy.get(this.unreadNotification).should("not.exist");
  }
}
