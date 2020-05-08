import axios from "axios";

import { GET_EVENTS } from "./types";

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
