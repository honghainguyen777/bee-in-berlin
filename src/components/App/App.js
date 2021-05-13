import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar";
import Questionnaire from "../Questionnaire";
import NameModal from "../NameModal";
import { fetchQuestionPool, fetchTickets } from "../../actions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRestart: false,
      name: "",
    };
    this.toggleRestart = this.toggleRestart.bind(this);
    this.setUserName = this.setUserName.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestionPool();
    this.props.fetchTickets();
  }

  toggleRestart(value) {
    this.setState(() => {
      return { isRestart: value };
    });
  }

  setUserName(name) {
    this.setState({ name: name });
  }

  render() {
    return (
      <div className="App">
        <Navbar toggleRestart={this.toggleRestart} name={this.state.name} />
        {this.state.name ? (
          <Questionnaire
            isRestart={this.state.isRestart}
            toggleRestart={this.toggleRestart}
          />
        ) : (
          <NameModal setUserName={this.setUserName} />
        )}
        <footer className="py-5 bg-blue-400 text-center text-white bottom-0 left-0 absolute w-full">
          Built by Hong Hai Nguyen with <i className="fas fa-heart"></i> in
          Germany
        </footer>
      </div>
    );
  }
}

export default connect(null, { fetchQuestionPool, fetchTickets })(App);
