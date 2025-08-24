ALX GraphQL 0x03: Rick and Morty App - Error Handling & GraphQL Querying

This repository contains a Next.js application that has evolved from querying the Rick and Morty GraphQL API to now include robust error handling with React Error Boundaries and integration with an error monitoring service. This project builds upon the foundational GraphQL querying and pagination demonstrated in alx-graphql-0x02, enhancing the application's resilience and maintainability.

Project Objectives:
The main goals for this comprehensive project were:

GraphQL Querying and UI Build: Learn how to query a GraphQL endpoint to retrieve paginated episode data, define TypeScript interfaces for data structures, and display the data using reusable React components with pagination controls.

Robust Error Handling: Implement an ErrorBoundary component to gracefully catch and handle JavaScript errors, preventing the entire application from crashing.

Error Monitoring Integration: Set up an external error monitoring service (like Sentry) to automatically log and report errors for better tracking and debugging in a production environment.

Endpoint Used:
Rick and Morty GraphQL API: https://rickandmortyapi.com/graphql

Project Structure:
The core application code resides in the alx-rick-and-morty-app/ directory within this repository.

Tasks Completed:
Here's a detailed breakdown of the tasks accomplished in this project:

0. Repository Duplication & Initial GraphQL Setup
Objective: To establish a new project base by duplicating an existing Next.js application, ensuring all core GraphQL querying and setup (Next.js Pages Router, Apollo Client, base GraphQL queries) are ready.

Files: Core project setup files from alx-graphql-0x01 and alx-graphql-0x02.

Description: This involved creating the alx-graphql-0x03 directory and copying the alx-rick-and-morty-app structure from the alx-graphql-0x02 project. This provided a pre-configured Next.js environment with Apollo Client integrated, ready for further development.

1. Dependency Installation
Objective: To ensure all necessary libraries for GraphQL querying and error handling are available in the project.

File: package.json

Description: Installed essential packages including @apollo/client, graphql, @types/graphql for GraphQL integration, and later @sentry/react, @sentry/nextjs for error monitoring.

2. Interfaces Definition (interfaces/index.ts)
Objective: To improve type safety and code clarity by defining TypeScript interfaces for the expected data structures from the GraphQL API.

File: interfaces/index.ts

Description: A new interfaces directory was created, and index.ts within it was populated with TypeScript interfaces (InfoProps, EpisodeProps, EpisodeCardProps). These interfaces guide data usage throughout the application, preventing common type-related errors.

3. Episode Card Component (components/common/EpisodeCard.tsx)
Objective: To create a reusable and well-styled component for displaying individual episode details.

File: components/common/EpisodeCard.tsx

Description: A new components/common directory was established. EpisodeCard.tsx was implemented as a functional React component responsible for presenting an episode's id, name, air_date, and episode number using Tailwind CSS for clean and responsive styling.

4. Main Page with Pagination (pages/index.tsx) - Initial Implementation
Objective: To implement the core logic for fetching paginated GraphQL data and rendering it on the main page with user-friendly controls.

File: pages/index.tsx

Description: The pages/index.tsx file was extensively updated to include:

The useQuery hook to fetch episode data, dynamically adjusting the page variable for pagination.

useState to manage the current page number and useEffect to trigger data refetches when the page changes.

UI elements for displaying loading states during data fetching and error messages if the query fails.

A grid layout to map and render EpisodeCard components for each fetched episode.

"Previous" and "Next" navigation buttons with logic to disable them at the start or end of the available episode pages, enhancing user experience.

Styling applied using Tailwind CSS to create an appealing and responsive layout.

5. Create the ErrorBoundary Component
Objective: Implement an ErrorBoundary class component in TypeScript that can catch and handle JavaScript errors in the application's component tree.

File: components/ErrorBoundary.tsx

Description: A new ErrorBoundary.tsx file was created within the components directory. This class component extends React.Component and includes static getDerivedStateFromError to update its state when an error occurs and componentDidCatch to log error information. When an error is caught, it renders a fallback UI ("Oops, something went wrong!") instead of crashing the application, providing a graceful user experience.

6. Wrap the Application with ErrorBoundary
Objective: Integrate the ErrorBoundary component into the Next.js application by wrapping the main component.

File: pages/_app.tsx

Description: The pages/_app.tsx file was modified to import and wrap the Component prop with the ErrorBoundary. This ensures that any unhandled JavaScript errors occurring anywhere within the entire application's component tree (across all pages) are caught by the ErrorBoundary, providing a consistent error fallback.

7. Create a Component to Test ErrorBoundary
Objective: Develop a simple component that intentionally throws an error to test the ErrorBoundary's functionality.

Files: components/ErrorProneComponent.tsx, pages/index.tsx

Description: An ErrorProneComponent.tsx was created in the components directory, designed to throw a JavaScript error when rendered. This component was then imported and strategically placed within an ErrorBoundary in pages/index.tsx (alongside the existing episode list). This setup allowed for clear visual confirmation that the ErrorBoundary successfully intercepts and handles the error, displaying its fallback UI while the rest of the application (like the episode cards) continued to function normally.

8. Monitor and Log Errors
Objective: Integrate an error monitoring service (Sentry) into the ErrorBoundary to automatically log and report errors.

Files: package.json (for Sentry dependencies), components/ErrorBoundary.tsx

Description: The Sentry SDK (@sentry/react and @sentry/nextjs) was installed. The componentDidCatch method within components/ErrorBoundary.tsx was then updated to include Sentry.captureException(error, { extra: errorInfo }). This modification enables the ErrorBoundary to not only display a user-friendly message but also send detailed error reports to a configured Sentry dashboard, crucial for real-time error tracking and debugging in production.

Setup and Running the Application
To set up and run this project locally:

Clone the repository:

git clone https://github.com/KiriManii/alx-graphql-0x03.git

Navigate to the project directory:

cd alx-graphql-0x03/alx-rick-and-morty-app

Install dependencies:

npm install

Run the development server:

npm run dev

Open your browser and navigate to http://localhost:3000. You should see the Rick and Morty episode list, with the ErrorBoundary's fallback UI at the top due to the ErrorProneComponent.

This comprehensive project showcases skills in building dynamic, type-safe Next.js applications with GraphQL, while also demonstrating critical practices in error handling and external error monitoring.
