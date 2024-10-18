import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import About from "./Sites/About";
import AboutUs from "./Sites/AboutUs";
import Contact from "./Sites/Contact";
import Dashboard from "./Sites/Dashboard";
import DiaryEntries from "./Sites/DiaryEntries";
import DiaryQuill from "./Sites/DiaryQuill";
import DiaryWrite from "./Sites/DiaryWrite";
import Faq from "./Sites/Faq";
import Home from "./Sites/Home";
import Login from "./Sites/Login";
import MoreDiaries from "./Sites/MoreDiaries";
import PrivacyPolicy from "./Sites/PrivacyPolicy";
import ResetPassword from "./Sites/ResetPassword";
import ResetPasswordForm from "./Sites/ResetPasswordForm";
import ResetPasswordSendEmail from "./Sites/ResetPasswordSendEmail";
import TemplateDay from "./Sites/TemplateDay";
import TermsOfService from "./Sites/TermsOfService";

function App() {
  const location = useLocation();

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/reset-password", element: <ResetPasswordForm /> },
    { path: "/reset-password/:token", element: <ResetPassword /> },
    { path: "/verify/:token", element: <Login /> },
    { path: "/diary", element: <DiaryQuill /> },
    { path: "/diaries", element: <DiaryEntries /> },
    { path: "/write-diary", element: <DiaryWrite /> },
    { path: "/more-diaries", element: <MoreDiaries /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/template-day", element: <TemplateDay /> },
    { path: "/about", element: <About /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/faq", element: <Faq /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/terms-of-service", element: <TermsOfService /> },
    { path: "/reset-password-send-email", element: <ResetPasswordSendEmail /> },
  ];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
