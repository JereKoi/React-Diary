// Import necessary libraries and components
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _framerMotion = require("framer-motion");

// For animating route transitions

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

// React core and hooks

var _reactRouterDom = require("react-router-dom");

// For routing in the application

var _Routes = require("./Routes");

var _Routes2 = _interopRequireDefault(_Routes);

// Importing the defined application routes

var _SitesComponentsErrorBoundaryErrorBoundary = require("./Sites/Components/ErrorBoundary/ErrorBoundary");

var _SitesComponentsErrorBoundaryErrorBoundary2 = _interopRequireDefault(_SitesComponentsErrorBoundaryErrorBoundary);

// Error boundary component for handling runtime errors

var _SitesComponentsLoadSpinnerLoadSpinner = require("./Sites/Components/LoadSpinner/LoadSpinner");

var _SitesComponentsLoadSpinnerLoadSpinner2 = _interopRequireDefault(_SitesComponentsLoadSpinnerLoadSpinner);

// Loading spinner component for visual feedback during delays

function App() {
  // Hook to get the current location object, useful for animating route transitions
  var location = (0, _reactRouterDom.useLocation)();

  // State to manage the initial loading spinner display

  var _useState = (0, _react.useState)(true);

  var _useState2 = _slicedToArray(_useState, 2);

  var isLoading = _useState2[0];
  var setIsLoading = _useState2[1];

  // useEffect to simulate a 2-second loading delay for debugging and styling purposes
  (0, _react.useEffect)(function () {
    var timeout = setTimeout(function () {
      return setIsLoading(false);
    }, 2000); // Set `isLoading` to false after 2 seconds
    return function () {
      return clearTimeout(timeout);
    }; // Clear timeout to avoid memory leaks
  }, []);

  return(
    // AnimatePresence allows route transitions to be animated
    _react2["default"].createElement(
      _framerMotion.AnimatePresence,
      { mode: "wait" },
      _react2["default"].createElement(
        _SitesComponentsErrorBoundaryErrorBoundary2["default"],
        { fallback: _react2["default"].createElement(
            "div",
            null,
            "Oops! Something went wrong. Try refreshing the page."
          ) },
        isLoading ?
        // Display a loading spinner while `isLoading` is true
        _react2["default"].createElement(_SitesComponentsLoadSpinnerLoadSpinner2["default"], null) :
        // Suspense provides fallback content (e.g., spinner) while components are lazily loaded
        _react2["default"].createElement(
          _react.Suspense,
          { fallback: _react2["default"].createElement(_SitesComponentsLoadSpinnerLoadSpinner2["default"], null) },
          _react2["default"].createElement(
            _reactRouterDom.Routes,
            { location: location, key: location.pathname },
            _Routes2["default"].map(function (_ref) {
              var path = _ref.path;
              var element = _ref.element;
              return(
                // Map through the routes array to define individual routes dynamically
                _react2["default"].createElement(_reactRouterDom.Route, { key: path, path: path, element: element })
              );
            })
          )
        )
      )
    )
  );
}

exports["default"] = App;
module.exports = exports["default"];
/* ErrorBoundary wraps the application to catch and display fallback UI for runtime errors */ /* Routes component to render the matched route's component */ /* Use location and key to support animated transitions for route changes */