import React, { Component } from "react";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    states: state
  };
};

class Display extends Component {
  render() {
    
    return (
      <div id="display">
      {console.log(this.props.states)}
        <DispalyOutput activeId={this.props.states.arrMemory} answer={this.props.states.answer} />
        <DispalyInput activeId={this.props.states.arrNow} answerShort={this.props.states.answerShort} />
      </div>
    );
  }
}
function DispalyInput(props) {
  console.log(props)
  return <div className="displays" id="input">
  {props.activeId}
  {props.answerShort}
  </div>;

}
function DispalyOutput(props) {
  return <div className="displays">
  {props.activeId}
  {props.answer}
  
  </div>;
}

export default connect(
  mapStateToProps,
  null
)(Display);
