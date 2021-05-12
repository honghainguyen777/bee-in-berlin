import React, { Component } from "react";
import { connect } from "react-redux";

class Questionnaire extends Component {
  render() {
    return <div className="component-questionnaire"></div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { questionPool, tickets } = state.initialData;
  return {
    questionPool,
    tickets,
  };
};

export default connect(mapStateToProps, {})(Questionnaire);
