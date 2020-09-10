import { GET_TODOS, ADD_TODO, DELETE_TODO } from "../actions/types.js";

const initialState = {
  todos: [],
  deleteEditMode = false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.events.map((todo) =>
          todo.id !== action.payload.id ? todo : action.payload
        ),
        deleteEditMode: true,
      };
    default:
      return state;
  }
}
