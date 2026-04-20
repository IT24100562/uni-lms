import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { DashboardPage } from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { AssignmentsPage } from "./pages/AssignmentsPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { AboutPage } from "./pages/AboutPage";
import { AdmissionPage } from "./pages/AdmissionPage";
import { StudyAbroadPage } from "./pages/StudyAbroadPage";
import { CareersPage } from "./pages/CareersPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { IndustrialTrainingPage } from "./pages/IndustrialTrainingPage";
import { LecturerDashboardPage } from "./pages/LecturerDashboardPage";
import { AdminPanelPage } from "./pages/AdminPanelPage";
import { GroupProjectsPage } from "./pages/GroupProjectsPage";
import { CertificationPage } from "./pages/CertificationPage";
import { CommunicationPage } from "./pages/CommunicationPage";
import { PracticalLearningPage } from "./pages/PracticalLearningPage";
import { AcademicProgressionPage } from "./pages/AcademicProgressionPage";
import { IndustryIntegrationPage } from "./pages/IndustryIntegrationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage";
import { PaymentPage } from "./pages/PaymentPage";
import { AttendanceResultsPage } from "./pages/AttendanceResultsPage";

function AdminOrLecturerCourses() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <CoursesPage />
    </ProtectedRoute>
  );
}

function AdminOrLecturerAssignments() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <AssignmentsPage />
    </ProtectedRoute>
  );
}

function AnyLmsRoleAnalytics() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <AnalyticsPage />
    </ProtectedRoute>
  );
}

function LecturerOrAdminOnly() {
  return (
    <ProtectedRoute allowedRoles={["lecturer", "admin"]}>
      <LecturerDashboardPage />
    </ProtectedRoute>
  );
}

function AdminOnly() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminPanelPage />
    </ProtectedRoute>
  );
}

function AnyLmsRoleIndustrialTraining() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <IndustrialTrainingPage />
    </ProtectedRoute>
  );
}

function AnyLmsRoleGroupProjects() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <GroupProjectsPage />
    </ProtectedRoute>
  );
}

function AnyLmsRoleCertification() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <CertificationPage />
    </ProtectedRoute>
  );
}

function AnyLmsRoleCommunication() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <CommunicationPage />
    </ProtectedRoute>
  );
}

function AnyLmsRolePracticalLearning() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <PracticalLearningPage />
    </ProtectedRoute>
  );
}

function AnyLmsRoleAcademicProgression() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <AcademicProgressionPage />
    </ProtectedRoute>
  );
}

function AnyLmsRoleIndustryIntegration() {
  return (
    <ProtectedRoute allowedRoles={["admin", "lecturer", "student"]}>
      <IndustryIntegrationPage />
    </ProtectedRoute>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "dashboard", Component: DashboardPage },
      { path: "courses", Component: AdminOrLecturerCourses },
      { path: "assignments", Component: AdminOrLecturerAssignments },
      { path: "analytics", Component: AnyLmsRoleAnalytics },
      { path: "industrial-training", Component: AnyLmsRoleIndustrialTraining },
      { path: "lecturer", Component: LecturerOrAdminOnly },
      { path: "admin", Component: AdminOnly },
      { path: "group-projects", Component: AnyLmsRoleGroupProjects },
      { path: "practical-learning", Component: AnyLmsRolePracticalLearning },
      { path: "academic-progression", Component: AnyLmsRoleAcademicProgression },
      { path: "industry-integration", Component: AnyLmsRoleIndustryIntegration },
      { path: "certification", Component: AnyLmsRoleCertification },
      { path: "communication", Component: AnyLmsRoleCommunication },
      { path: "about", Component: AboutPage },
      { path: "admission", Component: AdmissionPage },
      { path: "study-abroad", Component: StudyAbroadPage },
      { path: "careers", Component: CareersPage },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "profile", Component: ProfilePage },
      { path: "payment", Component: PaymentPage },
      { path: "attendance", Component: AttendanceResultsPage },
    ],
  },
]);
