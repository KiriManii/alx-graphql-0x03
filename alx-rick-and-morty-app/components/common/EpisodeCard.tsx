    import { EpisodeCardProps } from "@/interfaces"; // Import our type definition

    // This is a React functional component for displaying a single episode card.
    // It receives properties (props) that match our EpisodeCardProps interface.
    const EpisodeCard = ({ id, name, air_date, episode }: EpisodeCardProps) => {
      return (
        // The main container for the card, with styling from Tailwind CSS.
        // `key={id}` is important for React to efficiently update lists.
        <div key={id} className="bg-white cursor-pointer shadow-md rounded-lg p-4 m-4 transition-transform duration-200 hover:scale-105">
          {/* Flex container to arrange name and episode tag */}
          <div className="flex justify-between items-center">
            {/* Episode Name */}
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            {/* Episode Tag (e.g., S01E01) */}
            <span className="border px-2 text-xs rounded-full bg-blue-600 text-white flex items-center">{episode}</span>
          </div>
          {/* Air Date */}
          <p className="text-gray-600">{air_date}</p>
        </div>
      );
    };

    export default EpisodeCard;
    