import React, { Component } from "react";
import { connect } from "react-redux";



import data from "./data";
import Button from "./Button";

const hendleInput = (id) => {
  return {
  type: 'number',
  activeId: id
  } 
};




const mapDispatchToProps = (dispatch) => {
  return {
    onEnter: function(id) {
      dispatch(hendleInput(id))
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
    this.props.onEnter(e.target.textContent);  //cia pakeisti peles klickas
  
   
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
      return this.props.onEnter(idObject[0].id);  //cia pakeisti klaviatura
    }
  };

  render() {
    return (
      <div id="keyboard">
        
        {data.map(a => (
          <Button
            id={a.id}
            key={a.id}
            value={a.value}
            activeId={this.state.activeId}
          />
        ))}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Keyboard);
