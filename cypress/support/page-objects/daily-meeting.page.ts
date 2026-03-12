export class DailyMeetingPage {
  visitDailyMeeting() {
    cy.visit("/daily-meeting", { timeout: 10000 });
  }

  verifyCalendarDisplayed() {
    cy.get("div, table, [role='grid']", { timeout: 4000 }).should("be.visible");
  }

  clickDate(date: number) {
    cy.get("button, div", { timeout: 4000 }).contains(date.toString()).first().click();
  }

  createTask(date: number, taskName: string) {
    this.clickDate(date);
    cy.get('input[type="text"]', { timeout: 4000 }).type(taskName);
    cy.get("button", { timeout: 4000 }).contains(/create|save/i).first().click();
  }

  verifyTaskCreated(taskName: string) {
    cy.get("body", { timeout: 4000 }).should("contain", taskName);
  }
}
