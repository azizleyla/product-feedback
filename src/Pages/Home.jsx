import FeedbackBoard from "../components/FeedbackBoard";
import FeedbackList from "../components/FeedbackList";
import React, { useEffect, useState } from "react";
import RequestBoard from "../components/RequestBoard";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loadFeedback } from "../redux/slices/feedbackSlice";

const Home = ({
  active,
  feedbacks,
  filterItems,
  increaseVote,
  setFeedbacks,
  sortRequests,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      const response = await axios.get(
        "https://product-feedback-app-api.herokuapp.com/api/v1/requests",
      );
      const data = response.data.requests;
      dispatch(
        loadFeedback({
          feedbacks: data,
        }),
      );
    }
    getData();
    setIsLoading(false);
  }, [dispatch]);
  console.log(isLoading);
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
              feedbacks={feedbacks}
              filterItems={filterItems}
            />
            <div className="app__requests">
              <RequestBoard
                sortRequests={sortRequests}
                setFeedbacks={setFeedbacks}
                feedbacks={feedbacks}
              />
              <FeedbackList
                feedbacks={feedbacks}
                increaseVote={increaseVote}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
