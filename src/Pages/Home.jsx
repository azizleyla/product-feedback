import FeedbackBoard from "../components/FeedbackBoard";
import FeedbackList from "../components/FeedbackList";
import React from "react";
import RequestBoard from "../components/RequestBoard";
import { useQuery } from "react-query";
import axios from "axios";

async function getData() {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/v1/requests`,
  );
  return response.data;
}

const Home = ({
  active,
  feedbacks,
  filterItems,
  increaseVote,
  setFeedbacks,
  sortRequests,
}) => {
  const { data, isLoading } = useQuery("feedbacks", () => {
    return getData();
  });

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="app__container container">
      <div className="app__content">
        <FeedbackBoard
          active={active}
          feedbacks={data}
          filterItems={filterItems}
        />
        <div className="app__requests">
          <RequestBoard
            sortRequests={sortRequests}
            setFeedbacks={setFeedbacks}
            feedbacks={data}
          />

          <FeedbackList feedbacks={data} increaseVote={increaseVote} />
        </div>
      </div>
    </div>
  );
};

export default Home;
