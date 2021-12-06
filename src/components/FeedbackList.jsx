import axios from "axios";
import React from "react";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import Feedback from "./Feedback";
import { useQuery } from "react-query";

const FeedbackList = ({ feedbacks, increaseVote }) => {
  const feedbackLength = feedbacks.length;
  const { data, isLoading } = useQuery("feedbacks", () => {
    async function getData() {
      const response = await axios.get(
        `https://product-feedback-app-api.herokuapp.com/api/v1/requests`,
      );
      return response.data;
    }
    return getData();
  });
  if (isLoading) {
    return <div class="loader"></div>;
  }

  const feedbackList = (
    <AppRequestsContainer>
      {data.requests.map((feedback) => {
        return (
          <Feedback
            increaseVote={increaseVote}
            key={feedback._id}
            {...feedback}
          />
        );
      })}
    </AppRequestsContainer>
  );

  return <>{!feedbackLength ? <ErrorMessage /> : feedbackList}</>;
};

export default FeedbackList;
export const AppRequestsContainer = styled.div`
  width: 75rem;
`;
