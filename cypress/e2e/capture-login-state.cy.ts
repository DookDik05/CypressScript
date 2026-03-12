describe("Capture latest login page HTML", () => {
  it("should capture current login page state", () => {
    cy.visit("/login");
    cy.wait(2000);

    cy.document().then((doc) => {
      const html = doc.documentElement.outerHTML;
      cy.task("writePageHTML", html);
      cy.log("HTML captured to cypress/page-html.txt");
    });

    // Also capture after filling form but before submit
    cy.get('input[name="email"]').type("staff@tlogical.com");
    cy.get('input[type="password"]').type("test12345");

    cy.wait(500);
    
    cy.document().then((doc) => {
      const html = doc.documentElement.outerHTML;
      cy.task("writeFile", {
        path: "cypress/page-html-filled.txt",
        content: html,
      });
      cy.log("Filled form HTML captured");
    });

    // Check page for any hidden elements or validation
    cy.get("body").then(($body) => {
      const text = $body.text();
      if (text.includes("required")) {
        cy.log("Found 'required' text");
      }
      if (text.includes("error")) {
        cy.log("Found 'error' text");
      }
    });
  });
});
