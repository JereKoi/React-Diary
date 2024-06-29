import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./Sites/AboutPage";
import ContactPage from "./Sites/ContactPage";
import DiaryEntriesPage from "./Sites/DiaryEntriesPage";
import DiaryQuillPage from "./Sites/DiaryQuillPage";
import DiaryWritePage from "./Sites/DiaryWritePage";
import ForgotForm from "./Sites/ForgotForm";
import HomePage from "./Sites/HomePage";
import LoginScreen from "./Sites/LoginScreen";
import StartingScreen from "./Sites/StartingScreen";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartingScreen />} />
        <Route path="/Loginscreen" element={<LoginScreen />} />
        <Route path="/ForgotForm" element={<ForgotForm />} />
        <Route path="/DiaryQuillPage" element={<DiaryQuillPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/DiaryEntriesPage" element={<DiaryEntriesPage />} />
        <Route path="/DiaryWritePage" element={<DiaryWritePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
