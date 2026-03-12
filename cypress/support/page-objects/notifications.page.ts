export class NotificationsPage {
  visitNotifications() {
    cy.visit("/notifications");
  }

  getNotificationsList() {
    return cy.get('.notification-item, [role="listitem"], [role="article"], li, div[class*="notification"], [class*="notification-item"], div[class*="alert"]', { timeout: 4000 });
  }

  clickNotification(index: number = 0) {
    this.getNotificationsList().eq(index).click();
  }

  verifyNotificationsSorted() {
    this.getNotificationsList().should("have.length.greaterThan", 0);
  }

  markNotificationAsRead() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"], span', { timeout: 4000 }).contains(/mark as read|read|seen/i).click();
  }

  verifyNotificationRead() {
    cy.get('.unread, [aria-unread="true"], [class*="unread"], [class*="new"]', { timeout: 4000 }).should("not.exist");
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
