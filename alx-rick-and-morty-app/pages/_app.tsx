import ErrorBoundary from '@/components/ErrorBoundary'; // This line brings in our ErrorBoundary
import type { AppProps } from "next/app";

// This is the main function that wraps all your Next.js pages.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // We wrap the entire application (represented by <Component {...pageProps} />)
    // with our ErrorBoundary. Now, if any error happens inside any page or component
    // within our app, the ErrorBoundary will catch it!
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
