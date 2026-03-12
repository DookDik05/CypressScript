/**
 * Common test utilities
 */

export function generateUniqueId(prefix: string = ""): string {
  return `${prefix}${Date.now()}${Math.random().toString(36).substr(2, 9)}`;
}

export function generateTestEmail(): string {
  return `test${Date.now()}@tlogical.com`;
}

export function waitForElement(selector: string, timeout: number = 5000): void {
  cy.get(selector, { timeout }).should("be.visible");
}

export function fillForm(fields: { [key: string]: string }): void {
  Object.entries(fields).forEach(([selector, value]) => {
    cy.get(selector).clear().type(value);
  });
}

export function verifySuccessMessage(message?: string): void {
  const selector = '[data-testid="success-message"]';
  cy.get(selector).should("be.visible");
  if (message) {
    cy.get(selector).should("contain", message);
  }
}

export function verifyErrorMessage(message: string): void {
  cy.get('[role="alert"], .error-message').should("contain", message);
}

export function logout(): void {
  cy.get("button:contains('Logout'), a:contains('Logout')").click();
  cy.url().should("include", "/login");
}

export function delay(ms: number): void {
  cy.wait(ms);
}
