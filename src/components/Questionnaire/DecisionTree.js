function findNextQuestion(currentQuestionId, answerPool) {
  let answer = answerPool[currentQuestionId];

  switch (currentQuestionId) {
    case 0:
      return 1;
    case 1:
      if (answer === "Hours") return 5;
      if (answer === "Days") return 3;
      return 12;
    case 3:
      if (answer > 14) return 12;
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
      return 13;
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
    // case 14:
    //   return;
    // case 15:
    //   return;
    case 18:
      // if adult is true and duration of stay is in Hours
      if (answerPool[13] && answerPool[1] === "Hours") {
        // if not multiple destinations or no return -
        if (!answerPool[7]) {
          if (answer === "AB")
            return { ticketId: 1, zone: "AB", fareType: "normal" }; // ticket T1_AB
          if (answer === "BC")
            return { ticketId: 1, zone: "BC", fareType: "normal" }; // ticket T1_BC
          return { ticketId: 1, zone: "ABC", fareType: "normal" }; // ticket T1_ABC
        }
        // multiple destinations and return - number of trip greater than 2
        if (answerPool[7] && answerPool[10] > 2) {
          if (answer === "AB")
            return { ticketId: 5, zone: "AB", fareType: "normal" }; // ticket T5_AB
          if (answer === "BC")
            return { ticketId: 5, zone: "BC", fareType: "normal" }; // ticket T5_BC
          return { ticketId: 5, zone: "ABC", fareType: "normal" }; // ticket T5_ABC
        }
        // multiple destinations and return - number of trip greater equal 1 or 2
        if (answerPool[7] && answerPool[10] <= 2) {
          if (answer === "AB")
            return { ticketId: 1, zone: "AB", fareType: "normal" }; // 2 x ticket T1_AB
          if (answer === "BC")
            return { ticketId: 1, zone: "BC", fareType: "normal" }; // 2 x ticket T1_BC
          return { ticketId: 1, zone: "ABC", fareType: "normal" }; // 2 x ticket T1_ABC
        }
      }
      // if adult is false and duration of stay is in Hours -> reduced tickets
      if (!answerPool[13] && answerPool[1] === "Hours") {
        // if not multiple destinations or no return -
        if (!answerPool[7]) {
          if (answer === "AB")
            return { ticketId: 1, zone: "AB", fareType: "reduced" }; // ticket T1_AB1
          if (answer === "BC")
            return { ticketId: 1, zone: "BC", fareType: "reduced" }; // ticket T1_BC1
          return { ticketId: 1, zone: "ABC", fareType: "reduced" }; // ticket T1_ABC1
        }
        // multiple destinations and return - number of trip greater than 2
        if (answerPool[7] && answerPool[10] > 2) {
          if (answer === "AB")
            return { ticketId: 5, zone: "AB", fareType: "reduced" }; // ticket T5_AB1
          if (answer === "BC")
            return { ticketId: 5, zone: "BC", fareType: "reduced" }; // ticket T5_BC1
          return { ticketId: 5, zone: "ABC", fareType: "reduced" }; // ticket T5_ABC
        }
        // multiple destinations and return - number of trip greater equal 1 or 2
        if (answerPool[7] && answerPool[10] <= 2) {
          if (answer === "AB")
            return { ticketId: 1, zone: "AB", fareType: "reduced" }; // 2 x ticket T1_AB1
          if (answer === "BC")
            return { ticketId: 1, zone: "BC", fareType: "reduced" }; // 2 x ticket T1_BC1
          return { ticketId: 1, zone: "ABC", fareType: "reduced" }; // 2 x ticket T1_ABC
        }
      }

      // if adult is true and duration of stay is in Days
      if (answerPool[13] && answerPool[1] === "Days") {
        // if the duration of stay is less than 5 (1 - 4 Days)
        if (answerPool[3] < 5) {
          // if travel often or number of trips per day greater than 2
          if (answerPool[6] || answerPool[11] > 2) {
            if (answer === "AB")
              return { ticketId: 5, zone: "AB", fareType: "normal" }; // ticket T5_AB
            if (answer === "BC")
              return { ticketId: 5, zone: "BC", fareType: "normal" }; // ticket T5_BC
            return { ticketId: 5, zone: "ABC", fareType: "normal" }; // ticket T5_ABC
          }
          if (!answerPool[6] && answerPool[11] <= 2) {
            if (answer === "AB")
              return { ticketId: 1, zone: "AB", fareType: "normal" }; // ticket T1_AB
            if (answer === "BC")
              return { ticketId: 1, zone: "BC", fareType: "normal" }; // ticket T1_BC
            return { ticketId: 1, zone: "ABC", fareType: "normal" }; // ticket T1_ABC
          }
        }
        // multiple destinations and return - number of trips between 5 and 14 Days
        if (answerPool[3] >= 5 && answerPool[3] <= 14) {
          // if travel often or number of trips per day greater than 2
          if (answerPool[6] || answerPool[11] > 2) {
            if (answer === "AB")
              return { ticketId: 7, zone: "AB", fareType: "normal" }; // ticket T7_AB
            if (answer === "BC")
              return { ticketId: 7, zone: "BC", fareType: "normal" }; // ticket T7_BC
            return { ticketId: 7, zone: "ABC", fareType: "normal" }; // ticket T7_ABC
          }
          if (!answerPool[6] && answerPool[11] <= 2) {
            if (answer === "AB")
              return { ticketId: 1, zone: "AB", fareType: "normal" }; // ticket T1_AB
            if (answer === "BC")
              return { ticketId: 1, zone: "BC", fareType: "normal" }; // ticket T1_BC
            return { ticketId: 1, zone: "ABC", fareType: "normal" }; // ticket T1_ABC
          }
        }

        if (answerPool[3] > 14) {
          if (answerPool[12]) {
            if (answer === "AB")
              return { ticketId: 9, zone: "AB", fareType: "normal" }; // ticket T9_AB
            if (answer === "BC")
              return { ticketId: 9, zone: "BC", fareType: "normal" }; // ticket T9_BC
            return { ticketId: 9, zone: "ABC", fareType: "normal" }; // ticket T9_ABC
          } else {
            if (answer === "AB")
              return { ticketId: 8, zone: "AB", fareType: "normal" }; // ticket T8_AB
            if (answer === "BC")
              return { ticketId: 8, zone: "BC", fareType: "normal" }; // ticket T8_BC
            return { ticketId: 8, zone: "ABC", fareType: "normal" }; // ticket T8_ABC
          }
        }
      }

      // if adult is false and duration of stay is in Days
      if (!answerPool[13] && answerPool[1] === "Days") {
        // if the duration of stay is less than 5 (1 - 4 Days)
        if (answerPool[3] < 5) {
          // if travel often or number of trips per day greater than 2
          if (answerPool[6] || answerPool[11] > 2) {
            if (answer === "AB")
              return { ticketId: 5, zone: "AB", fareType: "reduced" }; // ticket T5_AB1
            if (answer === "BC")
              return { ticketId: 5, zone: "BC", fareType: "reduced" }; // ticket T5_BC1
            return { ticketId: 5, zone: "ABC", fareType: "reduced" }; // ticket T5_ABC1
          }
          if (!answerPool[6] && answerPool[11] <= 2) {
            if (answer === "AB")
              return { ticketId: 1, zone: "AB", fareType: "reduced" }; // ticket T1_AB1
            if (answer === "BC")
              return { ticketId: 1, zone: "BC", fareType: "reduced" }; // ticket T1_BC1
            return { ticketId: 1, zone: "ABC", fareType: "reduced" }; // ticket T1_ABC1
          }
        }
        // multiple destinations and return - number of trips between 5 and 14 Days
        if (answerPool[3] >= 5 && answerPool[3] <= 14) {
          // if travel often or number of trips per day greater than 2
          if (answerPool[6] || answerPool[11] > 2) {
            if (answer === "AB")
              return { ticketId: 7, zone: "AB", fareType: "reduced" }; // ticket T7_AB1
            if (answer === "BC")
              return { ticketId: 7, zone: "BC", fareType: "reduced" }; // ticket T7_BC1
            return { ticketId: 7, zone: "ABC", fareType: "reduced" }; // ticket T7_ABC1
          }
          if (!answerPool[6] && answerPool[11] <= 2) {
            if (answer === "AB")
              return { ticketId: 1, zone: "AB", fareType: "reduced" }; // ticket T1_AB1
            if (answer === "BC")
              return { ticketId: 1, zone: "BC", fareType: "reduced" }; // ticket T1_BC1
            return { ticketId: 1, zone: "ABC", fareType: "reduced" }; // ticket T1_ABC1
          }
        }

        if (answerPool[3] > 14) {
          if (answerPool[12]) {
            if (answer === "AB")
              return { ticketId: 9, zone: "AB", fareType: "reduced" }; // ticket T9_AB1
            if (answer === "BC")
              return { ticketId: 9, zone: "BC", fareType: "reduced" }; // ticket T9_BC1
            return { ticketId: 9, zone: "ABC", fareType: "reduced" }; // ticket T9_ABC1
          } else {
            if (answer === "AB")
              return { ticketId: 8, zone: "AB", fareType: "reduced" }; // ticket T8_AB1
            if (answer === "BC")
              return { ticketId: 8, zone: "BC", fareType: "reduced" }; // ticket T8_BC1
            return { ticketId: 8, zone: "ABC", fareType: "reduced" }; // ticket T8_ABC1
          }
        }
      }

      // if duration of stay is in Months
      if (answerPool[1] === "Months") {
        if (answerPool[12]) {
          if (answer === "AB")
            return { ticketId: 9, zone: "AB", fareType: "reduced" }; // ticket T9_AB1
          if (answer === "BC")
            return { ticketId: 9, zone: "BC", fareType: "reduced" }; // ticket T9_BC1
          return { ticketId: 9, zone: "ABC", fareType: "reduced" }; // ticket T9_ABC1
        } else {
          if (answer === "AB")
            return { ticketId: 8, zone: "AB", fareType: "reduced" }; // ticket T8_AB1
          if (answer === "BC")
            return { ticketId: 8, zone: "BC", fareType: "reduced" }; // ticket T8_BC1
          return { ticketId: 8, zone: "ABC", fareType: "reduced" }; // ticket T8_ABC1
        }
      }

      return;
    default:
      return;
  }
}

export { findNextQuestion };
