import React from "react";
import styled from "styled-components";
import Statistics from "./Statistics";
import { allCategories } from "../data";
import { StatusBtn } from "./Button";

const FeedbackBoard = ({ filterItems, feedbacks, active, logoutUser }) => {
  return (
    <AppFeedback>
      <div className="app__feedback-board">
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </div>
      <div className="app__feedback-buttons">
        {allCategories.map((category, index) => (
          <StatusBtn
            key={index}
            type="button"
            className={active === category ? "status-btn active" : "status-btn"}
            onClick={() => filterItems(category)}
          >
            {category}
          </StatusBtn>
        ))}
      </div>
      <Statistics feedbacks={feedbacks} logoutUser={logoutUser} />
    </AppFeedback>
  );
};

export default FeedbackBoard;

const AppFeedback = styled.div`
  width: 25.5rem;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.9rem;
    letter-spacing: -0.25px;
    white-space: nowrap;
  }
  p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.2rem;
    opacity: 0.75;
  }
  .app__feedback-buttons {
    background-color: var(--color-white);
    padding: 2.4rem 4rem 2.4rem 2.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem 0.8rem;
    border-radius: 1rem;
    &.active {
      background-color: var(--color-light-blue);
      color: var(--color-white);
    }
  }

`;
