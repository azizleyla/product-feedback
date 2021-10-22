import React from "react";
import img1 from "../../assets/user-images/image-james.jpg";
import img2 from "../../assets/user-images/image-roxanne.jpg";
import styled from "@emotion/styled";


const Comment = () => {
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
            <h3>Elijah Moss</h3>
            <span>@hexagon.bestagon</span>
            <p>
              Also, please allow styles to be applied based on system
              preferences. I would love to be able to browse Frontend
              Mentor in the evening after my device’s dark mode turns on
              without the bright background it currently has.
            </p>
          </div>
          <div className="reply-btn">
            <button type="button">Reply</button>
          </div>
        </div>

        <div className="reply">
          <div className="profile-img">
            <img src={img2} alt="" />
          </div>
          <div className="profile-details">
            <h3>Elijah Moss</h3>
            <span>@hexagon.bestagon</span>
            <p>
              Also, please allow styles to be applied based on system
              preferences. I would love to be able to browse Frontend
              Mentor in the evening after my device’s dark mode turns on
              without the bright background it currently has.
            </p>
          </div>
          <div className="reply-btn">
            <button type="button">Reply</button>
          </div>
        </div>
      </CommentContainer>
    </div>
  );
};

export default Comment;

const CommentContainer = styled.div`
  width: 75rem;
  margin-top: 10px;
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
