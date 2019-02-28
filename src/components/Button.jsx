import React from "react";

const Button = ({id, value, activeId}) => {
    
    return (
      <div className="button" 
         id={id}
         style={{backgroundColor: activeId === id ? "pink" : "lightgreen"}}>
        {value}
      </div>
    );
  
}

export default Button;
