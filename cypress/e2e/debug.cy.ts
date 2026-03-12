describe("Debug: Test selectors", () => {
  it("should test if selectors work", () => {
    cy.visit("/login");
    cy.wait(2000);
    
    // Test email input
    cy.get('input[name="email"]', { timeout: 2000 }).should("exist").then(() => {
      cy.log("✓ Email input found!");
    });
    
    // Test password input
    cy.get('input[type="password"]', { timeout: 2000 }).should("exist").then(() => {
      cy.log("✓ Password input found!");
    });
    
    // Test login button
    cy.get('button:contains("Login")', { timeout: 2000 }).should("exist").then(() => {
      cy.log("✓ Login button found!");
    });
    
    // Test password toggle button - use sibling selector
    cy.get('input[type="password"] ~ button', { timeout: 2000 }).should("exist").then(() => {
      cy.log("✓ Password toggle button found!");
    });
    
    cy.log("All selectors passed!");
    cy.screenshot("selectors-test");
  });
});
