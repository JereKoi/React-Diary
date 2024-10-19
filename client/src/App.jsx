import { AnimatePresence } from "framer-motion";
import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./Routes";
import ErrorBoundary from "./Sites/Components/ErrorBoundary";
import LoadingSpinner from "./Sites/Components/LoadSpinner/LoadSpinner";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Preload critical routes to improve perceived performance
    const preloadRoutes = async () => {
      await import("./Sites/Login");
    };
    preloadRoutes();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
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
