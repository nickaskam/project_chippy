import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  SORT_EVENTS_STARTTIME_ASCENDING,
  SORT_EVENTS_STARTTIME_DESCENDING,
  SHOW_TODAYS_EVENTS,
  SHOW_WORK_EVENTS,
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
        events: state.events
          .slice()
          .filter((event) => event.id !== action.payload),
      };
    case SORT_EVENTS_STARTTIME_ASCENDING:
      return {
        ...state,
        events: state.events
          .slice()
          .sort((a, b) => (a.start_time > b.start_time ? 1 : -1)),
      };
    case SORT_EVENTS_STARTTIME_DESCENDING:
      return {
        ...state,
        events: state.events
          .slice()
          .sort((a, b) => (b.start_time > a.start_time ? 1 : -1)),
      };
    case SHOW_WORK_EVENTS:
      return {
        ...state,
        events: state.events.filter((event) => event.category === "WORK"),
      };
    case SHOW_TODAYS_EVENTS:
      //setting date to midnight (morning)
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      //setting date to midnight (evening)
      const end = new Date();
      end.setHours(24, 0, 0, 0);
      return {
        ...state,
        events: state.events.filter(
          (event) =>
            new Date(event.start_time) > start &&
            new Date(event.start_time) < end
        ),
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
