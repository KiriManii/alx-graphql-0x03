import React, { ReactNode } from 'react';
import * as Sentry from '@sentry/react'; // <--- NEW: Import Sentry here!

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  // This is where we tell Sentry about the error!
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo }); // Still log to console for development
    Sentry.captureException(error, { extra: errorInfo }); // <--- MODIFIED: Send error to Sentry!
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Oops, something went wrong!</h2>
          <p className="text-gray-700 mb-4">It looks like there was an error loading this part of the application.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-sm transition-colors duration-200 ease-in-out"
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
