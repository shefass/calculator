import React, { Component } from "react";
import Keyboard from "./Keyboard";
import Display from "./Display";

import { connect } from "react-redux";
/*
const mapStateToProps = state => {
    return {
      activeId: state
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
      onEnter: function() {
        dispatch(enter());
      }
    };
  }; */

class Index extends Component {


  render() {
    return (
      <div className="App">
        <div id="frame">
          <Display   />
          <Keyboard  />         {/* disablinam abudu  id={this.state.id}   hendleInput={this.hendleInput} */}
          
        </div>
      </div>
    );
  }
}

export default Index;
