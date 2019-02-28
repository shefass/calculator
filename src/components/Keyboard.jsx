import React, { Component } from "react";
import { connect } from "react-redux";

import data from "./data";
import Button from "./Button";

import {
  hendleDecimal,
  hendleEquals,
  hendleNumber,
  hendleSubstract,
  hendleAction
} from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    onEnter: function(id) {
      if (id === "=") {
        dispatch(hendleEquals(id));
      } else if (id === ".") {
        dispatch(hendleDecimal(id));
      } else if (id === "-") {
        dispatch(hendleSubstract(id));
      } else if (id === "*" || id === "/" || id === "+") {
        dispatch(hendleAction(id));
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
    data.map(a =>
      document.getElementById(a.id).addEventListener("pointerdown", this.click)
    );
    data.map(a =>
      document.getElementById(a.id).addEventListener("pointerenter", this.enter)
    );
    data.map(a =>
      document.getElementById(a.id).addEventListener("pointerleave", this.leave)
    );
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyUp);
    data.map(a =>
      document
        .getElementById(a.id)
        .removeEventListener("pointerdown", this.click)
    );
    data.map(a =>
      document
        .getElementById(a.id)
        .removeEventListener("pointerenter", this.enter)
    );
    data.map(a =>
      document
        .getElementById(a.id)
        .removeEventListener("pointerleave", this.leave)
    );
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
    this.props.onEnter(e.target.textContent); //cia pakeisti peles klickas
  };

  handleKeyUp = event => {
    setTimeout(
      () =>
        this.setState({
          activeId: ""
        }),
      600
    );
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
    return (                            //vel grazinti i map galima
      <div id="keyboard">
        <Button id={"clear"} value={"AC"} activeId={activeId} />
        <Button id={"divide"} value={"/"} activeId={activeId} />
        <Button id={"multiply"} value={"*"} activeId={activeId} />
        <Button id={"seven"} value={7} activeId={activeId} />
        <Button id={"eight"} value={8} activeId={activeId} />
        <Button id={"nine"} value={9} activeId={activeId} />
        <Button id={"substract"} value={"-"} activeId={activeId} />
        <Button id={"four"} value={4} activeId={activeId} />
        <Button id={"five"} value={5} activeId={activeId} />
        <Button id={"six"} value={6} activeId={activeId} />
        <Button id={"plus"} value={"+"} activeId={activeId} />
        <Button id={"one"} value={1} activeId={activeId} />
        <Button id={"two"} value={2} activeId={activeId} />
        <Button id={"tree"} value={3} activeId={activeId} />
        <Button id={"zero"} value={0} activeId={activeId} />
        <Button id={"decimal"} value={"."} activeId={activeId} />
        <Button id={"equals"} value={"="} activeId={activeId} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Keyboard);
