/* eslint-disable default-case */
import produce from "immer";
import {
  ADD_FAVORITE_CHARACTER,
  ADD_FAVORITE_EPISODE,
  CLEAR_FAVORITES,
  UN_FAVORITE_CHARACTER,
  UN_FAVORITE_EPISODE,
} from "./types";

const initialState = {
  favoriteEpisodes: [],
  favoriteCharacters: [],
};

const FavoritesReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_FAVORITE_CHARACTER:
      draft.favoriteCharacters.push(action.payload.character);
      break;
    case ADD_FAVORITE_EPISODE:
      draft.favoriteEpisodes.push(action.payload.episode);
      break;
    case UN_FAVORITE_CHARACTER:
      draft.favoriteCharacters = draft.favoriteCharacters.filter(
        (c) => c.id !== action.payload.id
      );
      break;
    case UN_FAVORITE_EPISODE:
      draft.favoriteEpisodes = draft.favoriteEpisodes.filter(
        (e) => e.id !== action.payload.id
      );
      break;
    case CLEAR_FAVORITES:
      draft.favoriteCharacters = [];
      draft.favoriteEpisodes = [];
      break;
  }
}, initialState);

export default FavoritesReducer;
