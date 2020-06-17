import axios from "axios";
import { tokenConfig } from "./auth";

import { GET_TODOS } from "./types";

// GET TODOS
export const getTodos = () => (dispatch, getState) => {
  axios
    .get("/api/todos/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TODOS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
