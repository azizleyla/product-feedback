import React from "react";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import Feedback from "./Feedback";

const FeedbackList = ({ feedbacks, increaseVote }) => {
  const feedbackLength = feedbacks.requests.length;

  const feedbackList = (
    <AppRequestsContainer>
      {feedbacks.requests.map((feedback) => {
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
