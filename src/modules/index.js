import { combineReducers } from "redux";
import DummyReducer from "./dummy";
import CharacterReducer from "./character";
import EpisodeReducer from "./episodes/reducers";
/**
 * Merge the different modules into one global module using combineReducers
 *
 * Used in ConfigureStore
 * @param {*} arg
 * @returns
 */
const RootReducer = () =>
  combineReducers({
    fake: DummyReducer,
    characters: CharacterReducer,
    episodes: EpisodeReducer,
  });
export default RootReducer;
