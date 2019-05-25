import React, { Component } from "react";
import { connect } from "react-redux";
import data from "./data";
import Button from "./Button";
import styled from "styled-components";
import {
  hendleDecimal,
  hendleEquals,
  hendleNumber,
  hendleAction,
  hendleClear
} from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    onEnter: function(id) {
      if (id === "=") {
        dispatch(hendleEquals(id));
      } else if (id === ".") {
        dispatch(hendleDecimal(id));
      } else if (id === "*" || id === "/" || id === "+" || id === "-") {
        dispatch(hendleAction(id));
      } else if (id === "AC") {
        dispatch(hendleClear(id));
      } else {
        dispatch(hendleNumber(id));
      }
    }
  };
};

class Keyboard extends Component {
  state = {
    activeId: ""
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
    this.unsubscribePointerDown = data.map(
      a =>
        document.getElementById(a.id).addEventListener("mousedown", this.click) //for iOS support you cant use pointerdown
    );
    this.unsubscribePointerEnter = data.map(a =>
      document.getElementById(a.id).addEventListener("pointerenter", this.enter)
    );
    this.unsubscribePointerLeave = data.map(a =>
      document.getElementById(a.id).addEventListener("pointerleave", this.leave)
    );
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyUp);
    this.unsubscribePointerDown();
    this.unsubscribePointerEnter();
    this.unsubscribePointerLeave();
  }

  enter = e => {
    this.setState({
      activeId: e.srcElement.id
    });
  };

  leave = () => {
    this.setState({
      activeId: ""
    });
  };

  click = e => {
    e.preventDefault();
    this.props.onEnter(e.target.textContent);
  };

  handleKeyUp = event => {
    this.setState({
      activeId: ""
    });
  };

  handleKeyPress = event => {
    let idObject = data.filter(a => event.keyCode === a.keyCode);
    event.preventDefault();
    if (idObject.length > 0) {
      this.setState({
        activeId: idObject[0].id
      });
      return this.props.onEnter(idObject[0].value);
    }
  };

  render() {
    const { activeId } = this.state;
    return (
      <StyledKeyboard>
        {data.map(a => (
          <Button id={a.id} key={a.id} value={a.value} activeId={activeId} />
        ))}
      </StyledKeyboard>
    );
  }
}

const StyledKeyboard = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

export default connect(
  null,
  mapDispatchToProps
)(Keyboard);
