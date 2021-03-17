/* eslint-disable default-case */
import { GET_DUMMY, POST_DUMMY } from "./types";
import produce from "immer";

const initialState = {
  name: "",
  age: -1,
};

/**
 * Use Immer produce to enforce immutability when updated this slice of the store
 */
const DummyReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_DUMMY:
      break;
    case POST_DUMMY:
      draft.name = action.payload.name;
      draft.age = action.payload.age;
      break;
  }
}, initialState);

export default DummyReducer;
