import { lazy } from "react";

const [Home, Login, ResetPasswordForm, ResetPassword, DiaryQuill, DiaryEntries, DiaryWrite, MoreDiaries, Dashboard, TemplateDay, About, AboutUs, Contact, Faq, PrivacyPolicy, TermsOfService, ResetPasswordSendEmail] = [
  "./Sites/Home",
  "./Sites/Login",
  "./Sites/ResetPasswordForm",
  "./Sites/ResetPassword",
  "./Sites/DiaryQuill",
  "./Sites/DiaryEntries",
  "./Sites/DiaryWrite",
  "./Sites/MoreDiaries",
  "./Sites/Dashboard",
  "./Sites/TemplateDay",
  "./Sites/About",
  "./Sites/AboutUs",
  "./Sites/Contact",
  "./Sites/Faq",
  "./Sites/PrivacyPolicy",
  "./Sites/TermsOfService",
  "./Sites/ResetPasswordSendEmail",
].map((path) => lazy(() => import(path)));

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
