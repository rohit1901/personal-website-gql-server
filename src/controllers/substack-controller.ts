import { AppContext } from "@/types/interfaces/interfaces.common";
import { ApiError } from "@/utils/ApiError";
import { getFeedByLink, getPosts, getSubstackFeed } from "substack-feed-api";
import { SUBSTACK_FEED_URL } from "../constants";

export const getSubstackPosts = async (context: AppContext) => {
  try {
    const uriComponent = `${SUBSTACK_FEED_URL}/feed`;
    const rawRes = await getSubstackFeed(uriComponent);
    return getPosts(getFeedByLink(rawRes, SUBSTACK_FEED_URL));
  } catch (error: unknown) {
    throw new ApiError(
      "Internal Server Error",
      500,
      `Error fetching substack posts: ${error}`,
    );
  }
};
