import { combineReducers } from "redux";
import events from "./events";
import auth from "./auth";
import todos from "./todos";

export default combineReducers({
  events,
  auth,
  todos,
});
