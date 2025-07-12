import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-800">
          <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
          <p className="text-lg">We're sorry, but an unexpected error occurred.</p>
          <p className="text-sm mt-2">Please try refreshing the page or contact support if the issue persists.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
