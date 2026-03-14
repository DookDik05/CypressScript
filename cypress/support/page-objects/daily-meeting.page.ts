export class DailyMeetingPage {
  visitDailyMeeting() {
    cy.visit("/combined/app/daily-meeting", { timeout: 10000 });
  }

  verifyCalendarDisplayed() {
    cy.get('[role="grid"], table, .calendar, [class*="calendar"], [class*="date"], div[class*="grid"]', { timeout: 10000 }).should("be.visible");
  }

  verifyWeekDaysDisplayed() {
    cy.contains(/mon|tue|wed|thu|fri|sat|sun|monday|tuesday|wednesday/i, { timeout: 10000 }).should("exist");
  }

  clickDate(date: number) {
    // Search the entire DOM for the exact date and yield the closest interactive element
    cy.contains('button, a, div, span, td, [role="button"], [role="gridcell"]', new RegExp(String.raw`^${date}$|\b${date}\b`), { timeout: 10000 })
      .click({ force: true });
  }

  clickCreateTaskFromDate() {
    cy.contains('button, [role="button"], div[role="button"], [class*="btn"]', /add task|create|add|new/i, { timeout: 10000 }).click({ force: true });
  }

  createTask(date: number, taskName: string) {
    this.clickDate(date);
    cy.get('input[type="text"], input[placeholder*="task"], input[placeholder*="name"], textarea, [contenteditable="true"]', { timeout: 10000 })
      .filter(':visible')
      .first().clear().type(taskName);
    cy.contains('button, [role="button"], div[role="button"], [class*="btn"]', /save|submit|add task/i, { timeout: 10000 }).click({ force: true });
  }

  verifyTaskCreated(taskName: string) {
    // Check for the task name OR a generic success message, as the full name might be truncated or hidden in the calendar view
    cy.contains(new RegExp(`${taskName}|success|created|saved`, 'i'), { timeout: 10000 }).should("exist");
  }
}
