import { Genre, Manga, Status } from "../utils/models.ts";

async function search(
  query: string,
  page: number,
  genre: Genre = Genre.All,
  status: Status = Status.Any,
  isAuthor: boolean = false,
  customGenre: string | null = null,
): Promise<Manga[]> {
  // TODO: Implement the logic to search for manga, including custom genre filtering
  console.log(
    `Searching for manga by ${
      isAuthor ? "author" : "title"
    } with query: ${query} on page: ${page}, genre: ${genre}, status: ${status}, custom genre: ${customGenre}`,
  );
}

export default search;
