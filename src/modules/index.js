import { combineReducers } from "redux";
import DummyReducer from "./dummy";
/**
 * Merge the different modules into one global module using combineReducers
 *
 * Used in ConfigureStore
 * @param {*} arg
 * @returns
 */
const RootReducer = () => combineReducers({ fake: DummyReducer });
export default RootReducer;
