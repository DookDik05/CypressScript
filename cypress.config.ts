import { defineConfig } from "cypress";
import fs from "node:fs";

export default defineConfig({
  e2e: {
    baseUrl: "https://hr.tlogical.com/",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Rental Space Test",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      // experimentalSessionAndOrigin: true,
      // testIsolation: true,
    },
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("cypress-mochawesome-reporter/plugin")(on);
      
      // Add tasks to write files
      on("task", {
        writeFile({ path, content }: { path: string; content: string }) {
          fs.writeFileSync(path, content);
          return null;
        },
        // แก้ไขส่วนนี้ใน cypress.config.ts
        writePageHTML({ filename, html }: { filename: string; html: string }) {
          fs.writeFileSync(filename, html);
          return null;
        }
      });
    },
    // Removed unsupported webpackConfig property
    env: {
      username: "staff@tlogical.com",
      // password: "Gangkia5@2541",
      // This password is intentionally hardcoded for test setup only
      password: "test12345",
      // url:"https://eat-copstg.allcorporate.net/rental/", // stg
      // url: "https://eat-copdev.allcorporate.net/rental/", // dev
      url: "https://eat-copdev.allcorporate.net",
      url_login: "https://develop-staging.ekoapp.com/login", // dev ใหม่
      // url_login: "https://dev-h1-staging.ekoapp.com", // devเก่า
      // url_login:"https://cpall-h1.ekoapp.com", // prd
      branch_code: "test129",
    },
  },
});