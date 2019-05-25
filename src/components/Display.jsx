import React, { Component } from "react";

import { connect } from "react-redux";
import styled from "styled-components";

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
      <StyledDisplay>
        <DispalyOutput activeId={arrMemory} answer={answer} />
        <DispalyInput activeId={arrNow} answerShort={answerShort} />
      </StyledDisplay>
    );
  }
}
const DispalyInput = ({ activeId, answerShort }) => {
  return (
    <StyledDisplays>
      {activeId}
      {answerShort}
    </StyledDisplays>
  );
};
const DispalyOutput = ({ activeId, answer }) => {
  return (
    <StyledDisplays>
      {activeId}
      {answer}
    </StyledDisplays>
  );
};

const StyledDisplays = styled.div`
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const StyledDisplay = styled.div`
  background-color: brown;
  border: 1px solid azure;
  border-radius: 25px;
  margin: 0.6rem;
  height: 20%;
  display: flex;
  flex-direction: column;
  padding-right: 0.4em;
  padding-left: 0.4em;
  color: white;
  font-size: 1.5em;
  overflow: hidden;
  @media (max-height: 400px) {
    margin: 0.1rem;
  }
`;
export default connect(
  mapStateToProps,
  null
)(Display);
