import React, { Component } from "react";
import { connect } from "react-redux";
import { findNextQuestion } from "./decisionTree";
import { updateUserAnswerPool } from "../../actions";

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionId: 1,
      currentAnswerType: "select",
      isRenderResult: false,
      inputValue: "",
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.findNextQuestion = findNextQuestion;
  }

  onChangeHandler(event) {
    this.setState(() => {
      return { inputValue: event.target.value };
    });
  }

  renderResult(ticket) {
    console.log("End");
  }

  async nextQuestion() {
    // update answerPool in redux store
    // using await allows to get the updated answerPool
    await this.props.updateUserAnswerPool(
      this.state.currentQuestionId,
      this.state.inputValue
    );

    const nextQuestionId = this.findNextQuestion(
      this.state.currentQuestionId,
      this.props.answerPool
    );

    console.log({ nextQuestionId });

    // handle error case
    if (nextQuestionId === 0) {
    }

    // ticket return, preform rendering
    if (typeof nextQuestionId === "object") {
      const ticketShortInfo = nextQuestionId;
      const ticketsFamily = this.props.tickets.filter(
        (tk) => tk.id === ticketShortInfo.ticketId
      )[0];
      const ticketType = ticketsFamily.type;
      console.log(ticketsFamily);
      const price = ticketsFamily.tickets.filter(
        (tk) => tk.zone === ticketShortInfo.zone
      )[0].fares[ticketShortInfo.fareType];
      console.log({
        ticketType,
        zone: ticketShortInfo.zone,
        fareType: ticketShortInfo.fareType,
        price,
      });
      return;
    }

    this.setState(() => {
      return { currentQuestionId: nextQuestionId };
    });

    if (this.props.questionPool[nextQuestionId].options.length) {
      this.setState(() => {
        return { currentAnswerType: "select" };
      });
    } else {
      this.setState(() => {
        return { currentAnswerType: "input" };
      });
    }
  }

  render() {
    if (!this.props.questionPool) return <p>Loading!</p>;
    return (
      <div className="component-questionnaire">
        <h1>
          {this.props.questionPool[this.state.currentQuestionId].question}
        </h1>
        {this.state.currentAnswerType === "select" ? (
          <select name="answer" id="answer" onChange={this.onChangeHandler}>
            {this.props.questionPool[this.state.currentQuestionId].options.map(
              (option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
          </select>
        ) : null}
        {this.state.currentAnswerType === "input" ? (
          <input type="number" min={1} onChange={this.onChangeHandler} />
        ) : null}
        <button onClick={this.nextQuestion}>Next Step</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { questionPool, tickets } = state.initialData;
  return {
    questionPool,
    tickets,
    answerPool: state.answerPool,
  };
};

export default connect(mapStateToProps, { updateUserAnswerPool })(
  Questionnaire
);
