import { combineReducers } from "redux";
import initialAppReducer from "./initialAppReducer";

export default combineReducers({
  initialData: initialAppReducer,
});
