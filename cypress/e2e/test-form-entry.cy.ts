describe("Test form entry", () => {
  it("should enter email and password", () => {
    cy.visit("/login");
    cy.wait(1000);
    
    // Enter email
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="email"]').invoke("val").then((val) => {
      cy.log("Email value: " + val);
    });
    
    // Enter password
    cy.get('input[type="password"]').type("testpass");
    cy.get('input[type="password"]').invoke("val").then((val) => {
      cy.log("Password value: " + val);
    });
    
    // Take screenshot
    cy.screenshot("form-filled");
    
    // Log button info
    cy.get('button[data-slot="button"]').then(($btn) => {
      cy.log("Button text: " + $btn.text());
      cy.log("Button type: " + $btn.attr("type"));
    });
  });
});
