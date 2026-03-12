export class LandingPage {
  private heroSection = "[data-testid='landing-hero-section']";
  private newsSection = "[data-testid='landing-news-section']";
  private loginButton = "[data-testid='landing-login-btn']";
  private newsLink = "[data-testid='landing-news-link']";
  private newsItems = "[data-testid='landing-news-item']";
  private newsDetailTitle = "[data-testid='landing-news-detail-title']";

  visitLanding() {
    cy.visit("/");
  }

  visitNews() {
    cy.visit("/news");
  }

  verifyHeroSectionDisplayed() {
    cy.get(this.heroSection).should("be.visible");
  }

  verifyNewsSectionDisplayed() {
    cy.get(this.newsSection).should("be.visible");
  }

  verifyLoginButtonDisplayed() {
    cy.get(this.loginButton).should("be.visible");
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  verifyAllLandingElements() {
    this.verifyHeroSectionDisplayed();
    this.verifyNewsSectionDisplayed();
    this.verifyLoginButtonDisplayed();
  }

  getNewsCount() {
    return cy.get(this.newsItems).its("length");
  }

  clickFirstNews() {
    cy.get(this.newsItems).first().click();
  }

  verifyNewsDetailDisplayed() {
    cy.get(this.newsDetailTitle).should("be.visible");
  }

  verifyNewsDetailUrl() {
    cy.url().should("match", /\/news\/\d+/);
  }
}
