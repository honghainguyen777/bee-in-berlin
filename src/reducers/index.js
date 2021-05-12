import { combineReducers } from "redux";
import initialAppReducer from "./initialAppReducer";
import updateUserAnswerPoolReducer from "./updateUserAnswerPoolReducer";

export default combineReducers({
  initialData: initialAppReducer,
  answerPool: updateUserAnswerPoolReducer,
});
