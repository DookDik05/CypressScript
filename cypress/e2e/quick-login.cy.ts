describe("Quick login test", () => {
  it("should login with correct selectors", () => {
    cy.visit("/login");
    cy.wait(1000);
    
    // Type credentials
    cy.get('input[name="email"]').clear().type("staff@tlogical.com", { delay: 50 });
    cy.get('input[type="password"]').clear().type("test12345", { delay: 50 });
    
    cy.wait(500);
    
    // Click the button with JavaScript
    cy.get('button[data-slot="button"]').then(($btn) => {
      $btn[0].click();
    });
    
    // Wait and check results
    cy.wait(5000);
    
    // Accept any authenticated page (not login)
    cy.url().should("not.include", "/login");
    cy.log("✓ Login successful!");
  });
});
