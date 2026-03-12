/**
 * Test Data constants
 */

export const TEST_DATA = {
  users: {
    validUser: {
      email: Cypress.env("username"),
      password: Cypress.env("password"),
    },
    invalidUser: {
      email: "invalid@tlogical.com",
      password: "wrongpassword",
    },
  },
  forms: {
    projectCreate: {
      name: "Test Project for Cypress",
      description: "Automated test project",
    },
    taskCreate: {
      name: "Test Task for Cypress",
      description: "Automated test task",
    },
    noteCreate: {
      title: "Test Note for Cypress",
      content: "This is a test note content",
    },
  },
};

export const TEST_MESSAGES = {
  success: "Success",
  error: "Error",
  invalidCredentials: "Invalid email or password",
  required: "This field is required",
};

export const TEST_URLS = {
  base: Cypress.env("apiUrl") || "https://hr.tlogical.com",
  login: "/login",
  dashboard: "/dashboard",
  projects: "/projects",
  tasks: "/tasks",
  profile: "/profile",
  reports: "/reports",
  notes: "/notes",
  users: "/users",
  notifications: "/notifications",
  products: "/products",
  feedback: "/feedback",
};
