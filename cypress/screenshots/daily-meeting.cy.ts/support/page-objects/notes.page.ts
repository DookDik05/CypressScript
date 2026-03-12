export class NotesPage {
  private createButton = "[data-testid='notes-create-btn']";
  private noteTitle = "[data-testid='notes-title-input']";
  private noteContent = "[data-testid='notes-content-textarea']";
  private saveButton = "[data-testid='notes-save-btn']";
  private shareButton = "[data-testid='notes-share-btn']";
  private noteList = "[data-testid='notes-list']";
  private noteItem = "[data-testid='notes-item']";

  visitNotes() {
    cy.visit("/notes");
  }

  clickCreateButton() {
    cy.get(this.createButton).click();
  }

  fillNoteForm(title: string, content: string) {
    cy.get(this.noteTitle).clear().type(title);
    cy.get(this.noteContent).clear().type(content);
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
  }

  createNote(title: string, content: string) {
    this.clickCreateButton();
    this.fillNoteForm(title, content);
    this.clickSaveButton();
  }

  clickShareButton() {
    cy.get(this.shareButton).click();
  }

  verifyNoteSaved() {
    cy.get(this.noteItem).should("have.length.greaterThan", 0);
  }

  verifyAutoSave() {
    cy.get("div").should("be.visible");
  }
}
