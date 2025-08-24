import React from 'react';

// This is a simple component that, every time it tries to render,
// will intentionally throw an error. This is perfect for testing our ErrorBoundary!
const ErrorProneComponent: React.FC = () => {
  // We throw a new Error with a specific message.
  throw new Error('This is a test error to show ErrorBoundary working!');
};

export default ErrorProneComponent;
