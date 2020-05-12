import axios from "axios";

import {
  GET_EVENTS,
  DELETE_EVENT,
  SORT_EVENTS_STARTTIME,
  ADD_EVENT,
} from "./types";

// GET EVENTS
export const getEvents = () => (dispatch) => {
  axios
    .get("/api/events/")
    .then((res) => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE EVENT
export const deleteEvent = (id) => (dispatch) => {
  axios
    .delete(`/api/events/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_EVENT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//SORT EVENT
export const sortEventsStartTime = () => (dispatch) => {
  axios
    .get("/api/events/")
    .then((res) => {
      dispatch({
        type: SORT_EVENTS_STARTTIME,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//ADD EVENT
export const addEvent = (event) => (dispatch) => {
  axios
    .post("/api/events/", event)
    .then((res) => {
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
