/* eslint-disable default-case */
import {
  FETCH_A_CHARACTER,
  FETCH_CHARACTERS,
  FETCH_MORE_CHARACTERS,
} from "./types";
import produce from "immer";

const initialState = {
  count: -1,
  pages: -1,
  next: "",
  prev: "",
  character_list: [],
  currentCharacter: {
    name: "",
    status: "",
    species: "",
    type: "",
    id: -1,
  },
};

/**
 * Use Immer produce to enforce immutability when updated this slice of the store
 */
const CharacterReducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      draft.count = action.payload.resource_count;
      draft.pages = action.payload.page_count;
      draft.next_page_url = action.payload.next_page_url;
      draft.prev_page_url = action.payload.prev_page_url;
      draft.character_list = action.payload.characters;
      break;
    case FETCH_MORE_CHARACTERS:
      draft.count = action.payload.resource_count;
      draft.pages = action.payload.page_count;
      draft.next_page_url = action.payload.next_page_url;
      draft.prev_page_url = action.payload.prev_page_url;

      // Must figure out how this method will be more performant, else
      // top implementation works fine for pagination
      draft.characters_list = action.payload.characters;
      draft.pages++;
      break;
    case FETCH_A_CHARACTER:
      draft.currentCharacter.name = action.payload.name;
      draft.currentCharacter.status = action.payload.status;
      draft.currentCharacter.species = action.payload.species;
      draft.currentCharacter.type = action.payload.type;
      draft.currentCharacter.id = action.payload.id;
      break;
  }
}, initialState);

export default CharacterReducer;
