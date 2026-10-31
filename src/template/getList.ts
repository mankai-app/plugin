import { Genre, Manga, Status } from "../utils/models.ts";

async function getList(
  page: number,
  genre: Genre = Genre.All,
  status: Status = Status.Any,
  customGenre: string | null = null,
): Promise<Manga[]> {
  // TODO: Implement the logic to retrieve a list of manga, including custom genre filtering
  console.log(
    `Retrieving manga list for page ${page}, genre: ${genre}, status: ${status}, custom genre: ${customGenre}`,
  );
}

export default getList;
