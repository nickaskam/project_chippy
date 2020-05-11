import axios from "axios";

import { GET_EVENTS, DELETE_EVENT } from "./types";

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
