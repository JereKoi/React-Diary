import { AnimatePresence } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./Routes";
import ErrorBoundary from "./Sites/Components/ErrorBoundary/ErrorBoundary";
import LoadingSpinner from "./Sites/Components/LoadSpinner/LoadSpinner";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // 2-second delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <ErrorBoundary fallback={<div>Oops! Something went wrong. Try refreshing the page.</div>}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Suspense fallback={<LoadingSpinner />}>
            <Routes location={location} key={location.pathname}>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
        )}
      </ErrorBoundary>
    </AnimatePresence>
  );
}

export default App;
