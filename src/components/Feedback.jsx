import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StatusBtn } from "./Button";
import commentIcon from "../assets/shared/icon-comments.svg";
import iconArrowUp from "../assets/shared/icon-arrow-up.svg";

const Feedback = ({
  _id: id,
  upvotes,
  title,
  description,
  comments,
  category,
  increaseVote,
  isThisUserUpvoted,
}) => {
  return (
    <Link to={`/feedbacks/${id}`}>
      <AppRequest>
        <button
          className={`app__request-upvotes ${
            isThisUserUpvoted ? "clicked" : ""
          }`}
          onClick={() => {
            return isThisUserUpvoted ? "" : increaseVote(id);
          }}
        >
          <img className="img" src={iconArrowUp} alt="icon" />
          <span>{upvotes.length}</span>
        </button>
        <div className="app__request-details">
          <h3>{title}</h3>
          <p>{description}</p>
          <StatusBtn type="button" className="status-btn">
            {category}
          </StatusBtn>
        </div>
        <div className="app__request-comment">
          <img src={commentIcon} alt="" />
          <span className="comment">{comments ? comments.length : 0}</span>
        </div>
      </AppRequest>
    </Link>
  );
};

export default Feedback;

const AppRequest = styled.div`
  background-color: #ffffff;
  padding: 2.8rem 3.2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  &:not(:last-child) {
  }
  .app__request-upvotes {
    border-radius: 1rem;
    width: 40px;
    height: 53px;
    background-color: rgb(242, 244, 255);
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: flex-start;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.9rem;
    letter-spacing: -0.180556px;
    color: var(--color-dark-blue);
    margin-right: 4rem;
    border: none;
    img {
      margin-bottom: 0.8rem;
      cursor: pointer;
    }
  }
  .app__request-upvotes.clicked {
    background-color: #4661e6;
    color: #fff;
  }
  .app__request-details {
    h3 {
      font-size: 1.8rem;
      line-height: 2.6rem;
      letter-spacing: -0.25px;
      font-weight: bold;
      color: var(--color-veyr-dark-blue);
    }
    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;
      color: var(--color-dark-gery);
      margin: 0.4rem 0 1.2rem 0;
    }
  }

  .app__request-comment {
    display: flex;
    align-items: center;
    margin-left: auto;
    span {
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.222222px;
      color: var(--color-dark-blue);
      margin-left: 0.8rem;
    }
  }
`;
