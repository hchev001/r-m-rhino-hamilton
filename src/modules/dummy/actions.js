import { GET_DUMMY, POST_DUMMY } from "./types";

export const GetDummyData = () => ({
  type: GET_DUMMY,
});

export const PostDummyData = ({ name, age }) => ({
  type: POST_DUMMY,
  payload: { name, age },
});
