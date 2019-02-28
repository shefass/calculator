import React, { Component } from "react";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    arrMemory: state.arrMemory,
    answer: state.answer,
    arrNow: state.arrNow,
    answerShort: state.answerShort
  };
};

class Display extends Component {
  render() {
    const { arrMemory, answer, arrNow, answerShort } = this.props;
    return (
      <div id="display">
        <DispalyOutput activeId={arrMemory} answer={answer} />
        <DispalyInput activeId={arrNow} answerShort={answerShort} />
      </div>
    );
  }
}
const DispalyInput = ({ activeId, answerShort }) => {
  return (
    <div className="displays" id="input">
      {activeId}
      {answerShort}
    </div>
  );
};
const DispalyOutput = ({ activeId, answer }) => {
  return (
    <div className="displays">
      {activeId}
      {answer}
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Display);
