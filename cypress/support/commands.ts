// Custom commands for Cypress tests

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}

// Login command
Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("/");
  cy.get("input[type='email']").type(email);
  cy.get("input[type='password']").type(password);
  cy.get("button").contains(/login|sign in/i).click();
  cy.url().should("include", "/dashboard");
});
