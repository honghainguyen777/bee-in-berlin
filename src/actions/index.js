// import axios from "axios";
import questions from "../seeds/questions.json";
import tickets from "../seeds/tickets.json";
import {
  FETCH_QUESTION_POOL,
  FETCH_TICKETS,
  UPDATE_USER_ANSWER_POOL,
  REMOVE_AN_ANSWER,
  RESTART_QUESTIONNAIRE,
} from "./types";

export const fetchQuestionPool = () => (dispatch) => {
  const data = questions;
  dispatch({ type: FETCH_QUESTION_POOL, payload: data });
};

export const fetchTickets = () => (dispatch) => {
  const data = tickets;
  dispatch({ type: FETCH_TICKETS, payload: data });
};

export const updateUserAnswerPool = (questionId, answer) => (dispatch) => {
  if (answer === "Yes") answer = true;
  if (answer === "No") answer = false;
  dispatch({
    type: UPDATE_USER_ANSWER_POOL,
    payload: { questionId, answer },
  });
};

export const removeAnAnswerFromAnswerPool = (questionId) => (dispatch) => {
  dispatch({
    type: REMOVE_AN_ANSWER,
    payload: { questionId },
  });
};

export const restartQuestionnaire = () => (dispatch) => {
  dispatch({ type: RESTART_QUESTIONNAIRE });
};
