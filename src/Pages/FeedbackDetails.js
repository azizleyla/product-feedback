import React, { useContext } from "react";
import Feedback from "../components/Feedback";
import { StatusBtn } from "../components/Button";
import styled from "styled-components";
import Comment from "../components/Comments/Comment";
import Replies from "../components/Comments/Replies";
import DataContext from "../contexts/DataContext";
import { useParams } from "react-router";

const FeedbackDetails = () => {
  const params = useParams();
  console.log(params.feedbackId);
  const data = useContext(DataContext);

  const feedbackDetails = data.requests.find((request) => {
    return request.id === Number(params.feedbackId);
  });

  console.log(feedbackDetails);

  console.log(data);
  return (
    <>
      <Feedback />
      <Comment />
      <Replies />
    </>
  );
};

const AppRequestsContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
`;
export default FeedbackDetails;
