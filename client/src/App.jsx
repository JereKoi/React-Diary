import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./Sites/AboutPage";
import AboutUsPage from "./Sites/AboutUsPage";
import ContactPage from "./Sites/ContactPage";
import DashboardPage from "./Sites/DashboardPage";
import DiaryEntriesPage from "./Sites/DiaryEntriesPage";
import DiaryQuillPage from "./Sites/DiaryQuillPage";
import DiaryWritePage from "./Sites/DiaryWritePage";
import Faq from "./Sites/Faq";
import HomePage from "./Sites/HomePage";
import LoginScreen from "./Sites/LoginScreen";
import MoreDiariesPage from "./Sites/MoreDiariesPage";
import PrivacyPolicy from "./Sites/PrivacyPolicy";
import ResetPasswordForm from "./Sites/ResetPasswordForm";
import ResetPasswordPage from "./Sites/ResetPasswordPage";
import ResetPasswordSendEmail from "./Sites/ResetPasswordSendEmail";
import TemplateDayPage from "./Sites/TemplateDayPage";
import TermsOfService from "./Sites/TermsOfService";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Loginscreen" element={<LoginScreen />} />
        <Route path="/ResetPasswordForm" element={<ResetPasswordForm />} />
        <Route path="/DiaryQuillPage" element={<DiaryQuillPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/DiaryEntriesPage" element={<DiaryEntriesPage />} />
        <Route path="/DiaryWritePage" element={<DiaryWritePage />} />
        <Route path="/TemplateDayPage" element={<TemplateDayPage/>} />
        <Route path="/MoreDiariesPage" element={<MoreDiariesPage />} />
        <Route path="/forgot-password" element={<ResetPasswordForm />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/verify/:token" element={<LoginScreen />} />
        <Route path="/verify" element={<LoginScreen />} />
        <Route path="/ResetPasswordSendEmail" element={<ResetPasswordSendEmail />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
