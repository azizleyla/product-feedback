import React from 'react'
import Feedback from '../Feedback'
import data from "../../data"
import img1 from "../../assets/user-images/image-james.jpg"
import img2 from "../../assets/user-images/image-roxanne.jpg"



const feedback = data.productRequests[0];
const Comment = () => {
    return (
        <div style={{ width: "75rem", margin: "0 auto" }}>

            <Feedback {...feedback} />

            <div className="comments-container container" style={{ marginTop: "10px" }}>
                <div className="single-comment" >
                    <div className="profile-img">
                        <img src={img1} alt="user" />
                    </div>
                    <div className="profile-details">
                        <h3>
                            Elijah Moss</h3>
                        <span>@hexagon.bestagon</span>
                        <p>Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
                    </div>
                    <div className="reply-btn">
                        <button type="button">Reply</button>
                    </div>

                </div>

                <div className="single-comment" >
                    <div className="profile-img">
                        <img src={img2} alt="user" />
                    </div>
                    <div className="profile-details">
                        <h3>
                            James Skinner</h3>
                        <span>@hummingbird1</span>
                        <p>Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.</p>
                    </div>
                    <div className="reply-btn">
                        <button type="button">Reply</button>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Comment
