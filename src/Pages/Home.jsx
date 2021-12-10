import FeedbackBoard from "../components/FeedbackBoard";
import FeedbackList from "../components/FeedbackList";
import React, { useEffect, useState } from "react";
import RequestBoard from "../components/RequestBoard";
import { useQuery } from "react-query";
import axios from "axios";

const Home = ({
  active,
  feedbacks,
  filterItems,
  increaseVote,
  setFeedbacks,
  sortRequests,
}) => {
  const { data, isLoading } = useQuery("feedbacks", () => {
    async function getData() {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/requests`,
      );
      return response.data;
    }
    return getData();
  });
  if (isLoading) {
    return <div className="loader"></div>;
  }

  // console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <p>
          Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading..Loading...
        </p>
      ) : (
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
      )}
    </>
  );
};

export default Home;
