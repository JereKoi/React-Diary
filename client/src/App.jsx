import { AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./Routes";
import ErrorBoundary from "./Sites/Components/ErrorBoundary";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </AnimatePresence>
  );
}

export default App;
