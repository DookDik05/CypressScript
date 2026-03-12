describe("TC-LAND: Landing Page Tests", () => {
  const landingPage = PageObjects.landingPage;
  const loginPage = PageObjects.loginPage;

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  describe("TC-LAND-001: เปิดหน้า Landing", () => {
    it("should display all landing page elements", () => {
      landingPage.visitLanding();
      landingPage.verifyAllLandingElements();
    });

    it("should display hero section", () => {
      landingPage.visitLanding();
      landingPage.verifyHeroSectionDisplayed();
    });

    it("should display news section", () => {
      landingPage.visitLanding();
      landingPage.verifyNewsSectionDisplayed();
    });

    it("should display login button", () => {
      landingPage.visitLanding();
      landingPage.verifyLoginButtonDisplayed();
    });
  });

  describe("TC-LAND-002: เปิด News", () => {
    it("should display news list", () => {
      landingPage.visitNews();
      landingPage.getNewsCount().then((count: any) => {
        expect(count).to.be.greaterThan(0);
      });
    });
  });

  describe("TC-LAND-003: เปิด News Detail", () => {
    it("should redirect to news detail page", () => {
      landingPage.visitNews();
      landingPage.clickFirstNews();
      landingPage.verifyNewsDetailDisplayed();
      landingPage.verifyNewsDetailUrl();
    });
  });
});
