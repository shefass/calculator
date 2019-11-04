import React from "react";
import styled from "styled-components";

const Button = ({id, value, activeId}) => {
    
    return (
      <StyledButton 
         id={id}
         style={{backgroundColor: activeId === id ? "pink" : "lightgreen"}}>
        {value}
      </StyledButton>
    );
  
}

const StyledButton = styled.div`
border: 2px solid blueviolet;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Button;
