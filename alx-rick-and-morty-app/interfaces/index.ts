    // This interface defines the structure for pagination information.
    // It tells us how many total pages there are, and if there's a next or previous page.
    interface InfoProps {
        pages: number; // Total number of pages
        next: number | null; // Page number for the next page, or null if no next page
        prev: number | null; // Page number for the previous page, or null if no previous page
        count: number; // Total number of items (episodes in this case)
    }

    // This interface defines the full structure of an Episode object returned by GraphQL.
    export interface EpisodeProps {
      id: string; // Changed from number to string, as GraphQL IDs are often strings
      name: string;
      air_date: string;
      episode: string;
      // Note: The `info` property should ideally not be on a single EpisodeProps,
      // but on the parent object that contains `results` and `info`.
      // For the purpose of matching the provided interface, we'll keep it here for now.
      info?: InfoProps; // This might be used if a single episode query also returned info,
                        // but typically it's for paginated lists. Making it optional.
    }

    // EpisodeCardProps is a "subset" of EpisodeProps.
    // It "picks" only the properties that are needed for displaying an EpisodeCard.
    // This is good for clarity and type safety for a specific component.
    export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name' | 'air_date' | "episode">;
    