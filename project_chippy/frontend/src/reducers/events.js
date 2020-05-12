import {
  GET_EVENTS,
  DELETE_EVENT,
  SORT_EVENTS_STARTTIME,
  ADD_EVENT,
} from "../actions/types.js";

const initialState = {
  events: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case SORT_EVENTS_STARTTIME:
      return {
        ...state,
        events: state.events
          .slice()
          .sort((a, b) => (a.start_time > b.start_time ? 1 : -1)),
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    default:
      return state;
  }
}
