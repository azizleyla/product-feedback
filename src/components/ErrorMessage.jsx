import React from "react";
import styled from "styled-components";
import errorImg from "../error.png";
import StatusBtn, { PrimaryButton } from "./Button";
const ErrorMessage = () => {
  return (
    <ErrorMessageContainer>
      <img src={errorImg} alt="error" />
      <h1>There is no feedback yet.</h1>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <PrimaryButton>Add Feedback</PrimaryButton>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 825px;
  h1 {
    margin-top: 5rem;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.333333px;
    color: #3a4374;
  }
  p {
    margin-top: 1.6rem;
    max-width: 410px;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #647196;
    margin-bottom: 4.5rem;
  }
`;
