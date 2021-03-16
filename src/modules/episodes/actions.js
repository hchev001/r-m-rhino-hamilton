/**
 * This files contains all the action creator functions.
 *
 * All actions are represented by functions, even if they are not parametrized.
 *
 */

import { FETCH_EPISODES } from "./types";

export const GetEpisodesAction = (
  next_page_url,
  page_count,
  resource_count,
  previous_page_url,
  results
) => ({
  type: FETCH_EPISODES,
  payload: {
    next_page_url,
    page_count,
    resource_count,
    previous_page_url,
    episode_list: results,
  },
});
