import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  SORT_EVENTS_STARTTIME_ASCENDING,
  SORT_EVENTS_STARTTIME_DESCENDING,
  SHOW_TODAYS_EVENTS,
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
    case SHOW_TODAYS_EVENTS:
      let start = new Date();
      start.setDate(start.getDate() - 1);
      let end = new Date();
      end.setDate(end.getDate + 1);
      return {
        ...state,
        events: state.events
          .slice()
          .filter(
            (a) =>
              new Date(a.start_time) > start && new Date(a.start_time) < end
          ),
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
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    default:
      return state;
  }
}
