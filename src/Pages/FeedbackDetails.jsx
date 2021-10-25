import React, { useContext } from "react";
import Feedback from "../components/Feedback";
import { StatusBtn } from "../components/Button";
import styled from "styled-components";
import Comments from "../components/product-details/comments/Comments";
import Replies from "../components/product-details/comments/Reply";
import DataContext from "../contexts/DataContext";
import { useParams } from "react-router";

const FeedbackDetails = () => {
  const params = useParams();
  console.log(params.feedbackId);
  const data = useContext(DataContext);

  const feedbackDetails = data.requests.find((request) => {
    return request.id === Number(params.feedbackId);
  });

  console.log(feedbackDetails.comments);
  return (
    <>
      <AppRequestsContainer>
        <Feedback {...feedbackDetails} />
      </AppRequestsContainer>

      <Comments comments={feedbackDetails.comments} />
      <Replies />
    </>
  );
};

const AppRequestsContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
`;
export default FeedbackDetails;
