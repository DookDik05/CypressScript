export class FeedbackPage {
  private formField = "[data-testid='feedback-form-field']";
  private submitButton = "[data-testid='feedback-submit-btn']";
  private successMessage = "[data-testid='feedback-success-message']";

  visitFeedbackForm(formId: string) {
    cy.visit(`/feedback/fill/${formId}`);
  }

  fillFormField(fieldName: string, value: string) {
    cy.get("input").type(value);
  }

  clickSubmitButton() {
    cy.get(this.submitButton).click();
  }

  verifyFormSubmitted() {
    cy.get(this.successMessage).should("be.visible");
  }
}
