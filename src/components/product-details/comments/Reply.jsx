import React from "react";
import img2 from "../../../assets/user-images/image-roxanne.jpg";
const Reply = ({ replyingTo, content }) => {
  return (
    <div className="reply">
      <div className="profile-img">
        <img src={img2} alt="" />
      </div>
      <div className="profile-details">
        <h3>Elijah Moss</h3>
        <span>{replyingTo}</span>
        <p>{content}</p>
      </div>

      <div className="reply-btn">
        <button type="button">Reply</button>
      </div>
    </div>
  );
};

export default Reply;
