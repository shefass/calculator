import React, { Component } from 'react';
import Keyboard from "./components/Keyboard";
import Display from "./components/Display"
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "zero"
    };
  }

  hendleInput = (id)=> {
    this.setState({
      id: id
    })
  }

  render() {
    return (
      <div className="App">
      <div id="frame">
        <Display id={this.state.id} />
        <Keyboard hendleInput={this.hendleInput}/>
        {console.log(this.state.id)}
      </div>
        
      </div>
    );
  }
}

export default App;

