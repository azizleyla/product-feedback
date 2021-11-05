import React, { useState } from "react";
import img1 from "../../../assets/user-images/image-james.jpg";
import styled from "styled-components";
import Replies from "./Replies";
import { PrimaryButton } from "../../Button";
import Textarea from "../../core/shared/Textarea";

const Comment = ({ content, user, replies }) => {
  const [isCommentReplyBoxOpen, setIsCommentReplyBoxOpen] =
    useState(false);
  const showReplyBox = () => {
    setIsCommentReplyBoxOpen((s) => !s);
  };

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
            <h3>{user.name ? user.name : user.fullname}</h3>
            <span>{user.username}</span>
            <p>{content}</p>
            {isCommentReplyBoxOpen && (
              <div className="textarea-container">
                <Textarea placeholder="Add reply..." />
                <PrimaryButton>Post Reply</PrimaryButton>
              </div>
            )}
          </div>

          <div className="reply-btn">
            <button type="button" onClick={showReplyBox}>
              Reply
            </button>
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
  .textarea-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 600px;
    gap: 2rem;
    padding-bottom: 3rem;
    margin-top: 2.4rem;
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
    flex: 1;
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
