// Importing necessary libraries and styles
import PropTypes from "prop-types"; // For runtime type checking of component props
import React from "react"; // React library for creating components
import "./ErrorBoundary.css"; // CSS file for styling the ErrorBoundary component

// Class component that acts as an error boundary to catch and handle JavaScript errors in child components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the component's state with `hasError` set to `false`
    this.state = { hasError: false };
  }

  // Lifecycle method to update state when an error is thrown
  static getDerivedStateFromError() {
    // Update the `hasError` state to `true` when an error is caught
    return { hasError: true };
  }

  // Lifecycle method to log error details
  componentDidCatch(error, info) {
    // Log the error and component stack trace to the console
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  // Render method to decide what to display based on the state
  render() {
    // If an error has occurred, display a fallback UI
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong. Please try again later.</h2>
          {/* Button to reload the page */}
          <button onClick={() => window.location.reload()}>Retry</button>
          {/* Link to navigate back to the home page */}
          <a href="/">Go to Home</a>
        </div>
      );
    }

    // If no error, render the child components as usual
    return this.props.children;
  }
}

// Define the expected prop types for the component
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // `children` must be a valid React node and is required
};

// Export the ErrorBoundary component for use in other parts of the application
export default ErrorBoundary;
