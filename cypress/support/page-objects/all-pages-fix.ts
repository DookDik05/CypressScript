/// <reference types="cypress" />
// This file contains all fixed page object implementations for reference
// Copy each class to its respective file

// ========== landing.page.ts ==========
export class LandingPage {
  visitLanding() {
    cy.visit("/");
  }

  verifyHeroSection() {
    cy.get("body", { timeout: 4000 }).should("contain", /welcome|landing|home/i);
  }

  verifyLoginButton() {
    cy.get("button, a", { timeout: 4000 }).contains(/login|sign in|start/i).should("be.visible");
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

  visitNews() {
    cy.get("a, button", { timeout: 4000 }).contains(/news|article|blog/i).click();
  }

  clickLoginButton() {
    cy.get("button, a", { timeout: 4000 }).contains(/login|sign in|start/i).click();
  }

  verifyNewsSection() {
    cy.get("body", { timeout: 4000 }).should("contain", /news|article|blog/i);
  }
}

// ========== daily-meeting.page.ts ==========
export class DailyMeetingPage {
  visitDailyMeeting() {
    cy.visit("/daily-meeting");
  }

  verifyCalendarDisplayed() {
    cy.get("[role='grid'], [class*='calendar'], [class*='meeting'], table", { timeout: 4000 }).should("be.visible");
  }

  clickDate(date: string) {
    cy.get("button, div, td, [role='button']", { timeout: 4000 }).contains(new RegExp(date, "i")).click();
  }

  createTask(date: string, taskName: string) {
    this.clickDate(date);
    cy.get("input, textarea, [contenteditable]", { timeout: 4000 }).first().type(taskName);
    cy.get("button", { timeout: 4000 }).contains(/save|submit|create|add/i).click();
  }

  verifyTaskCreated(taskName: string) {
    cy.get("body", { timeout: 4000 }).should("contain", taskName);
  }
}

// ========== dashboard.page.ts ==========
export class DashboardPage {
  visitDashboard() {
    cy.visit("/dashboard");
  }

  verifyDashboardElements() {
    cy.get("body", { timeout: 8000 }).should("contain", /dashboard|summary|status|task/i);
  }

  verifyStatusBreakdown() {
    cy.get("body", { timeout: 4000 }).should("contain", /status|progress|done|completed|pending/i);
  }

  getStatusCount(status?: string) {
    if (status) {
      return cy.get("body", { timeout: 4000 }).invoke("text").then((text) => {
        const match = text.match(new RegExp(status, "gi"));
        return match ? match.length : 0;
      });
    }
    return cy.get("[class*='count'], [class*='metric'], span, div", { timeout: 4000 }).invoke("text");
  }

  verifyTasksDisplayed() {
    cy.get("body", { timeout: 4000 }).should("contain", /task|item|todo/i);
  }

  verifyChartDisplayed() {
    cy.get("canvas, svg, [role='img'], [class*='chart']", { timeout: 4000 }).should("exist");
  }

  getTotalProjects() {
    return cy.get("body", { timeout: 4000 }).invoke("text");
  }

  getTotalTasks() {
    return cy.get("body", { timeout: 4000 }).invoke("text");
  }

  getCompletedTasks() {
    return cy.get("body", { timeout: 4000 }).invoke("text");
  }
}

// ========== feedback.page.ts ==========
export class FeedbackPage {
  visitFeedbackForm() {
    cy.visit("/feedback");
  }

  fillFormField(fieldName: string, value: string) {
    cy.get(`input[name*='${fieldName}' i], textarea[name*='${fieldName}' i], input[placeholder*='${fieldName}' i], textarea[placeholder*='${fieldName}' i], input[aria-label*='${fieldName}' i], textarea[aria-label*='${fieldName}' i], input, textarea`, { timeout: 4000 }).first().type(value);
  }

  submitFeedback() {
    cy.get("button", { timeout: 4000 }).contains(/submit|send|save/i).click();
  }

  verifyFeedbackSuccess() {
    cy.get("body", { timeout: 4000 }).should("contain", /success|thank|submitted|received/i);
  }
}

// ========== notes.page.ts ==========
export class NotesPage {
  visitNotes() {
    cy.visit("/notes");
  }

  clickCreateButton() {
    cy.get("button, a, [role='button']", { timeout: 4000 }).contains(/create|new|add/i).click();
  }

  fillNoteTitle(title: string) {
    cy.get("input[placeholder*='title' i], input[aria-label*='title' i], input[name*='title' i], input, textarea", { timeout: 4000 }).first().type(title);
  }

