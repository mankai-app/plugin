import { MangaUpdate, MangaUpdateRequest } from "../utils/models.ts";

async function getMangaUpdates(
  mangas: MangaUpdateRequest[],
): Promise<MangaUpdate[]> {
  // TODO: Implement the logic to check for manga updates
  console.log(`Checking updates for ${mangas.length} mangas`);
}

export default getMangaUpdates;
