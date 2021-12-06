import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import AddComment from "../components/product-details/comments/AddComment";
import { useDispatch, useSelector } from "react-redux";
import { loadFeedbackStart } from "../redux/slices/feedbackSlice";
import Feedback from "../components/Feedback";

const FeedbackDetails = () => {
  const params = useParams();

  const feedback = useSelector((state) => state.feedback2.singleFeedback);
  console.log(feedback);

  // const feedbackDetails = data.reducerState.requests.find((request) => {
  //   return request.id === params.feedbackId;
  // });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFeedbackStart(params.feedbackId));
  }, [dispatch, params.feedbackId]);
  return (
    <AppRequestsContainer>
      <Feedback {...feedback} />
      {/* <Feedback {...feedbackDetails} />
      <Comments comments={feedbackDetails?.comments} /> */}
      <AddComment requestId={params.feedbackId} />
    </AppRequestsContainer>
  );
};

const AppRequestsContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
`;

export default FeedbackDetails;
