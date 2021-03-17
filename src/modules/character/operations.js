/**
 * To represetn chained operations you need a redux middleware to enhance the dispatch function.
 *
 * In our case, we use redux-thunk. We want to separate the thunks from the action creators,
 * even with the cost of writing extra code. So we define an operation as wrapper over actions.
 *
 * If the operation oly dispatches a single action - doesn't actualy use redux thunk - we forward
 * the action creator function. If the operation uses a thunk, it can dispatch many actions and
 * chain them with promises.
 */

import {
  FetchCharacterByUrl,
  FetchCharactersFromAPI,
  FetchCharactersFromPage,
} from "./utils";
import { FetchTVCharacterByURLAction, GetCharactersAction } from "./actions";

export const FetchTVCharacters = (page_number) => {
  return (dispatch) => {
    return FetchCharactersFromAPI(page_number)
      .then((res) => {
        console.log(res);
        const { info, results } = res;
        dispatch(
          GetCharactersAction(
            info.next,
            info.pages,
            info.count,
            info.prev,
            results
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const FetchNextTVCharacters = (next_page_url) => {
  return (dispatch) => {
    return FetchCharactersFromPage(next_page_url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const FetchTVCharacterByURL = (characterList) => {
  return (dispatch) => {
    const promisedCharacters = characterList.map((url) =>
      FetchCharacterByUrl(url)
    );
    return Promise.all(promisedCharacters)
      .then((listOfCharacters) => {
        console.log("result of promise all", listOfCharacters);
        dispatch(FetchTVCharacterByURLAction(listOfCharacters));
      })
      .catch((err) => {
        console.log("one of the promised characters failed to fetch", err);
      });
  };
};

export default { FetchTVCharacters, FetchNextTVCharacters };
