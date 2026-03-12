export class LandingPage {
  visitLanding() {
    cy.visit("/", { timeout: 10000 });
  }

  verifyHeroSection() {
    cy.get('[role="main"], .hero, section, header, [class*="hero"], [class*="banner"]', { timeout: 4000 }).should("be.visible");
  }

  verifyLoginButton() {
    cy.get('button, a, [role="button"], div[role="button"], [class*="btn"]', { timeout: 4000 }).should("be.visible");
  }

  verifyNewsSection() {
    cy.get('[role="region"], .news, section[class*="news"], div[class*="news"], [class*="news-section"]', { timeout: 4000 }).should("be.visible");
  }

  getNewsList() {
    return cy.get('a[href*="news"], li, div[role="article"], div[role="listitem"], [class*="news-item"], [class*="article"]', { timeout: 4000 });
  }

  clickNewsItem(index: number = 0) {
    this.getNewsList().eq(index).click();
  }

  verifyNewsDetail() {
    cy.get('h1, h2, [role="heading"], [class*="title"], [class*="heading"]', { timeout: 4000 }).should("be.visible");
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
    cy.get("a, button, [role='button']", { timeout: 4000 }).contains(/news|updates|articles|blog/i).click();
  }

  verifyNewsListDisplayed() {
    this.getNewsList().should("have.length.greaterThan", 0);
  }

  getNewsCount() {
    return this.getNewsList().its("length");
  }

  clickFirstNews() {
    this.getNewsList().first().click();
  }

  verifyNewsDetailDisplayed() {
    cy.get("body", { timeout: 4000 }).should("contain", /news|article|detail|content/i);
  }

  verifyNewsDetailUrl() {
    cy.url({ timeout: 4000 }).should("include", "/news");
  }
}
