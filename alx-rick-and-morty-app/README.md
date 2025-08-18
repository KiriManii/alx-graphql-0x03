ALX GraphQL 0x02: Rick and Morty App - GraphQL Querying and Pagination
This repository contains a Next.js application that queries the Rick and Morty GraphQL API to display episode information with pagination. This project builds upon the initial setup from `alx-graphql-0x01` and further demonstrates practical GraphQL application in a React environment.

---

## Task: Query the GraphQL Endpoint and Build UI

**Objective:** To learn how to query a GraphQL endpoint to retrieve paginated episode data, define TypeScript interfaces for data structures, and display the data using reusable React components with pagination controls.

**Endpoint Used:** `https://rickandmortyapi.com/graphql`

**Project Structure:**
The main application code resides in the `alx-rick-and-morty-app/` directory within this repository.

**Key Steps and Files Created/Modified:**

1.  **Repository Duplication**: The `alx-graphql-0x01` project's `alx-rick-and-morty-app` setup (Next.js Pages Router, Apollo Client, base GraphQL queries) was effectively duplicated into this new `alx-graphql-0x02` repository. This involved creating a new Next.js project and copying over the core GraphQL setup files.
2.  **Dependency Installation**: Necessary dependencies (`@apollo/client`, `graphql`, `@types/graphql`) were installed.
3.  **Interfaces Definition (`interfaces/index.ts`)**:
    * A new `interfaces` directory was created at the root of `alx-rick-and-morty-app`.
    * `index.ts` was created within `interfaces/` to define TypeScript interfaces (`InfoProps`, `EpisodeProps`, `EpisodeCardProps`) for GraphQL data structures, improving type safety and code clarity.
4.  **Episode Card Component (`components/common/EpisodeCard.tsx`)**:
    * A new `components/common` directory was created.
    * `EpisodeCard.tsx` was created to be a reusable React component responsible for displaying individual episode details (`id`, `name`, `air_date`, `episode`) in a structured and styled manner using Tailwind CSS.
5.  **Main Page with Pagination (`pages/index.tsx`)**:
    * The `pages/index.tsx` file was significantly updated. It now:
        * Uses the `useQuery` hook to fetch episodes, passing a `page` variable to control pagination.
        * Implements `useState` and `useEffect` to manage the current page number and refetch data when the page changes.
        * Displays loading and error states.
        * Maps through the fetched episode data and renders an `EpisodeCard` for each episode.
        * Includes "Previous" and "Next" buttons to navigate through episode pages, with logic to disable buttons when at the beginning or end of available pages.
        * Features improved styling with Tailwind CSS.

---

This comprehensive task demonstrates a practical application of GraphQL in a Next.js environment, including data fetching, type safety with TypeScript interfaces, component-based UI development, and handling pagination for a dynamic user experience.
