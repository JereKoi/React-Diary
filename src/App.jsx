import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ForgotForm from "./Sites/ForgotForm";
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
      </Routes>
    </AnimatePresence>
  );
}

export default App;