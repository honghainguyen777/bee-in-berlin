// import logo from './logo.svg';
import React, { Component } from "react";
import { connect } from "react-redux";
import Questionnaire from "../Questionnaire";
import { fetchQuestionPool, fetchTickets } from "../../actions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchQuestionPool();
    this.props.fetchTickets();
  }
  render() {
    return (
      <div className="App">
        <Questionnaire />
      </div>
    );
  }
}

export default connect(null, { fetchQuestionPool, fetchTickets })(App);
