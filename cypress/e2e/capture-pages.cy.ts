describe("Capture page HTML for selector analysis", () => {
  const pages = [
    { name: "dashboard", url: "/combined/app/dashboard" },
    { name: "users", url: "/combined/manageuser" },
    { name: "projects", url: "/combined/app/projects" },
    { name: "tasks", url: "/combined/app/tasks" },
    { name: "daily-meeting", url: "/combined/app/daily-meeting" },
    { name: "feedback", url: "/feedback" },
    { name: "notes", url: "/combined/note" },
    { name: "notifications", url: "/combined/app/notifications" },
    { name: "products", url: "/combined/app/products" },
    { name: "profile", url: "/combined/personal-info" },
    { name: "reports", url: "/combined/app/reports/performance" },
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
