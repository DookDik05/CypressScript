import { LoginPage } from "./login.page";
import { DailyMeetingPage } from "./daily-meeting.page";
import { DashboardPage } from "./dashboard.page";
import { FeedbackPage } from "./feedback.page";
import { LandingPage } from "./landing.page";
import { NotesPage } from "./notes.page";
import { NotificationsPage } from "./notifications.page";
import { ProductsPage } from "./products.page";
import { ProfilePage } from "./profile.page";
import { ProjectsPage } from "./projects.page";
import { ReportsPage } from "./reports.page";
import { TasksPage } from "./tasks.page";
import { UsersPage } from "./users.page";

// Export all page objects as a namespace
export const PageObjects = {
  loginPage: new LoginPage(),
  dailyMeetingPage: new DailyMeetingPage(),
  dashboardPage: new DashboardPage(),
  feedbackPage: new FeedbackPage(),
  landingPage: new LandingPage(),
  notesPage: new NotesPage(),
  notificationsPage: new NotificationsPage(),
  productsPage: new ProductsPage(),
  profilePage: new ProfilePage(),
  projectsPage: new ProjectsPage(),
  reportsPage: new ReportsPage(),
  tasksPage: new TasksPage(),
  usersPage: new UsersPage(),
};
