export class ProductsPage {
  visitProducts() {
    cy.visit("/combined/app/products");
  }

  clickCreateButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/create|new|add/i).click();
  }

  fillProductForm(name: string, password?: string) {
    cy.get('input[type="text"], input[placeholder*="name"], input[placeholder*="title"], input[aria-label*="name"]', { timeout: 4000 }).first().clear().type(name);
    if (password) {
      cy.get('input[type="password"], input[placeholder*="password"], input[placeholder*="secret"], input[aria-label*="password"]', { timeout: 4000 }).first().clear().type(password);
    }
  }

  clickSaveButton() {
    cy.get('button, [role="button"], div[role="button"], a[role="button"], [class*="btn"]', { timeout: 4000 }).contains(/save|submit|create/i).click();
  }

  createProduct(name: string, password?: string) {
    this.clickCreateButton();
    this.fillProductForm(name, password);
    this.clickSaveButton();
  }

  togglePasswordVisibility() {
    cy.get('button[aria-label*="password"], button[class*="toggle"], [role="button"][aria-label*="password"], svg, i', { timeout: 4000 }).contains(/show|hide|toggle|eye|visibility/i).click();
  }

  searchProducts(keyword: string) {
    cy.get('input[placeholder*="Search"], input[placeholder*="search"], input[aria-label*="search"], input[id*="search"]', { timeout: 4000 }).first().clear().type(keyword);
  }

  getProductCount() {
    return cy.get('.product-item, [role="row"], li, div[class*="product"], [class*="item"], tbody tr', { timeout: 4000 }).its("length");
  }

  verifyProductFound(name: string) {
    cy.get("body", { timeout: 4000 }).should("contain", name);
  }

  searchProduct(keyword: string) {
    this.searchProducts(keyword);
  }
}
