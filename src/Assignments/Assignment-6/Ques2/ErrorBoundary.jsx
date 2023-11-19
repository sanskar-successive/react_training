// 2.Extend Question 1 to include error handling. If a lazy-loaded component fails to load,
//  display a user-friendly error message to the user instead of crashing the application. 
//  Implement this using the ErrorBoundary component.

import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
