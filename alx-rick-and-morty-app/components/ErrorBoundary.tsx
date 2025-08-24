import React, { ReactNode } from 'react';

// This is like a blueprint for what our component's internal storage (state) will look like.
// It just needs to know if there's been an error.
interface State {
  hasError: boolean;
}

// This is a blueprint for the "props" (properties) that our ErrorBoundary component will receive.
// It expects to get some 'children' which are the components it will protect.
interface ErrorBoundaryProps {
  children: ReactNode; // ReactNode means it can be anything React can render (other components, text, etc.)
}

// Our ErrorBoundary is a special kind of React component called a "class component."
// It extends React.Component and tells it what its props and state will look like.
class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  // The constructor is called when the component is first created.
  // We set the initial state: no error yet!
  constructor(props: ErrorBoundaryProps) {
    super(props); // Always call super(props) first in a class component constructor.
    this.state = { hasError: false };
  }

  // This is a special method that React calls if an error happens in a child component.
  // It's used to update the state so our ErrorBoundary knows an error occurred.
  static getDerivedStateFromError(error: Error): State {
    // When an error is caught, we set hasError to true.
    return { hasError: true };
  }

  // Another special method React calls after an error has been caught.
  // This is a good place to log the error, send it to an error reporting service, etc.
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // For now, we'll just print the error and information about where it happened to the console.
    console.log({ error, errorInfo });
  }

  // The render method is what decides what the component actually shows on the screen.
  render() {
    // If our state says there's been an error...
    if (this.state.hasError) {
      // ...then we show a friendly message and a button to try again.
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Oops, something went wrong!</h2>
          <p className="text-gray-700 mb-4">It looks like there was an error loading this part of the application.</p>
          <button
            onClick={() => this.setState({ hasError: false })} // When clicked, it resets the error state.
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-sm transition-colors duration-200 ease-in-out"
          >
            Try again?
          </button>
        </div>
      );
    }

    // If there's no error, we just show whatever components were passed to our ErrorBoundary.
    return this.props.children;
  }
}

// This makes our ErrorBoundary component available to be used in other files.
export default ErrorBoundary;
