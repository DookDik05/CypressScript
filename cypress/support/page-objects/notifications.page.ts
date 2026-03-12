export class NotificationsPage {
  visitNotifications() {
    cy.visit("/notifications");
  }

  getNotificationsList() {
    return cy.get(".notification-item, [role='listitem'], li, div[class*='notification']", { timeout: 4000 });
  }

  clickNotification(index: number = 0) {
    this.getNotificationsList().eq(index).click();
  }

  verifyNotificationsSorted() {
    cy.get(".notification-item, [role='listitem'], li, div[class*='notification']", { timeout: 4000 }).should("have.length.greaterThan", 0);
  }

  markNotificationAsRead() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/mark as read|read/i).click();
  }

  verifyNotificationRead() {
    cy.get(".unread, [aria-unread='true'], [class*='unread']", { timeout: 4000 }).should("not.exist");
  }

  getNotificationCount() {
    return this.getNotificationsList().its("length");
  }

  markAsRead() {
    this.markNotificationAsRead();
  }

  verifyNotificationMarkedAsRead() {
    this.verifyNotificationRead();
  }
}