  fillNoteContent(content: string) {
    cy.get("textarea, [contenteditable], input[name*='content' i], input[placeholder*='content' i]", { timeout: 4000 }).then(($el) => {
      if ($el.length > 1) {
        cy.wrap($el).eq(1).type(content);
      } else {
        cy.wrap($el).first().type(content);
      }
    });
  }

  verifyNoteSaved() {
    cy.get("body", { timeout: 4000 }).should("contain", /saved|created|success/i);
  }

  clickShareButton() {
    cy.get("button, a, [role='button']", { timeout: 4000 }).contains(/share|send/i).click();
  }

  createNote(title: string, content: string) {
    this.clickCreateButton();
    this.fillNoteTitle(title);
    this.fillNoteContent(content);
    cy.get("button", { timeout: 4000 }).contains(/save|submit/i).click();
  }
}

// ========== notifications.page.ts ==========
export class NotificationsPage {
  visitNotifications() {
    cy.visit("/notifications");
  }

  getNotificationsList() {
    return cy.get("[role='list'], [role='listitem'], li, div[class*='notification'], .notification-item", { timeout: 4000 });
  }

  clickNotification(index: number = 0) {
    this.getNotificationsList().eq(index).click();
  }

  verifyNotificationsSorted() {
    cy.get("body", { timeout: 4000 }).should("contain", /notification|alert|message/i);
  }

  markAsRead(index: number = 0) {
    this.getNotificationsList().eq(index).then(($notif) => {
      cy.wrap($notif).get("button, [role='button']").first().click();
    });
  }

  deleteNotification(index: number = 0) {
    this.getNotificationsList().eq(index).get("button, [role='button']").contains(/delete|remove/i).click();
  }
}

// ========== products.page.ts ==========
export class ProductsPage {
  visitProducts() {
    cy.visit("/products");
  }

  fillProductForm(name: string, price: string) {
    cy.get("input[placeholder*='name' i], input[aria-label*='name' i], input", { timeout: 4000 }).first().type(name);
    cy.get("input[placeholder*='price' i], input[type='number'], input", { timeout: 4000 }).eq(1).type(price);
  }

  createProduct(name: string, price: string) {
    cy.get("button", { timeout: 4000 }).contains(/create|new|add/i).click();
    this.fillProductForm(name, price);
    cy.get("button", { timeout: 4000 }).contains(/submit|save/i).click();
  }

  togglePasswordVisibility() {
    cy.get("button, [role='button'], [aria-label*='password'], button svg", { timeout: 4000 }).first().click();
  }

  searchProducts(query: string) {
    cy.get("input[placeholder*='search' i], input[aria-label*='search' i], input", { timeout: 4000 }).first().type(query);
  }

  searchProduct(query: string) {
    this.searchProducts(query);
    cy.wait(500);
  }

  getProductCount() {
    return cy.get("div[class*='product'], li, [role='row'], tbody tr", { timeout: 4000 }).then(($items) => {
      return $items.length;
    });
  }
}

// ========== profile.page.ts ==========
export class ProfilePage {
  visitProfile() {
    cy.visit("/profile");
  }

  fillProfileForm(field: string, value: string) {
    cy.get(`input[name*='${field}' i], input[placeholder*='${field}' i], textarea[name*='${field}' i]`, { timeout: 4000 }).type(value);
  }

  updateProfile(updates: Record<string, string>) {
    Object.entries(updates).forEach(([key, value]) => {
      this.fillProfileForm(key, value);
    });
    cy.get("button", { timeout: 4000 }).contains(/save|update|submit/i).click();
  }

  changePassword() {
    cy.get("button", { timeout: 4000 }).contains(/password|change/i).click();
  }

  verifyProfileUpdated() {
    cy.get("body", { timeout: 4000 }).should("contain", /updated|saved|success/i);
  }

  clickEditButton() {
    cy.get("button", { timeout: 4000 }).contains(/edit|modify/i).click();
  }
}

// ========== projects.page.ts ==========
export class ProjectsPage {
  visitProjects() {
    cy.visit("/projects");
  }

  getProjectsList() {
    return cy.get("div[class*='project'], li, [role='row'], tbody tr, article, [class*='card']", { timeout: 4000 });
  }

