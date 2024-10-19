import { AnimatePresence } from "framer-motion";
import React, { Suspense, useEffect, useTransition } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./Routes";
import ErrorBoundary from "./Sites/Components/ErrorBoundary";
import LoadingSpinner from "./Sites/Components/LoadSpinner/LoadSpinner";

function App() {
  const location = useLocation();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      // Preload critical routes to improve perceived performance
      const preloadRoutes = async () => {
        await Promise.all([
          import("./Sites/Login"),
          import("./Sites/Home"),
          import("./Sites/DiaryEntries"),
        ]);
      };
      preloadRoutes();
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <ErrorBoundary fallback={<div>Oops! Something went wrong. Try refreshing the page.</div>}>
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
