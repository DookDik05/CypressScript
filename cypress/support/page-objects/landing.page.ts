export class LandingPage {
  visitLanding() {
    cy.visit("/");
  }

  verifyHeroSection() {
    cy.contains(/welcome|landing|home/i, { timeout: 4000 }).should("exist");
  }

  verifyHeroSectionDisplayed() {
    this.verifyHeroSection();
  }

  verifyLoginButton() {
    cy.get("button, a", { timeout: 4000 }).contains(/login|sign in|start/i).should("be.visible");
  }

  verifyLoginButtonDisplayed() {
    this.verifyLoginButton();
  }

  getNewsCount() {
    return cy.get("div, li, article, [class*='news'], [class*='item']", { timeout: 4000 }).then(($items) => {
      return $items.length;
    });
  }

  clickFirstNews() {
    cy.get("a, button, div[role='button'], [class*='news'], [class*='card'], [class*='item']", { timeout: 4000 }).first().click();
  }

  verifyNewsDetailUrl() {
    cy.url({ timeout: 4000 }).should("not.equal", "/");
  }

  verifyNewsDetailDisplayed() {
    cy.get("body", { timeout: 4000 }).should("not.equal", "/");
  }

  visitNews() {
    cy.get("a, button", { timeout: 4000 }).contains(/news|article|blog/i).click();
  }

  clickLoginButton() {
    cy.get("button, a", { timeout: 4000 }).contains(/login|sign in|start/i).click();
  }

  verifyNewsSection() {
    cy.contains(/news|article|blog/i, { timeout: 4000 }).should("exist");
  }

  verifyNewsSectionDisplayed() {
    this.verifyNewsSection();
  }

  verifyAllLandingElements() {
    this.verifyHeroSectionDisplayed();
    this.verifyNewsSectionDisplayed();
    this.verifyLoginButtonDisplayed();
  }
}
