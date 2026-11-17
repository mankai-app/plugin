import type { GenreFilter, Manga, SortBy, StatusFilter } from "../utils/models.ts";

async function getList(
  page: number,
  genre: GenreFilter | null = null,
  status: StatusFilter | null = null,
  customGenre: string | null = null,
  sortBy: SortBy | null = null,
  customSort: string | null = null,
): Promise<Manga[]> {
  // TODO: Apply the selected filters and sort order when retrieving the list.
  console.log(
    `Retrieving manga list for page ${page}, genre: ${genre}, status: ${status}, custom genre: ${customGenre}, sort by: ${sortBy}, custom sort: ${customSort}`,
  );
}

export default getList;