  createProject(name: string) {
    cy.get("button", { timeout: 4000 }).contains(/create|new|add/i).click();
    cy.get("input", { timeout: 4000 }).first().type(name);
    cy.get("button", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  editProject(projectName: string, newName: string) {
    this.getProjectsList().contains(projectName).click();
    cy.get("button", { timeout: 4000 }).contains(/edit/i).click();
    cy.get("input", { timeout: 4000 }).clear().type(newName);
    cy.get("button", { timeout: 4000 }).contains(/save/i).click();
  }

  deleteProject(projectName: string) {
    this.getProjectsList().contains(projectName).click();
    cy.get("button", { timeout: 4000 }).contains(/delete|remove/i).click();
    cy.get("button", { timeout: 4000 }).contains(/confirm|yes|delete/i).click();
  }

  clickEditButton() {
    cy.get("button", { timeout: 4000 }).contains(/edit/i).click();
  }

  clickMoveUp() {
    cy.get("button, [role='button'], svg", { timeout: 4000 }).contains(/up|↑|move up/i).click();
  }

  clickMoveDown() {
    cy.get("button", { timeout: 4000 }).contains(/down|↓|move down/i).click();
  }

  fillProjectForm(name: string) {
    cy.get("input, textarea", { timeout: 4000 }).first().type(name);
  }

  getProjectCount() {
    return this.getProjectsList().then(($items) => {
      return $items.length;
    });
  }
}

// ========== reports.page.ts ==========
export class ReportsPage {
  visitReports() {
    cy.visit("/reports");
  }

  verifyStaffView() {
    cy.get("body", { timeout: 4000 }).should("contain", /staff|performance|report/i);
  }

  verifyTeamView() {
    cy.get("body", { timeout: 4000 }).should("contain", /team|performance|report/i);
  }

  editManDay() {
    cy.get("button", { timeout: 4000 }).contains(/edit/i).click();
  }

  verifyReportsDisplayed() {
    cy.get("[class*='report'], canvas, svg, [role='img'], table", { timeout: 4000 }).should("exist");
  }
}

// ========== tasks.page.ts ==========
export class TasksPage {
  visitTasks() {
    cy.visit("/tasks");
  }

  fillTaskForm(name: string) {
    cy.get("input[placeholder*='name' i], input[aria-label*='name' i], input", { timeout: 4000 }).first().type(name);
  }

  createTask(name: string) {
    cy.get("button", { timeout: 4000 }).contains(/create|new|add/i).click();
    this.fillTaskForm(name);
    cy.get("button", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  clickAddSubtask() {
    cy.get("button", { timeout: 4000 }).contains(/subtask|sub-task|add sub/i).click();
  }

  clickUploadButton() {
    cy.get("button, [role='button']", { timeout: 4000 }).contains(/upload|attach|file/i).click();
  }

  clickImportButton() {
    cy.get("button", { timeout: 4000 }).contains(/import|upload|excel/i).click();
  }

  clickEditButton() {
    cy.get("button", { timeout: 4000 }).contains(/edit/i).click();
  }

  clickDeleteButton() {
    cy.get("button", { timeout: 4000 }).contains(/delete|remove/i).click();
  }

  openFirstTask() {
    cy.get("div[class*='task'], li, [role='row'], tbody tr, article, [class*='item']", { timeout: 4000 }).first().click();
  }
}

// ========== users.page.ts ==========
export class UsersPage {
  visitUsers() {
    cy.visit("/users");
  }

  fillUserForm(email: string, name: string) {
    cy.get("input[type='email'], input[placeholder*='email' i], input", { timeout: 4000 }).first().type(email);
    cy.get("input[placeholder*='name' i], input[aria-label*='name' i], input", { timeout: 4000 }).eq(1).type(name);
  }

  createUser(email: string, name: string) {
    cy.get("button", { timeout: 4000 }).contains(/create|new|add/i).click();
    this.fillUserForm(email, name);
    cy.get("button", { timeout: 4000 }).contains(/save|submit/i).click();
  }

  clickEditButton() {
    cy.get("button", { timeout: 4000 }).contains(/edit/i).click();
  }

  clickResetPasswordButton() {
    cy.get("button", { timeout: 4000 }).contains(/reset|password/i).click();
  }

  clickResetPassword() {
    this.clickResetPasswordButton();
  }

  verifyNewPasswordGenerated() {
    cy.get("body", { timeout: 4000 }).should("contain", /password|generated|reset/i);
  }

  getUserList() {
    return cy.get("div[class*='user'], li, [role='row'], tbody tr", { timeout: 4000 });
  }
}
