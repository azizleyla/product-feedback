import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import AddComment from "../components/product-details/comments/AddComment";
import Comments from "../components/product-details/comments/Comments";
import { singleLoadFeedbackStart } from "../redux/slices/feedbackSlice";
import { useDispatch, useSelector } from "react-redux";
import Feedback from "../components/Feedback";

const FeedbackDetails = () => {
  const singleCommentData = useSelector((state) => state.feedback2.feedback);
  const params = useParams();

  console.log(singleCommentData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleLoadFeedbackStart());
  }, [dispatch]);

  return (
    <AppRequestsContainer>
      <Feedback {...singleCommentData} />
      {/* <Comments comments={feedbackDetails?.comments} /> */}
      <Comments singleCommentData={singleCommentData} />
      <AddComment requestId={params.feedbackId} />
    </AppRequestsContainer>
  );
};

const AppRequestsContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
`;

export default FeedbackDetails;
