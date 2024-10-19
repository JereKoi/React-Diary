import { lazy } from "react";

// Lazy load components to improve performance
const Home = lazy(() => import("./Sites/Home"));
const Login = lazy(() => import("./Sites/Login"));
const ResetPasswordForm = lazy(() => import("./Sites/ResetPasswordForm"));
const ResetPassword = lazy(() => import("./Sites/ResetPassword"));
const DiaryQuill = lazy(() => import("./Sites/DiaryQuill"));
const DiaryEntries = lazy(() => import("./Sites/DiaryEntries"));
const DiaryWrite = lazy(() => import("./Sites/DiaryWrite"));
const MoreDiaries = lazy(() => import("./Sites/MoreDiaries"));
const Dashboard = lazy(() => import("./Sites/Dashboard"));
const TemplateDay = lazy(() => import("./Sites/TemplateDay"));
const About = lazy(() => import("./Sites/About"));
const AboutUs = lazy(() => import("./Sites/AboutUs"));
const Contact = lazy(() => import("./Sites/Contact"));
const Faq = lazy(() => import("./Sites/Faq"));
const PrivacyPolicy = lazy(() => import("./Sites/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./Sites/TermsOfService"));
const ResetPasswordSendEmail = lazy(() => import("./Sites/ResetPasswordSendEmail"));

// Define route groups for better organization
const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/reset-password", element: <ResetPasswordForm /> },
  { path: "/reset-password/:token", element: <ResetPassword /> },
  { path: "/verify/:token", element: <Login /> },
];

const diaryRoutes = [
  { path: "/diary", element: <DiaryQuill /> },
  { path: "/diaries", element: <DiaryEntries /> },
  { path: "/write-diary", element: <DiaryWrite /> },
  { path: "/more-diaries", element: <MoreDiaries /> },
];

const staticRoutes = [
  { path: "/about", element: <About /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/faq", element: <Faq /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "/reset-password-send-email", element: <ResetPasswordSendEmail /> },
];

const routes = [
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/template-day", element: <TemplateDay /> },
  ...authRoutes,
  ...diaryRoutes,
  ...staticRoutes,
];

export default routes;
