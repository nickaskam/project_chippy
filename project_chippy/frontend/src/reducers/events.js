import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  EDIT_EVENT,
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
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case EDIT_EVENT:
      return {
        ...state,
        events: state.events,
      };
    default:
      return state;
  }
}
