import FeedbackBoard from "../components/FeedbackBoard";
import FeedbackList from "../components/FeedbackList";
import React from 'react'
import RequestBoard from "../components/RequestBoard";

const Home = ({ active, feedbacks, filterItems, increaseVote, setFeedbacks, sortRequests }) => {
    return (
        <div className="app__container container">
            <div className="app__content">
                <FeedbackBoard active={active} feedbacks={feedbacks} filterItems={filterItems} />
                <div className="app__requests">
                    <RequestBoard sortRequests={sortRequests} setFeedbacks={setFeedbacks} feedbacks={feedbacks} />
                    <FeedbackList feedbacks={feedbacks} increaseVote={increaseVote} />
                </div>
            </div>

        </div>
    )
}

export default Home
