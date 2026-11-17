import type { GenreFilter, Manga, SortBy, StatusFilter } from "../utils/models.ts";

async function search(
  query: string,
  page: number,
  genre: GenreFilter | null = null,
  status: StatusFilter | null = null,
  isAuthor: boolean = false,
  customGenre: string | null = null,
  sortBy: SortBy | null = null,
  customSort: string | null = null,
): Promise<Manga[]> {
  // TODO: Search by title or author using the selected filters and sort order.
  console.log(
    `Searching for manga by ${
      isAuthor ? "author" : "title"
    } with query: ${query} on page: ${page}, genre: ${genre}, status: ${status}, custom genre: ${customGenre}, sort by: ${sortBy}, custom sort: ${customSort}`,
  );
}

export default search;
