/**
 * This files contains all the action creator functions.
 *
 * All actions are represented by functions, even if they are not parametrized.
 *
 */
import {
  CLEAR_CHARACTERS,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_FROM_URL,
  FETCH_MORE_CHARACTERS,
} from "../character/types";

export const GetCharactersAction = (
  next_page_url,
  page_count,
  resource_count,
  previous_page_url,
  results
) => ({
  type: FETCH_CHARACTERS,
  payload: {
    next_page_url,
    page_count,
    resource_count,
    previous_page_url,
    characters: results,
  },
});

export const GetMoreCharacters = (page_number) => ({
  type: FETCH_MORE_CHARACTERS,
  payload: {
    page_number: page_number,
  },
});

export const FetchTVCharacterByURLAction = (list) => ({
  type: FETCH_CHARACTERS_FROM_URL,
  payload: {
    character_list: list.map((c) => ({
      id: c.id,
      image: c.image,
      name: c.name,
    })),
    count: list.length,
  },
});

export const ClearCharacterListAction = () => ({
  type: CLEAR_CHARACTERS,
});
