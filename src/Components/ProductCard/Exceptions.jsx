import React from "react";
import styled from "styled-components";

const Exceptions = () => {
  return (
    <StyledExcep>
      <h1 className="titulo">Consultar por este producto en caja.</h1>
    </StyledExcep>
  );
};

const StyledExcep = styled.div`
  height: 35rem;
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 8px 23px 24px -10px rgba(0, 0, 0, 0.8);
  color: #ffffff;
  background: #929e91;

  .titulo {
    background: #2b2e2b;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 2.5rem;
    height: 13rem;
  }
`;

export default Exceptions;
