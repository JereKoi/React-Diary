// Import necessary libraries and components
import { AnimatePresence } from "framer-motion"; // For animating route transitions
import React, { Suspense, useEffect, useState } from "react"; // React core and hooks
import { Route, Routes, useLocation } from "react-router-dom"; // For routing in the application
import routes from "./Routes"; // Importing the defined application routes
import ErrorBoundary from "./Sites/Components/ErrorBoundary/ErrorBoundary"; // Error boundary component for handling runtime errors
import LoadingSpinner from "./Sites/Components/LoadSpinner/LoadSpinner"; // Loading spinner component for visual feedback during delays

function App() {
  // Hook to get the current location object, useful for animating route transitions
  const location = useLocation();

  // State to manage the initial loading spinner display
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to simulate a 2-second loading delay for debugging and styling purposes
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // Set `isLoading` to false after 2 seconds
    return () => clearTimeout(timeout); // Clear timeout to avoid memory leaks
  }, []);

  return (
    // AnimatePresence allows route transitions to be animated
    <AnimatePresence mode="wait">
      {/* ErrorBoundary wraps the application to catch and display fallback UI for runtime errors */}
      <ErrorBoundary fallback={<div>Oops! Something went wrong. Try refreshing the page.</div>}>
        {isLoading ? (
          // Display a loading spinner while `isLoading` is true
          <LoadingSpinner />
        ) : (
          // Suspense provides fallback content (e.g., spinner) while components are lazily loaded
          <Suspense fallback={<LoadingSpinner />}>
            {/* Routes component to render the matched route's component */}
            {/* Use location and key to support animated transitions for route changes */}
            <Routes location={location} key={location.pathname}>
              {routes.map(({ path, element }) => (
                // Map through the routes array to define individual routes dynamically
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
