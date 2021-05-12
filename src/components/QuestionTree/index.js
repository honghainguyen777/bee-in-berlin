import QuestionTree from "./QuestionTree";

function findQuestionAnswerInStore(question_id, answerPool) {
  return answerPool.filter((question) => question.question === question_id)[0]
    .answer;
}

export default QuestionTree;
function nextQuestion(currentQuestion, store_question_answer) {
  const currentQuestionId = currentQuestion.id;
  const answer = findQuestionAnswerInStore(
    currentQuestionId,
    store_question_answer
  );
  const answerQuestion1 = findQuestionAnswerInStore(1, store_question_answer);
  const answerQuestion3 = findQuestionAnswerInStore(3, store_question_answer);
  const answerQuestion6 = findQuestionAnswerInStore(6, store_question_answer);
  const answerQuestion7 = findQuestionAnswerInStore(7, store_question_answer);
  const answerQuestion8 = findQuestionAnswerInStore(8, store_question_answer);
  const answerQuestion9 = findQuestionAnswerInStore(9, store_question_answer);
  const answerQuestion10 = findQuestionAnswerInStore(10, store_question_answer);
  const answerQuestion11 = findQuestionAnswerInStore(11, store_question_answer);
  const answerQuestion12 = findQuestionAnswerInStore(12, store_question_answer);
  const answerQuestion13 = findQuestionAnswerInStore(13, store_question_answer);

  switch (currentQuestionId) {
    case 1:
      if (answer === "hours") return 5;
      if (answer === "days") return 3;
      return 12;
    case 3:
      if (answer > 14) return 13;
      return 6;
    case 5:
      if (answer === "S-Bahn") return 8;
      if (answer === "Tram") return 9;
      return 7;
    case 6:
      // if (!answerQuestion3) return 0;
      if (answerQuestion3 > 14) return 12;
      if (answer) return 13;
      return 11;
    case 7:
      if (answer) return 10;
      return 13;
    case 8:
      if (answer) return 13;
      return 7;
    case 9:
      if (answer) return 13;
      return 7;
    case 10:
      return;
    case 11:
      return 13;
    case 12:
      return 13;
    case 13:
      // for short trip
      if (answer && (answerQuestion8 || answerQuestion9)) return; // ticket T2_0
      if (!answer && (answerQuestion8 || answerQuestion9)) return; // ticket T2_1

      // for long trips
      return 18;
    case 14:
      return;
    case 15:
      return;
    case 18:
      // if adult is true and duration of stay is in hours
      if (answerQuestion13 && answerQuestion1 === "hours") {
        // if not multiple destinations or no return -
        if (!answerQuestion7) {
          if (answer === "AB") return; // ticket T1_AB
          if (answer === "BC") return; // ticket T1_BC
          return; // ticket T1_ABC
        }
        // multiple destinations and return - number of trip greater than 2
        if (answerQuestion7 && answerQuestion10 > 2) {
          if (answer === "AB") return; // ticket T5_AB
          if (answer === "BC") return; // ticket T5_BC
          return; // ticket T5_ABC
        }
        // multiple destinations and return - number of trip greater equal 1 or 2
        if (answerQuestion7 && answerQuestion10 <= 2) {
          if (answer === "AB") return; // 2 x ticket T1_AB
          if (answer === "BC") return; // 2 x ticket T1_BC
          return; // 2 x ticket T1_ABC
        }
      }
      // if adult is false and duration of stay is in hours -> reduced tickets
      if (!answerQuestion13 && answerQuestion1 === "hours") {
        // if not multiple destinations or no return -
        if (!answerQuestion7) {
          if (answer === "AB") return; // ticket T1_AB1
          if (answer === "BC") return; // ticket T1_BC1
          return; // ticket T1_ABC1
        }
        // multiple destinations and return - number of trip greater than 2
        if (answerQuestion7 && answerQuestion10 > 2) {
          if (answer === "AB") return; // ticket T5_AB1
          if (answer === "BC") return; // ticket T5_BC1
          return; // ticket T5_ABC
        }
        // multiple destinations and return - number of trip greater equal 1 or 2
        if (answerQuestion7 && answerQuestion10 <= 2) {
          if (answer === "AB") return; // 2 x ticket T1_AB1
          if (answer === "BC") return; // 2 x ticket T1_BC1
          return; // 2 x ticket T1_ABC
        }
      }

      // if adult is true and duration of stay is in days
      if (answerQuestion13 && answerQuestion1 === "days") {
        // if the duration of stay is less than 5 (1 - 4 days)
        if (answerQuestion3 < 5) {
          // if travel often or number of trips per day greater than 2
          if (answerQuestion6 || answerQuestion11 > 2) {
            if (answer === "AB") return; // ticket T5_AB
            if (answer === "BC") return; // ticket T5_BC
            return; // ticket T5_ABC
          }
          if (!answerQuestion6 && answerQuestion11 <= 2) {
            if (answer === "AB") return; // ticket T1_AB
            if (answer === "BC") return; // ticket T1_BC
            return; // ticket T1_ABC
          }
        }
        // multiple destinations and return - number of trips between 5 and 14 days
        if (answerQuestion3 >= 5 && answerQuestion3 <= 14) {
          // if travel often or number of trips per day greater than 2
          if (answerQuestion6 || answerQuestion11 > 2) {
            if (answer === "AB") return; // ticket T7_AB
            if (answer === "BC") return; // ticket T7_BC
            return; // ticket T7_ABC
          }
          if (!answerQuestion6 && answerQuestion11 <= 2) {
            if (answer === "AB") return; // ticket T1_AB
            if (answer === "BC") return; // ticket T1_BC
            return; // ticket T1_ABC
          }
        }

        if (answerQuestion3 > 14) {
          if (answerQuestion12) {
            if (answer === "AB") return; // ticket T9_AB
            if (answer === "BC") return; // ticket T9_BC
            return; // ticket T9_ABC
          } else {
            if (answer === "AB") return; // ticket T8_AB
            if (answer === "BC") return; // ticket T8_BC
            return; // ticket T8_ABC
          }
        }
      }

      // if adult is false and duration of stay is in days
      if (!answerQuestion13 && answerQuestion1 === "days") {
        // if the duration of stay is less than 5 (1 - 4 days)
        if (answerQuestion3 < 5) {
          // if travel often or number of trips per day greater than 2
          if (answerQuestion6 || answerQuestion11 > 2) {
            if (answer === "AB") return; // ticket T5_AB1
            if (answer === "BC") return; // ticket T5_BC1
            return; // ticket T5_ABC1
          }
          if (!answerQuestion6 && answerQuestion11 <= 2) {
            if (answer === "AB") return; // ticket T1_AB1
            if (answer === "BC") return; // ticket T1_BC1
            return; // ticket T1_ABC1
          }
        }
        // multiple destinations and return - number of trips between 5 and 14 days
        if (answerQuestion3 >= 5 && answerQuestion3 <= 14) {
          // if travel often or number of trips per day greater than 2
          if (answerQuestion6 || answerQuestion11 > 2) {
            if (answer === "AB") return; // ticket T7_AB1
            if (answer === "BC") return; // ticket T7_BC1
            return; // ticket T7_ABC
          }
          if (!answerQuestion6 && answerQuestion11 <= 2) {
            if (answer === "AB") return; // ticket T1_AB1
            if (answer === "BC") return; // ticket T1_BC1
            return; // ticket T1_ABC1
          }
        }

        if (answerQuestion3 > 14) {
          if (answerQuestion12) {
            if (answer === "AB") return; // ticket T9_AB1
            if (answer === "BC") return; // ticket T9_BC1
            return; // ticket T9_ABC1
          } else {
            if (answer === "AB") return; // ticket T8_AB1
            if (answer === "BC") return; // ticket T8_BC1
            return; // ticket T8_ABC1
          }
        }
      }

      // if duration of stay is in months
      if (answerQuestion1 === "months") {
        if (answerQuestion12) {
          if (answer === "AB") return; // ticket T9_AB1
          if (answer === "BC") return; // ticket T9_BC1
          return; // ticket T9_ABC1
        } else {
          if (answer === "AB") return; // ticket T8_AB1
          if (answer === "BC") return; // ticket T8_BC1
          return; // ticket T8_ABC1
        }
      }

      return 0;
    default:
      return 0;
  }
}

