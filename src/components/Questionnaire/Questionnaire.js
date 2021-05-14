import React, { Component } from "react";
import { connect } from "react-redux";
import { findNextQuestion } from "./decisionTree";
import {
  updateUserAnswerPool,
  removeAnAnswerFromAnswerPool,
  restartQuestionnaire,
} from "../../actions";
import "./Questionnaire.css";

const initialState = {
  ticket: null,
  currentQuestionId: 1,
  currentAnswerType: "select",
  inputValue: "",
  prevQuestionIds: [],
  prevInputs: [],
  prevAnswerTypes: [],
  isStart: false,
  error: false,
};

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.findNextQuestion = findNextQuestion;
    this.renderTicket = this.renderTicket.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.restartApplication = this.restartApplication.bind(this);
  }

  onChangeHandler(event) {
    this.setState(() => {
      return { inputValue: event.target.value };
    });
  }

  renderTicket(ticket) {
    return (
      <div className="ticket">
        <div className="ticket-recommendation">Ticket Recommendation:</div>
        <p>
          - Ticket name (German):{" "}
          <span style={{ fontWeight: "bold" }}>
            {ticket.ticketNameDE} Berlin {ticket.zone}
          </span>
        </p>
        <p>
          - Ticket name (English):{" "}
          <span style={{ fontWeight: "bold" }}>
            {ticket.ticketNameEN} Berlin {ticket.zone}
          </span>
        </p>
        <p>
          - Zone:{" "}
          <span style={{ fontWeight: "bold" }}>Berlin {ticket.zone}</span>
        </p>
        <p>
          - Fare type:{" "}
          <span style={{ fontWeight: "bold" }}>
            {ticket.fareType === "normal"
              ? "Normal (normal)"
              : "Reduced (ermäßigt)"}
          </span>
        </p>
        <p>
          - Price:{" "}
          <span style={{ fontWeight: "bold" }}>{ticket.price.toFixed(2)}€</span>
        </p>
        <hr className="mt-6" />
        <div
          style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
        >
          Happy Travelling!
        </div>
      </div>
    );
  }

  renderAllQuestionsAnswers() {
    const questionIds = Object.keys(this.props.answerPool);
    return (
      <div className="questionnaire-questions-answers">
        <div className="questionnaire-decisions">Your decisions:</div>
        {questionIds.map((id) => {
          return (
            <p key={id}>
              {"- "}
              {this.props.questionPool[id].question}{" "}
              <span className="questionnaire-answer">
                {typeof this.props.answerPool[id] !== "boolean"
                  ? this.props.answerPool[id]
                  : this.props.answerPool[id]
                  ? "Yes"
                  : "No"}
              </span>
            </p>
          );
        })}
      </div>
    );
  }

  async nextQuestion() {
    if (!this.state.inputValue) {
      return this.setState({ error: true });
    }

    this.setState({ error: false });
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

    // handle error case
    if (nextQuestionId === 0) {
    }

    // ticket return, preform rendering
    if (typeof nextQuestionId === "object") {
      // nextQuestionId is misleading in this case.
      // When there is no next question, ticket will be returned
      const ticketShortInfo = nextQuestionId;
      // get all the tickets in the same type (exp. type = single-trip tickets)
      const ticketsFamily = this.props.tickets.filter(
        (tk) => tk.id === ticketShortInfo.ticketId
      )[0];
      const ticketType = ticketsFamily.type;
      const ticketNameDE = ticketsFamily.name_de;
      const ticketNameEN = ticketsFamily.name_en;

      // price of the recommened ticket
      const price = ticketsFamily.tickets.filter(
        (tk) => tk.zone === ticketShortInfo.zone
      )[0].fares[ticketShortInfo.fareType];

      const ticket = {
        ticketType,
        zone: ticketShortInfo.zone,
        fareType: ticketShortInfo.fareType,
        price,
        ticketNameDE,
        ticketNameEN,
      };
      this.setState(() => {
        return { ticket: ticket, isStart: false };
      });
      return;
    }

    // if ticket is not returned, update the start for rendering the next question
    this.setState((prevState, props) => {
      return {
        currentQuestionId: nextQuestionId,
        inputValue: "",
        prevQuestionIds: [
          ...prevState.prevQuestionIds,
          prevState.currentQuestionId,
        ],
        prevInputs: [...prevState.prevInputs, prevState.inputValue],
        prevAnswerTypes: [
          ...prevState.prevAnswerTypes,
          prevState.currentAnswerType,
        ],
        isStart: true,
      };
    });

    if (this.props.questionPool[nextQuestionId].options.length) {
      this.setState((prevState, props) => {
        return { currentAnswerType: "select" };
      });
    } else {
      this.setState(() => {
        return { currentAnswerType: "input" };
      });
    }
  }

  async previousQuestion() {
    if (this.state.currentQuestionId === 1) return;
    // remove question and answer in the answerPool
    await this.props.removeAnAnswerFromAnswerPool(this.state.currentQuestionId);

    this.setState((prevState, props) => {
      const prevQuestionId = prevState.prevQuestionIds.pop();
      const prevInputs = prevState.prevInputs.pop();
      const prevAnswerType = prevState.prevAnswerTypes.pop();
      const isAtStart = prevQuestionId !== 1;

      return {
        currentQuestionId: prevQuestionId,
        inputValue: prevInputs,
        currentAnswerType: prevAnswerType,
        prevQuestionIds: prevState.prevQuestionIds,
        prevInputs: prevState.prevInputs,
        prevAnswerTypes: prevState.prevAnswerTypes,
        isStart: isAtStart,
      };
    });
  }

  async restartApplication() {
    this.setState(() => {
      return { ...initialState };
    });
    await this.props.restartQuestionnaire();
  }

  render() {
    if (!this.props.questionPool) return <p>Loading!</p>;

    // handle restarting behavior from Navbar component
    if (this.props.isRestart) {
      this.restartApplication();
      this.props.toggleRestart(false);
    }
    return (
      <div className="component-questionnaire">
        {this.state.ticket ? (
          this.renderAllQuestionsAnswers()
        ) : (
          <>
            <div className="questionnaire-question">
              {this.props.questionPool[this.state.currentQuestionId].question}
            </div>
            <div className="select-field">
              {this.state.currentAnswerType === "select"
                ? this.props.questionPool[
                    this.state.currentQuestionId
                  ].options.map((option) => (
                    <React.Fragment key={option}>
                      <input
                        type="radio"
                        name={option}
                        id={option}
                        value={option}
                        onChange={this.onChangeHandler}
                        checked={this.state.inputValue === option}
                      />
                      <label htmlFor={option}>{option}</label>
                    </React.Fragment>
                  ))
                : null}
            </div>
            <div>
              {this.state.currentAnswerType === "input" ? (
                <input
                  type="number"
                  min={1}
                  value={this.state.inputValue}
                  onChange={this.onChangeHandler}
                />
              ) : null}
            </div>
          </>
        )}
        {this.state.ticket ? this.renderTicket(this.state.ticket) : null}

        {this.state.error ? (
          <div className="questionaire-error">
            You need to select or type your option!
          </div>
        ) : null}

        <div className="inline-flex mt-5 buttons">
          {this.state.isStart ? (
            <button
              className="text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mx-4 ease-linear transition-all duration-150"
              type="button"
              onClick={this.previousQuestion}
            >
              <i className="fas fa-backward"></i> Previous Step
            </button>
          ) : null}

          {!this.state.ticket ? (
            <button
              className="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mx-4  ease-linear transition-all duration-150"
              type="button"
              onClick={this.nextQuestion}
            >
              Next Step <i className="fas fa-forward"></i>
            </button>
          ) : null}

          {this.state.ticket ? (
            <button
              className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={this.restartApplication}
            >
              <i className="fas fa-power-off"></i> Restart
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { questionPool, tickets } = state.initialData;
  return {
    questionPool,
    tickets,
    answerPool: state.answerPool,
  };
};

export default connect(mapStateToProps, {
  updateUserAnswerPool,
  removeAnAnswerFromAnswerPool,
  restartQuestionnaire,
})(Questionnaire);
