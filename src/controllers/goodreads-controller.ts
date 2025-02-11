import { AppContext } from "@/types/interfaces/interfaces.common";
import {
  GoodreadsShelf,
  LiteralReadingState,
} from "@/types/types/types.common";
import { ApiError } from "@/utils/ApiError";
import { randomUUID } from "crypto";
import {
  getGoodreadsFeed,
  getGoodreadsFeedItems,
  GoodreadsItem,
} from "substack-feed-api";
import { GOODREADS_FEED_SHELF_URL } from "../constants";
import { ReadingStatus } from "../types/enums/enums.common";

const GOODREADS_SHELF: Record<GoodreadsShelf, ReadingStatus> = {
  READ: ReadingStatus.Finished,
  READING: ReadingStatus.IsReading,
  TO_READ: ReadingStatus.WantsToRead,
};
const transformGoodreadsData = (
  data: GoodreadsItem,
  shelfType: GoodreadsShelf,
): LiteralReadingState => {
  return {
    status: GOODREADS_SHELF[shelfType],
    book: {
      id: randomUUID(),
      slug: data.link,
      title: data.title,
      description: data.book_description,
      cover: data.book_image_url,
      authors: [
        {
          name: data.author_name,
        },
      ],
    },
  };
};
const fetchShelfData = async (shelf: GoodreadsShelf, uriComponent: string) => {
  const feedData = await getGoodreadsFeed(uriComponent);
  return getGoodreadsFeedItems(feedData).map((item) =>
    transformGoodreadsData(item, shelf),
  );
};
export const getGoodreadsShelves = async (
  context: AppContext,
): Promise<LiteralReadingState[]> => {
  if (!context.authorized) {
    throw new Error("Unauthorized");
  }

  try {
    const readUriComponent = `${GOODREADS_FEED_SHELF_URL}read`;
    const readingUriComponent = `${GOODREADS_FEED_SHELF_URL}currently-reading`;
    const toReadUriComponent = `${GOODREADS_FEED_SHELF_URL}to-read`;

    const [readData, readingData, toReadData] = await Promise.all([
      fetchShelfData("READ", readUriComponent),
      fetchShelfData("READING", readingUriComponent),
      fetchShelfData("TO_READ", toReadUriComponent),
    ]);

    return [...readData, ...readingData, ...toReadData];
  } catch (error: unknown) {
    throw new ApiError(
      "Internal Server Error",
      500,
      `Error fetching goodreads shelves: ${error}`,
    );
  }
};
