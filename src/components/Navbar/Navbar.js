import React, { Component } from "react";
import { connect } from "react-redux";
import { restartQuestionnaire } from "../../actions";
import logo from "./bvg-logo.png";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="relative  items-center shadow-xl mb-3">
        <div className="  flex flex-wrap items-center justify-between w-full">
          <img src={logo} className="logo" alt="bvg-logo" />
          {this.props.name ? (
            <div className="text-2xl">
              WELCOME TO BERLIN, {this.props.name}!
            </div>
          ) : null}
          <div className="items-center mr-8">
            <button
              className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => this.props.toggleRestart(true)}
            >
              <i className="fas fa-power-off"></i> Reset Inputs
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  const username = state.user;
  return {
    username,
  };
};

export default connect(mapStateToProps, { restartQuestionnaire })(Navbar);
