import React from "react";
import styled from "styled-components";
import Statistics from "./Statistics";
import { allCategories } from "../data";
import { StatusBtn } from "./Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";
import { filterFeedbacks } from "../redux/slices/feedbackSlice";

const FeedbackBoard = ({ feedbacks, active }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = function () {
    console.log("logoutHandler");
    dispatch(logoutUser());
    history.push("/login");
  };

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
            className={
              active === category ? "status-btn active" : "status-btn"
            }
            onClick={() => dispatch(filterFeedbacks(category))}
          >
            {category}
          </StatusBtn>
        ))}
      </div>
      <Statistics feedbacks={feedbacks} logoutUser={logoutHandler} />
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
