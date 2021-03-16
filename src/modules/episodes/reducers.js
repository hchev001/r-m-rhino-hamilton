/* eslint-disable default-case */
import produce from "immer";
import { FETCH_EPISODES } from "./types";

const initialState = {
  episode_count: -1,
  episode_page_count: -1,
  next_episode_page: "",
  prev_episode_page: "",
  episode_list: [],
};

/**
 * Use Immer Produce to enforce immutability in a declarative fashion when updating this slice of the store
 */

const EpisodeReducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      draft.episode_count = action.payload.resource_count;
      draft.episode_page_count = action.payload.page_count;
      draft.next_episode_page = action.payload.next_page_url;
      draft.prev_episode_page = action.payload.previous_page_url;
      draft.episode_list = action.payload.episode_list;
      break;
  }
}, initialState);

export default EpisodeReducer;
