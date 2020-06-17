import axios from "axios";
import { tokenConfig } from "./auth";

import { GET_TODOS, ADD_TODO } from "./types";

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

// ADD TODO
export const addTodo = (todo) => (dispatch, getState) => {
  axios
    .post("/api/todos/", todo, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
