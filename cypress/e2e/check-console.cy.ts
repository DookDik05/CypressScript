describe("Check for console errors", () => {
  it("should check browser console", () => {
    const errors: string[] = [];
    
    cy.on("uncaught:exception", (err, runnable) => {
      errors.push(err.message);
      return false; // Prevent test failure on uncaught exception
    });
    
    cy.visit("/login");
    cy.wait(1000);
    
    // Type credentials
    cy.get('input[name="email"]').type("staff@tlogical.com");
    cy.get('input[type="password"]').type("test12345");
    
    cy.wait(500);
    
    // Click button
    cy.get('button[data-slot="button"]').click();
    
    cy.wait(3000);
    
    // Log any errors that happened
    cy.log("Console errors: " + JSON.stringify(errors));
    
    // Check URL
    cy.url().then((url) => {
      cy.log("Final URL: " + url);
    });
  });
});
