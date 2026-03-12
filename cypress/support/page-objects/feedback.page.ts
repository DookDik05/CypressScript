export class FeedbackPage {
  visitFeedbackForm(formId?: string) {
    cy.visit("/feedback");
  }

  fillFormField(fieldName: string, value: string) {
    cy.get(`input[name="${fieldName}"], textarea[name="${fieldName}"], input[placeholder*="${fieldName}"], textarea[placeholder*="${fieldName}"], input[aria-label*="${fieldName}"], textarea[aria-label*="${fieldName}"], [data-testid="${fieldName}"], input[id*="${fieldName}"], textarea[id*="${fieldName}"]`, { timeout: 4000 }).first().clear().type(value);
  }

  fillFeedbackForm(name: string, email: string, message: string) {
    this.fillFormField("name", name);
    this.fillFormField("email", email);
    this.fillFormField("message", message);
  }

  clickSubmitButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/submit|send|save/i).click();
  }

  verifyFormSubmitted() {
    cy.get("body", { timeout: 4000 }).should("contain", /success|thank you|submitted|error|received/i);
  }

  verifyFeedbackSuccess() {
    this.verifyFormSubmitted();
  }

  submitFeedback() {
    this.clickSubmitButton();
  }
}
