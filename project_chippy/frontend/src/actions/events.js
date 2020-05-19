import axios from "axios";

import {
  GET_EVENTS,
  DELETE_EVENT,
  SORT_EVENTS_STARTTIME_ASCENDING,
  SORT_EVENTS_STARTTIME_DESCENDING,
  ADD_EVENT,
  SHOW_TODAYS_EVENTS,
  SHOW_WORK_EVENTS,
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

//SORT EVENT START TIME ASCENDING
export const sortEventsStartTimeAscending = () => (dispatch) => {
  axios
    .get("/api/events/")
    .then((res) => {
      dispatch({
        type: SORT_EVENTS_STARTTIME_ASCENDING,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//SORT EVENT START TIME DESCENDING
export const sortEventsStartTimeDescending = () => (dispatch) => {
  axios
    .get("/api/events/")
    .then((res) => {
      dispatch({
        type: SORT_EVENTS_STARTTIME_DESCENDING,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//SHOW TODAY'S EVENTS
export const showTodaysEvents = () => (dispatch) => {
  axios
    .get("/api/events/")
    .then((res) => {
      dispatch({
        type: SHOW_TODAYS_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//SHOW WORK EVENTS
export const showWorkEvents = () => (dispatch) => {
  axios
    .get("/api/events/")
    .then((res) => {
      dispatch({
        type: SHOW_WORK_EVENTS,
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
