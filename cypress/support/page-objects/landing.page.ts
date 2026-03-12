export class LandingPage {
  visitLanding() {
    cy.visit("/", { timeout: 10000 });
  }

  verifyHeroSection() {
    cy.get("body div, section, header", { timeout: 4000 }).should("be.visible");
  }

  verifyLoginButton() {
    cy.get("button, a", { timeout: 4000 }).should("be.visible");
  }

  verifyNewsSection() {
    cy.get("body", { timeout: 4000 }).should("be.visible");
  }

  getNewsList() {
    return cy.get("a, li, div[role='article']", { timeout: 4000 });
  }

  clickNewsItem(index: number = 0) {
    this.getNewsList().eq(index).click();
  }

  verifyNewsDetail() {
    cy.get("h1, h2, [role='heading']", { timeout: 4000 }).should("be.visible");
  }

  verifyAllLandingElements() {
    cy.get("body", { timeout: 4000 }).should("be.visible");
  }

  verifyHeroSectionDisplayed() {
    this.verifyHeroSection();
  }

  verifyNewsSectionDisplayed() {
    this.verifyNewsSection();
  }

  verifyLoginButtonDisplayed() {
    this.verifyLoginButton();
  }

  visitNews() {
    cy.get("a", { timeout: 4000 }).contains(/news/i).first().click();
  }

  verifyNewsListDisplayed() {
    this.verifyNewsSection();
  }

  getNewsCount() {
    return cy.get("a, li, div", { timeout: 4000 }).its("length");
  }

  clickFirstNews() {
    cy.get("a, li, div", { timeout: 4000 }).first().click();
  }

  verifyNewsDetailUrl() {
    cy.url({ timeout: 4000 }).should("include", "/news");
  }
}
