import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EDIT_CLEAR,
} from "../actions/types.js";

const initialState = {
  events: [],
  deleteEditMode: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        deleteEditMode: false,
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
        deleteEditMode: true,
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case EDIT_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id !== action.payload.id ? event : action.payload
        ),
        deleteEditMode: true,
      };
    case DELETE_EDIT_CLEAR:
      return {
        ...state,
        deleteEditMode: false,
      };
    default:
      return state;
  }
}
