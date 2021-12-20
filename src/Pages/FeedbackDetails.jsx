import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import AddComment from "../components/product-details/comments/AddComment";
import Feedback from "../components/Feedback";
import { useQuery } from "react-query";
import axios from "axios";
import Comments from "../components/product-details/comments/Comments";

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

  return (
    <AppRequestsContainer>
      <Feedback {...data.data} />

      <Comments comments={data.comments} />
      <AddComment requestId={params.feedbackId} />
    </AppRequestsContainer>
  );
};

const AppRequestsContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
`;

export default FeedbackDetails;
