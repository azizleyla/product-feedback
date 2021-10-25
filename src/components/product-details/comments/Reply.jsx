import React from "react";
import img2 from "../../../assets/user-images/image-roxanne.jpg";
const Reply = () => {
  return (
    <div className="reply">
      <div className="profile-img">
        <img src={img2} alt="" />
      </div>
      <div className="profile-details">
        <h3>Elijah Moss</h3>
        <span>@hexagon.bestagon</span>
        <p>
          Also, please allow styles to be applied based on system
          preferences. I would love to be able to browse Frontend Mentor in
          the evening after my device’s dark mode turns on without the
          bright background it currently has.
        </p>
      </div>
      <div className="reply-btn">
        <button type="button">Reply</button>
      </div>
    </div>
  );
};

export default Reply;
