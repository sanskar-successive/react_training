// 2.Extend Question 1 to include error handling. If a lazy-loaded component fails to load,
//  display a user-friendly error message to the user instead of crashing the application. 
//  Implement this using the ErrorBoundary component.

import React, { Component } from 'react';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
