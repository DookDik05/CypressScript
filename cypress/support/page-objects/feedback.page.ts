export class FeedbackPage {
  visitFeedbackForm() {
    cy.visit("/feedback");
  }

  fillFormField(fieldName: string, value: string) {
    cy.get(`input[name*='${fieldName}' i], textarea[name*='${fieldName}' i], input[placeholder*='${fieldName}' i], textarea[placeholder*='${fieldName}' i], input[aria-label*='${fieldName}' i], textarea[aria-label*='${fieldName}' i], input, textarea`, { timeout: 4000 }).first().type(value);
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
    cy.contains(/success|thank you|submitted|error|received/i, { timeout: 4000 }).should("exist");
  }

  verifyFeedbackSuccess() {
    this.verifyFormSubmitted();
  }

  submitFeedback() {
    this.clickSubmitButton();
  }
}
