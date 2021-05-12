import { FETCH_TICKETS, FETCH_QUESTION_POOL } from "../actions/types";

const initialAppReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTION_POOL:
      return {
        ...state,
        questionPool: action.payload,
      };
    case FETCH_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    default:
      return state;
  }
};

export default initialAppReducer;
