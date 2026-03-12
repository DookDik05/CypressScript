export class DailyMeetingPage {
  private calendar = "[data-testid='meeting-calendar']";
  private weekDays = "[data-testid='meeting-week-days']";
  private dateCell = "[data-testid='meeting-date-cell']";
  private createTaskButton = "[data-testid='meeting-create-task-btn']";

  visitDailyMeeting() {
    cy.visit("/daily-meeting");
  }

  verifyCalendarDisplayed() {
    cy.get(this.calendar).should("be.visible");
  }

  verifyWeekDaysDisplayed() {
    cy.get(this.weekDays).should("be.visible");
  }

  clickDate(dateIndex: number) {
    cy.get(this.dateCell).eq(dateIndex).click();
  }

  clickCreateTaskFromDate() {
    cy.get(this.createTaskButton).click();
  }

  verifySelectedDateInTask() {
    cy.get("div").should("not.be.empty");
  }
}
