import React from "react";
import Keyboard from "./Keyboard";
import Display from "./Display";


const Index = () => {
    return (
      <div className="App">
        <div id="frame">
          <Display   />
          <Keyboard  />         
        </div>
      </div>
    );
  }


export default Index;