// example of storing questions and answers
// const store_question_answer = [
//     {"question": 1, "answer": "hours"}, // hours,
//     {"question": 2, "answer": ""},
//     {"question": 3, "answer": 3}, // 1-4 days, 5-7 days, 7-14 days, > 14-days
//     {"question": 4, "answer": 2},
//     {"question": 5, "answer": "S-Bahn"}, //S-Bahn, trams, combined
//     {"question": 6, "answer": "Yes"}, // Yes or No, True or False
//     {"question": 7, "answer": "Yes"}, // Yes or No, True or False
//     {"question": 8, "answer": "Yes"}, // Yes or No, True or False
//     {"question": 9, "answer": "Yes"}, // Yes or No, True or False
//     {"question": 10, "answer": 2}, // 2, 3-4, > 4
//     {"question": 11, "answer": 2}, // 1 - 2, >= 3
//     {"question": 12, "answer": "Yes"}, // Yes or No, True or False
//     {"question": 13, "answer": "Yes"}, // Yes or No, True or False
//     {"question": 14, "answer": "Yes"}, // Yes or No, True or False
//     {"question": 15, "answer": "Yes"}, // Yes or No, True or False
//     {"question": 16, "answer": "Yes"}, // Yes or No, True or False
//     {"question": 17, "answer": 3},
// ]
