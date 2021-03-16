import { GET_DUMMY, POST_DUMMY } from "./types";
import produce from "immer";

const initialState = {
  name: "",
  age: -1,
};

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
