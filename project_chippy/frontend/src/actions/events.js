import axios from "axios";
import { tokenConfig } from "./auth";

import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EDIT_CLEAR,
} from "./types";

// GET EVENTS
export const getEvents = () => (dispatch, getState) => {
  axios
    .get("/api/events/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE EVENT
export const deleteEvent = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/events/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_EVENT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//ADD EVENT
export const addEvent = (event) => (dispatch, getState) => {
  axios
    .post("/api/events/", event, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// EDIT EVENT
export const editEvent = (event) => (dispatch, getState) => {
  axios
    .put(`/api/events/${event.id}/`, event, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: EDIT_EVENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteEditModeClear = () => (dispatch) => {
  dispatch({
    type: DELETE_EDIT_CLEAR,
  });
};
