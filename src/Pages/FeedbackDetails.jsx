import React, { useContext } from "react";
import Feedback from "../components/Feedback";
import styled from "styled-components";
import Comments from "../components/product-details/comments/Comments";
import Replies from "../components/product-details/comments/Reply";
import DataContext from "../contexts/dataContext";
import { useParams } from "react-router";
import AddComment from "../components/product-details/comments/AddComment";

const FeedbackDetails = () => {
  const params = useParams();

  console.log(params.feedbackId);
  const data = useContext(DataContext);

  const feedbackDetails = data.reducerState.requests.find((request) => {
    return request.id === params.feedbackId;
  });

  return (
    <AppRequestsContainer>
      <Feedback {...feedbackDetails} />
      <Comments comments={feedbackDetails?.comments} />
      <AddComment requestId={params.feedbackId} />
    </AppRequestsContainer>
  );
};

const AppRequestsContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
`;

export default FeedbackDetails;
