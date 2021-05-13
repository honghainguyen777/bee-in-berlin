import {
  UPDATE_USER_ANSWER_POOL,
  REMOVE_AN_ANSWER,
  RESTART_QUESTIONNAIRE,
} from "../actions/types";

const updateUserAnswerPoolReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_ANSWER_POOL:
      const { questionId, answer } = action.payload;
      return {
        ...state,
        [questionId]: answer,
      };
    case REMOVE_AN_ANSWER:
      const copiedState = { ...state };
      delete copiedState[action.payload.questionId];
      return copiedState;
    case RESTART_QUESTIONNAIRE:
      return {};
    default:
      return state;
  }
};

export default updateUserAnswerPoolReducer;
