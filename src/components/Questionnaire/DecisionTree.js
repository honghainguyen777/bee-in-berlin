function findNextQuestion(currentQuestionId, answerPool) {
  let answer = answerPool[currentQuestionId];
  console.log(answerPool);

  switch (currentQuestionId) {
    case 0:
      return 1;
    case 1:
      if (answer === "hours") return 5;
      if (answer === "days") return 3;
      return 12;
    case 3:
      if (answer > 14) return 13;
      return 6;
    case 5:
      if (answer === "S-Bahns or/and underground") return 8;
      if (answer === "Trams or/and Buses") return 9;
      return 7;
    case 6:
      // if (!answerQuestion3) return 0;
      if (answerPool[3] > 14) return 12;
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
      if (answer && (answerPool[8] || answerPool[9]))
        return { ticketId: 2, zone: "", fareType: "normal" }; // ticket T2_0
      if (!answer && (answerPool[8] || answerPool[9]))
        return { ticketId: 2, zone: "", fareType: "reduced" }; // ticket T2_1

      // for long trips
      return 18;
    case 14:
      return;
    case 15:
      return;
    case 18:
      // if adult is true and duration of stay is in hours
      if (answerPool[13] && answerPool[1] === "hours") {
        // if not multiple destinations or no return -
        if (!answerPool[7]) {
          if (answer === "AB") return; // ticket T1_AB
          if (answer === "BC") return; // ticket T1_BC
          return; // ticket T1_ABC
        }
        // multiple destinations and return - number of trip greater than 2
        if (answerPool[7] && answerPool[10] > 2) {
          if (answer === "AB") return; // ticket T5_AB
          if (answer === "BC") return; // ticket T5_BC
          return; // ticket T5_ABC
        }
        // multiple destinations and return - number of trip greater equal 1 or 2
        if (answerPool[7] && answerPool[10] <= 2) {
          if (answer === "AB") return; // 2 x ticket T1_AB
          if (answer === "BC") return; // 2 x ticket T1_BC
          return; // 2 x ticket T1_ABC
        }
      }
      // if adult is false and duration of stay is in hours -> reduced tickets
      if (!answerPool[13] && answerPool[1] === "hours") {
        // if not multiple destinations or no return -
        if (!answerPool[7]) {
          if (answer === "AB") return; // ticket T1_AB1
          if (answer === "BC") return; // ticket T1_BC1
          return; // ticket T1_ABC1
        }
        // multiple destinations and return - number of trip greater than 2
        if (answerPool[7] && answerPool[10] > 2) {
          if (answer === "AB") return; // ticket T5_AB1
          if (answer === "BC") return; // ticket T5_BC1
          return; // ticket T5_ABC
        }
        // multiple destinations and return - number of trip greater equal 1 or 2
        if (answerPool[7] && answerPool[10] <= 2) {
          if (answer === "AB") return; // 2 x ticket T1_AB1
          if (answer === "BC") return; // 2 x ticket T1_BC1
          return; // 2 x ticket T1_ABC
        }
      }

      // if adult is true and duration of stay is in days
      if (answerPool[13] && answerPool[1] === "days") {
        // if the duration of stay is less than 5 (1 - 4 days)
        if (answerPool[3] < 5) {
          // if travel often or number of trips per day greater than 2
          if (answerPool[6] || answerPool[11] > 2) {
            if (answer === "AB") return; // ticket T5_AB
            if (answer === "BC") return; // ticket T5_BC
            return; // ticket T5_ABC
          }
          if (!answerPool[6] && answerPool[11] <= 2) {
            if (answer === "AB") return; // ticket T1_AB
            if (answer === "BC") return; // ticket T1_BC
            return; // ticket T1_ABC
          }
        }
        // multiple destinations and return - number of trips between 5 and 14 days
        if (answerPool[3] >= 5 && answerPool[3] <= 14) {
          // if travel often or number of trips per day greater than 2
          if (answerPool[6] || answerPool[11] > 2) {
            if (answer === "AB") return; // ticket T7_AB
            if (answer === "BC") return; // ticket T7_BC
            return; // ticket T7_ABC
          }
          if (!answerPool[6] && answerPool[11] <= 2) {
            if (answer === "AB") return; // ticket T1_AB
            if (answer === "BC") return; // ticket T1_BC
            return; // ticket T1_ABC
          }
        }

        if (answerPool[3] > 14) {
          if (answerPool[12]) {
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
      if (!answerPool[13] && answerPool[1] === "days") {
        // if the duration of stay is less than 5 (1 - 4 days)
        if (answerPool[3] < 5) {
          // if travel often or number of trips per day greater than 2
          if (answerPool[6] || answerPool[11] > 2) {
            if (answer === "AB") return; // ticket T5_AB1
            if (answer === "BC") return; // ticket T5_BC1
            return; // ticket T5_ABC1
          }
          if (!answerPool[6] && answerPool[11] <= 2) {
            if (answer === "AB") return; // ticket T1_AB1
            if (answer === "BC") return; // ticket T1_BC1
            return; // ticket T1_ABC1
          }
        }
        // multiple destinations and return - number of trips between 5 and 14 days
        if (answerPool[3] >= 5 && answerPool[3] <= 14) {
          // if travel often or number of trips per day greater than 2
          if (answerPool[6] || answerPool[11] > 2) {
            if (answer === "AB") return; // ticket T7_AB1
            if (answer === "BC") return; // ticket T7_BC1
            return; // ticket T7_ABC
          }
          if (!answerPool[6] && answerPool[11] <= 2) {
            if (answer === "AB") return; // ticket T1_AB1
            if (answer === "BC") return; // ticket T1_BC1
            return; // ticket T1_ABC1
          }
        }

        if (answerPool[3] > 14) {
          if (answerPool[12]) {
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
      if (answerPool[1] === "months") {
        if (answerPool[12]) {
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

export { findNextQuestion };

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
