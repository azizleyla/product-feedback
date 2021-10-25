import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "./Button";


function RequestBoard({ feedbacks, sortRequests }) {


    return (
        <div className="app__request-board">
            <h1 id="suggestion">Suggestions</h1>
            <select onChange={(e) => sortRequests(e)}>
                <option value="Most Upvotes">Most Upvotes</option>
                <option value="Least Upvotes">Least Upvotes</option>
                <option value="Most Comments">Most Comments</option>
                <option value="Least Comments">Least Comments</option>
            </select>
            <Link to="/newfeedback" style={{ marginLeft: "auto" }}>
                <PrimaryButton >Add Feedback</PrimaryButton>
            </Link>

        </div>
    );
}

export default RequestBoard;
