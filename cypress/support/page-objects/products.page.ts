export class ProductsPage {
  visitProducts() {
    cy.visit("/products");
  }

  clickCreateButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/create|new|add/i).click();
  }

  fillProductForm(name: string, password?: string) {
    cy.get("input[type='text'], input[placeholder*='name']", { timeout: 4000 }).first().clear().type(name);
    if (password) {
      cy.get("input[type='password'], input[placeholder*='password']", { timeout: 4000 }).first().clear().type(password);
    }
  }

  clickSaveButton() {
    cy.get("button, div[role='button']", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  createProduct(name: string, password?: string) {
    this.clickCreateButton();
    this.fillProductForm(name, password);
    this.clickSaveButton();
  }

  togglePasswordVisibility() {
    cy.get("button, div[role='button'], [aria-label*='password']", { timeout: 4000 }).contains(/show|hide|toggle/i).click();
  }

  searchProducts(keyword: string) {
    cy.get("input[placeholder*='Search'], input[placeholder*='search'], input[aria-label*='search']", { timeout: 4000 }).first().clear().type(keyword);
  }

  getProductCount() {
    return cy.get(".product-item, [role='row'], li, div[class*='product']", { timeout: 4000 }).its("length");
  }

  verifyProductFound(name: string) {
    cy.get("body", { timeout: 4000 }).should("contain", name);
  }

  searchProduct(keyword: string) {
    this.searchProducts(keyword);
  }
}
