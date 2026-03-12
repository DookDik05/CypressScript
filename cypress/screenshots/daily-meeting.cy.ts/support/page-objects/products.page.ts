export class ProductsPage {
  // Updated selectors to match likely DOM structure
  private createButton = ".product-create-btn, .btn-create, button";
  private productNameInput = "input[name='productName'], input[type='text']";
  private productPasswordInput = "input[name='productPassword'], input[type='password']";
  private saveButton = ".product-save-btn, .btn-save, button";
  private searchInput = "input[placeholder*='Search'], input[aria-label*='search'], input[name='search']";
  private productList = ".product-list, [role='main'], ul";
  private productItem = ".product-item, [role='row'], li";
  private passwordToggle = ".product-password-toggle, .btn-toggle, button";

  visitProducts() {
    cy.visit("/products");
  }

  clickCreateButton() {
    cy.get(this.createButton).click();
  }

  fillProductForm(name: string, password?: string) {
    cy.get(this.productNameInput).clear().type(name);
    if (password) {
      cy.get(this.productPasswordInput).clear().type(password);
    }
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
  }

  createProduct(name: string, password?: string) {
    this.clickCreateButton();
    this.fillProductForm(name, password);
    this.clickSaveButton();
  }

  togglePasswordVisibility() {
    cy.get(this.passwordToggle).click();
  }

  searchProduct(keyword: string) {
    cy.get(this.searchInput).clear().type(keyword);
  }

  getProductCount() {
    return cy.get(this.productItem).its("length");
  }

  verifyProductListDisplayed() {
    cy.get(this.productList).should("be.visible");
  }
}
