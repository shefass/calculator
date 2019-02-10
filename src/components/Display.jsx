import React, { Component } from 'react';
import data from "./data.js";
//problems with props, it lags ":(("
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberGiven: "",
      signGiven: '',
      memory: []
    };
  }
  componentWillMount(){
    this.onMountAndProps();
  }
  componentWillReceiveProps(){
    this.onMountAndProps();
  }
  onMountAndProps = ()=> {
    const rightObject = data.filter(a => a.id === this.props.id);
    if (rightObject[0].value > 0 ){
     this.setState({
       numberGiven: rightObject[0].value
     });
    }
    this.setState({
     signGiven: rightObject[0].value
   });
  };

    render(){
    return (
            <div id="display">
              <DispalyOutput />
              <DispalyInput id={this.props.id} />
              {console.log(this.state.numberGiven)}
            </div>
    )}
}
  function DispalyInput (props){
    return <div className="displays">{props.id}</div>
  }
  function DispalyOutput (props){
    return <div className="displays"></div>  
  }
  

  export default Display;