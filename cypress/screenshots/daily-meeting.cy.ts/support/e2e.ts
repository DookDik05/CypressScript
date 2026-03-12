// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Import all page objects
import { LoginPage } from './page-objects/login.page'
import { DailyMeetingPage } from './page-objects/daily-meeting.page'
import { DashboardPage } from './page-objects/dashboard.page'
import { FeedbackPage } from './page-objects/feedback.page'
import { LandingPage } from './page-objects/landing.page'
import { NotesPage } from './page-objects/notes.page'
import { NotificationsPage } from './page-objects/notifications.page'
import { ProductsPage } from './page-objects/products.page'
import { ProfilePage } from './page-objects/profile.page'
import { ProjectsPage } from './page-objects/projects.page'
import { ReportsPage } from './page-objects/reports.page'
import { TasksPage } from './page-objects/tasks.page'
import { UsersPage } from './page-objects/users.page'

// Create singleton instances of page objects
const loginPageInstance = new LoginPage()
const dailyMeetingPageInstance = new DailyMeetingPage()
const dashboardPageInstance = new DashboardPage()
const feedbackPageInstance = new FeedbackPage()
const landingPageInstance = new LandingPage()
const notesPageInstance = new NotesPage()
const notificationsPageInstance = new NotificationsPage()
const productsPageInstance = new ProductsPage()
const profilePageInstance = new ProfilePage()
const projectsPageInstance = new ProjectsPage()
const reportsPageInstance = new ReportsPage()
const tasksPageInstance = new TasksPage()
const usersPageInstance = new UsersPage()

// Export page objects as globals for tests
declare global {
  const PageObjects: {
    loginPage: LoginPage
    dailyMeetingPage: DailyMeetingPage
    dashboardPage: DashboardPage
    feedbackPage: FeedbackPage
    landingPage: LandingPage
    notesPage: NotesPage
    notificationsPage: NotificationsPage
    productsPage: ProductsPage
    profilePage: ProfilePage
    projectsPage: ProjectsPage
    reportsPage: ReportsPage
    tasksPage: TasksPage
    usersPage: UsersPage
  }
}

// Attach to global namespace (no cy. required, can be accessed directly)
Object.assign(globalThis, {
  PageObjects: {
    loginPage: loginPageInstance,
    dailyMeetingPage: dailyMeetingPageInstance,
    dashboardPage: dashboardPageInstance,
    feedbackPage: feedbackPageInstance,
    landingPage: landingPageInstance,
    notesPage: notesPageInstance,
    notificationsPage: notificationsPageInstance,
    productsPage: productsPageInstance,
    profilePage: profilePageInstance,
    projectsPage: projectsPageInstance,
    reportsPage: reportsPageInstance,
    tasksPage: tasksPageInstance,
    usersPage: usersPageInstance,
  }
})