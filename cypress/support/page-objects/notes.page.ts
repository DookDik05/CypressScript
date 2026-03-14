export class NotesPage {
  visitNotes() {
    cy.visit("/combined/note");
  }

  clickCreateButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"], span[class*="btn"]', { timeout: 4000 }).contains(/create|new|add/i).click();
  }

  fillNoteTitle(title: string) {
    cy.get('input[type="text"], input[placeholder*="title"], input[placeholder*="name"], input[aria-label*="title"], input[id*="title"], textarea[placeholder*="title"]', { timeout: 4000 }).first().clear().type(title);
  }

  fillNoteContent(content: string) {
    cy.get('textarea, [contenteditable="true"], [role="textbox"], input[type="text"][placeholder*="content"], input[type="text"][placeholder*="message"], input[type="text"][placeholder*="description"]', { timeout: 4000 }).first().clear().type(content);
  }

  clickSaveButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit|create/i).click();
  }

  verifyNoteSaved() {
    cy.contains(/saved|created|success/i, { timeout: 4000 }).should("exist");
  }

  clickShareButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/share|send/i).click();
  }

  shareNote(email: string) {
    this.clickShareButton();
    cy.get('input[type="email"], input[placeholder*="email"], input[aria-label*="email"]', { timeout: 4000 }).clear().type(email);
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/send|share|submit/i).click();
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

  verifyAutoSave() {
    cy.contains(/saved|auto-saved|saved automatically/i, { timeout: 4000 }).should("exist");
  }

  autoSaveNote(content: string) {
    cy.get('textarea, [contenteditable="true"], [role="textbox"], input[type="text"]', { timeout: 4000 }).clear().type(content);
    cy.wait(2000);
    this.verifyAutoSave();
  }
}
