describe("TC-PROD: Products Tests", () => {
  const loginPage = PageObjects.loginPage;
  const productsPage = PageObjects.productsPage;

  beforeEach(() => {
    loginPage.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    productsPage.visitProducts();
  });

  describe("TC-PROD-001: Create Product", () => {
    it("should create a new product", () => {
      const productName = `Test Product ${Date.now()}`;
      productsPage.createProduct(productName, "product_password");
      cy.get("[data-testid='success-message']").should("be.visible");
    });
  });

  describe("TC-PROD-002: Show / Hide Password", () => {
    it("should toggle password visibility", () => {
      productsPage.togglePasswordVisibility();
      cy.get("[data-testid='product-password-input']").invoke("attr", "type")
        .should("equal", "text");

      productsPage.togglePasswordVisibility();
      cy.get("[data-testid='product-password-input']").invoke("attr", "type")
        .should("equal", "password");
    });
  });

  describe("TC-PROD-003: Search Product", () => {
    it("should filter products by search", () => {
      productsPage.searchProduct("test");
      productsPage.getProductCount().then((count) => {
        expect(count).to.be.greaterThan(0);
      });
    });
  });
});
