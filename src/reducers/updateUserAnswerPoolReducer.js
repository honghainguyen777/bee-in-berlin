import { UPDATE_USER_ANSWER_POOL } from "../actions/types";

const updateUserAnswerPoolReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_ANSWER_POOL:
      const { questionId, answer } = action.payload;
      return {
        ...state,
        [questionId]: answer,
      };
    default:
      return state;
  }
};

export default updateUserAnswerPoolReducer;
