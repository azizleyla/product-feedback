import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../contexts/authContext";
import { PrimaryButton } from "./Button";

const StatisticsStyled = styled.div`
  margin-top: 2.4rem;
  background-color: var(--color-white);
  padding: 1.9rem 2.4rem;
  border-radius: 1rem;
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 2.6rem;
    letter-spacing: -0.25px;
    color: var(--color-veyr-dark-blue);
  }
  a {
    color: var(--color-blue);
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.9rem;
    text-decoration: underline;
  }
  .app__statistics {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: 0.8rem;
      h3,
      span {
        font-weight: normal;
        font-size: 1.6rem;
        line-height: 2.3rem;
        color: rgb(100, 113, 150);
      }
      span {
        font-weight: 700;
      }
    }
  }
`;

function Statistics({ feedbacks }) {
  const store = useContext(AuthContext);
  console.log(store);

  const planned = feedbacks.filter(
    (feedback) => feedback.status === "planned"
  ).length;

  const live = feedbacks.filter(
    (feedback) => feedback.status === "live"
  ).length;

  const inProgress = feedbacks.filter(
    (feedback) => feedback.status === "in-progress"
  ).length;
  return (
    <StatisticsStyled>
      <div className="heading">
        <h2>Roadmap</h2>
        <a href="/roadmap" className="view-btn">
          View
        </a>
      </div>
      <div className="app__statistics">
        <div>
          <h3>Planned</h3>
          <span className="count-planned">{planned}</span>
        </div>
        <div>
          <h3>In-Progress</h3>
          <span className="count-progress">{inProgress}</span>
        </div>
        <div>
          <h3>Live</h3>
          <span className="count-live">{live}</span>
        </div>
      </div>
      <PrimaryButton w100 onClick={store.onLogout}>
        Log out
      </PrimaryButton>
    </StatisticsStyled>
  );
}

export default Statistics;
