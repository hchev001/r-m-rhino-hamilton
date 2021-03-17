import {
  ADD_FAVORITE_CHARACTER,
  ADD_FAVORITE_EPISODE,
  CLEAR_FAVORITES,
  UN_FAVORITE_CHARACTER,
  UN_FAVORITE_EPISODE,
} from "./types";

export const LikeCharacterAction = (character) => ({
  type: ADD_FAVORITE_CHARACTER,
  character: character,
});

export const LikeEpisodeAction = (episode) => ({
  type: ADD_FAVORITE_EPISODE,
  episode: episode,
});

export const RemoveFavoriteEpisodeAction = (id) => ({
  type: UN_FAVORITE_EPISODE,
  id: id,
});

export const RemoveFavoriteCharacterAction = (id) => ({
  type: UN_FAVORITE_CHARACTER,
  id: id,
});

export const ResetFavorites = () => ({
  type: CLEAR_FAVORITES,
});
