// Cypress E2E support file
import "./commands";
import { PageObjects } from "./page-objects";

// Make PageObjects globally available
declare global {
  const PageObjects: typeof PageObjects;
}

Object.assign(globalThis, { PageObjects });

// Disable uncaught exception handling for the app
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
