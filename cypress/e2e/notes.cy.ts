describe("TC-NOTE: Notes Tests", () => {
  const loginPage = PageObjects.loginPage;
  const notesPage = PageObjects.notesPage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    notesPage.visitNotes();
  });

  describe("TC-NOTE-001: Create Note", () => {
    it("should create a new note", () => {
      const noteTitle = `Test Note ${Date.now()}`;
      notesPage.createNote(noteTitle, "Test note content");
      notesPage.verifyNoteSaved();
    });
  });

  describe("TC-NOTE-002: Auto Save", () => {
    it("should auto save note", () => {
      notesPage.clickCreateButton();
      cy.get("[data-testid='note-title']").type("Auto Save Test");
      cy.wait(2000); // Wait for auto-save
      notesPage.verifyAutoSave();
    });
  });

  describe("TC-NOTE-003: Share Note", () => {
    it("should share note with another user", () => {
      notesPage.clickShareButton();
      cy.get("[data-testid='share-email-input']").type(
        "testuser@tlogical.com"
      );
      cy.get("button:contains('Share')").click();
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });
});
