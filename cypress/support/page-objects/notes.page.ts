export class NotesPage {
  visitNotes() {
    cy.visit("/notes");
  }

  clickCreateButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/create|new|add/i).click();
  }

  fillNoteTitle(title: string) {
    cy.get("input[type='text'], input[placeholder*='title'], input[aria-label*='title']", { timeout: 4000 }).first().clear().type(title);
  }

  fillNoteContent(content: string) {
    cy.get("textarea, [contenteditable='true'], [role='textbox']", { timeout: 4000 }).first().clear().type(content);
  }

  clickSaveButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  verifyNoteSaved() {
    cy.get("body", { timeout: 4000 }).should("contain", /saved|created|success/i);
  }

  clickShareButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/share|send/i).click();
  }

  shareNote(email: string) {
    this.clickShareButton();
    cy.get("input[type='email'], input[placeholder*='email']", { timeout: 4000 }).type(email);
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/send|share/i).click();
  }

  createNote(title: string, content: string) {
    this.clickCreateButton();
    this.fillNoteTitle(title);
    this.fillNoteContent(content);
    this.clickSaveButton();
  }

  verifyNoteCreated(title: string) {
    cy.get("body", { timeout: 4000 }).should("contain", title);
  }

  autoSaveNote(content: string) {
    cy.get("textarea, [contenteditable='true'], [role='textbox']", { timeout: 4000 }).type(content);
    cy.wait(2000);
    cy.get("body", { timeout: 4000 }).should("contain", /saved|auto-saved/i);
  }
}
