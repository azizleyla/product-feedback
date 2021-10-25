import React from "react";
import img1 from "../../../assets/user-images/image-james.jpg";
import img2 from "../../../assets/user-images/image-roxanne.jpg";
import styled from "styled-components";
import Replies from "./Replies";

const Comment = ({ content, user, replies }) => {
  return (
    <div style={{ width: "75rem", margin: "0 auto" }}>
      <CommentContainer
        className="comments-container container"
        style={{ marginTop: "10px" }}
      >
        <div className="single-card">
          <div className="profile-img">
            <img src={img1} alt="user" />
          </div>
          <div className="profile-details">
            <h3>{user.name}</h3>
            <span>{user.username}</span>
            <p>{content}</p>
          </div>

          <div className="reply-btn">
            <button type="button">Reply</button>
          </div>
        </div>
        {replies && <Replies replies={replies} />}
      </CommentContainer>
    </div>
  );
};

export default Comment;

const CommentContainer = styled.div`
  width: 75rem;
  margin-top: 10px;

  .profile-img {
  }
  .single-card,
  .reply {
    display: flex;
    padding: 2.8rem 3.2rem;
    margin-bottom: 2rem;
  }
  .reply {
    margin-left: 45px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    object-fit: cover;
    margin-right: 2rem;
  }
  .profile-details {
    h3 {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.194444px;
      color: #3a4374;
    }
    p,
    span {
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;
      margin-top: 1.7rem;
      color: #647196;
    }
  }
  .reply-btn {
    margin-left: auto;
    button {
      font-weight: 600;
      font-size: 13px;
      line-height: 19px;
      background-color: transparent;
      border: none;
      color: #4661e6;
      cursor: pointer;
    }
  }
`;
