// Custom commands for Cypress tests

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}

// Login command
Cypress.Commands.add("login", (email: string, password: string) => {
  // Intercept the login API call so we can wait for it to complete.
  // This prevents race conditions where the test continues before login is processed.
  cy.intercept("POST", "**/auth/login").as("loginRequest");

  cy.visit("/");

  // Use slightly more robust selectors and clear the fields first
  cy.get("input[name='email'], input[type='email']").filter(":visible").clear().type(email);
  cy.get("input[name='password'], input[type='password']").filter(":visible").clear().type(password);

  cy.get("button").contains(/login|sign in/i).click();

  // Explicitly wait for the login network request to finish successfully.
  cy.wait("@loginRequest").its("response.statusCode").should("be.oneOf", [200, 201]);

  // Now that the API call is confirmed, check the URL. This is much more reliable.
  cy.url({ timeout: 10000 }).should("include", "/combined");
});

export {};
