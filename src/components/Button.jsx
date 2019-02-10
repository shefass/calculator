import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hasCapture: false
        };
      }

      onEnter = e => {
        this.setState({ hasCapture: true });
      };
      onLeave = e => {
        this.setState({ hasCapture: false });
      };

    render(){
        const styles = {
            backgroundColor: this.state.hasCapture ? "pink" : "white"
        }
    return (
            
             <div 
                className="button" 
                id={this.props.id}
                onPointerEnter={this.onEnter}
                onPointerLeave={this.onLeave}
                style = {styles}>
                {this.props.value}
            </div>
          
    )}
}


export default Button;