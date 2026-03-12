describe("Capture page HTML for selector analysis", () => {
  const pages = [
    { name: "dashboard", url: "/dashboard" },
    { name: "users", url: "/users" },
    { name: "projects", url: "/projects" },
    { name: "tasks", url: "/tasks" },
    { name: "daily-meeting", url: "/daily-meeting" },
    { name: "feedback", url: "/feedback" },
    { name: "notes", url: "/notes" },
    { name: "notifications", url: "/notifications" },
    { name: "products", url: "/products" },
    { name: "profile", url: "/profile" },
    { name: "reports", url: "/reports" },
    { name: "landing", url: "/" },
  ];

  pages.forEach((page) => {
    it(`should capture HTML from ${page.name}`, () => {
      cy.visit(page.url, { failOnStatusCode: false });
      cy.wait(2000);

      cy.document().then((doc) => {
        const html = doc.documentElement.outerHTML;
        cy.task("writePageHTML", {
          filename: `cypress/page-html-${page.name}.txt`,
          html: html,
        });
        cy.log(`✓ Captured ${page.name} page HTML`);
      });
    });
  });
});
