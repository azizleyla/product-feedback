import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import AddComment from "../components/product-details/comments/AddComment";
// import { useDispatch, useSelector } from "react-redux";
// import { loadFeedbackStart } from "../redux/slices/feedbackSlice";
import Feedback from "../components/Feedback";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

const FeedbackDetails = () => {
  const params = useParams();
  const { data, isLoading } = useQuery(
    ["feedback", params.feedbackId],
    () => {
      async function getData() {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/requests/${params.feedbackId}`,
        );
        return response.data;
      }
      return getData();
    },
  );

  // const feedback = useSelector((state) => state.feedback2.singleFeedback);

  // const feedbackDetails = data.reducerState.requests.find((request) => {
  //   return request.id === params.feedbackId;
  // });
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadFeedbackStart(params.feedbackId));
  // }, [dispatch, params.feedbackId]);

  if (isLoading) {
    return <div className="loader2"></div>;
  }
  console.log(data.data);
  return (
    <AppRequestsContainer>
      <Feedback {...data.data} />
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
