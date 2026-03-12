export class DailyMeetingPage {
  visitDailyMeeting() {
    cy.visit("/daily-meeting", { timeout: 10000 });
  }

  verifyCalendarDisplayed() {
    cy.get('[role="grid"], table, .calendar, [class*="calendar"], [class*="date"], div[class*="grid"]', { timeout: 4000 }).should("be.visible");
  }

  verifyWeekDaysDisplayed() {
    cy.get("body", { timeout: 4000 }).should("contain", /mon|tue|wed|thu|fri|sat|sun|monday|tuesday|wednesday/i);
  }

  clickDate(date: number) {
    cy.get('button, a, div, span, td, [role="button"], [role="gridcell"]', { timeout: 4000 }).contains(new RegExp(String.raw`^${date}$|\b${date}\b`)).first().click();
  }

  clickCreateTaskFromDate() {
    cy.get('button, [role="button"], div[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/create|add|new/i).click();
  }

  createTask(date: number, taskName: string) {
    this.clickDate(date);
    cy.get('input[type="text"], input[placeholder*="task"], input[placeholder*="name"], textarea, [contenteditable="true"]', { timeout: 4000 }).first().clear().type(taskName);
    cy.get('button, [role="button"], div[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/create|save|add/i).first().click();
  }

  verifyTaskCreated(taskName: string) {
    cy.get("body", { timeout: 4000 }).should("contain", taskName);
  }
}
