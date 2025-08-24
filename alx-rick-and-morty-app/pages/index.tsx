import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "@/graphql/queries"; // Our GraphQL query
import { EpisodeProps } from "@/interfaces"; // Our TypeScript interface for episodes
import EpisodeCard from "@/components/common/EpisodeCard"; // Our new component
import { useEffect, useState } from "react"; // React hooks for state and side effects
import ErrorBoundary from '@/components/ErrorBoundary'; // Import our ErrorBoundary
import ErrorProneComponent from '@/components/ErrorProneComponent'; // Import our component that will intentionally break


// This is our main home page component.
const Home: React.FC = () => {
  // `useState` hook to manage the current page number for pagination.
  // It starts at 1.
  const [page, setPage] = useState<number>(1);

  // `useQuery` hook from Apollo Client to fetch episode data.
  // - `loading`: true when data is being fetched.
  // - `error`: contains error details if something goes wrong.
  // - `data`: contains the fetched data.
  // - `refetch`: a function to manually trigger the query again.
  const { loading, error, data, refetch } = useQuery(GET_EPISODES, {
    variables: {
      page: page // Pass the current page state as a variable to the GraphQL query
    }
  });

  // `useEffect` hook to refetch data whenever the `page` number changes.
  // `[page, refetch]` are dependencies: the effect runs when they change.
  useEffect(() => {
    refetch();
  }, [page, refetch]); // Ensure refetch is also a dependency if it's not stable or memoized.

  // Display loading message while data is being fetched.
  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-green-400">Loading episodes...</h1>
    </div>
  );
  // Display error message if the query fails.
  if (error) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-500">
      <h1 className="text-4xl font-bold">Error: {error.message}</h1>
    </div>
  );

  // Extract results and info from the fetched data.
  // Use optional chaining (`?.`) in case `data` or `episodes` are undefined.
  const results = data?.episodes.results;
  const info = data?.episodes.info;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#A3D5E0] to-[#F4F4F4] text-gray-800">
      {/* Header Section */}
      <header className="bg-[#4CA1AF] text-white py-6 text-center shadow-md">
        <h1 className="text-4xl font-bold tracking-wide">Rick and Morty Episodes</h1>
        <p className="mt-2 text-lg italic">Explore the multiverse of adventures!</p>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6">
        {/* === ErrorBoundary Test Section === */}
        {/* We're putting our ErrorProneComponent here, wrapped in an ErrorBoundary,
            to show how it catches local errors without affecting the rest of the page. */}
        <div className="max-w-7xl mx-auto mb-8">
          <ErrorBoundary>
            <ErrorProneComponent /> {/* This component will cause an error! */}
          </ErrorBoundary>
        </div>
        {/* === End ErrorBoundary Test Section === */}

        {results && results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Map over the episodes and render an EpisodeCard for each */}
            {results.map((episode: EpisodeProps) => ( // Type the episode directly for better safety
              <EpisodeCard
                id={episode.id} // Pass id, name, air_date, episode as props
                name={episode.name}
                air_date={episode.air_date}
                episode={episode.episode}
                key={episode.id} // Use episode.id as the key for lists
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600 mt-10">No episodes found for this page.</p>
        )}


        {/* Pagination Buttons */}
        <div className="flex justify-between items-center mt-8 px-4 max-w-7xl mx-auto">
          {/* Previous Button: Disabled if on the first page */}
          <button
            onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)}
            disabled={page === 1} // Disable if on the first page
            className={`bg-[#45B69C] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200 transform ${
              page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3D9B80] hover:scale-105'
            }`}
          >
            Previous
          </button>

          {/* Current Page Indicator */}
          {info && (
            <span className="text-xl font-medium text-gray-700">Page {page} of {info.pages}</span>
          )}

          {/* Next Button: Disabled if on the last page */}
          <button
            onClick={() => setPage(prev => prev < info.pages ? prev + 1 : prev)}
            disabled={page === info?.pages} // Disable if on the last page (using optional chaining for info)
            className={`bg-[#45B69C] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200 transform ${
              page === info?.pages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3D9B80] hover:scale-105'
            }`}
          >
            Next
          </button>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#4CA1AF] text-white py-4 text-center shadow-md mt-auto">
        <p>&copy; 2024 Rick and Morty Fan Page</p>
      </footer>
    </div>
  );
}

export default Home;
