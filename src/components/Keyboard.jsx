import React, { Component } from "react";
import data from "./data";
import Button from "./Button";

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCapture: false
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    data.map(a =>
      document.getElementById(a.id).addEventListener("mousedown", this.click)
    );
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    data.map(a =>
      document.getElementById(a.id).removeEventListener("click", this.click)
    );
  }
  click = e => {
    e.preventDefault();
    this.props.hendleInput(e.srcElement.id);
  };


  handleKeyPress = event => {
    let idObject = data.filter(a => event.keyCode === a.keyCode);

    event.preventDefault();
    if (idObject.length > 0) {
      return this.props.hendleInput(idObject[0].id);
    }
  };
  render() {
    return (
      <div id="keyboard">
        {data.map(a => (
          <Button id={a.id} key={a.id} value={a.value} />
        ))}
      </div>
    );
  }
}

export default Keyboard;
