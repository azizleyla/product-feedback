import styled from "styled-components";
import React, { useEffect } from "react";
import { PrimaryButton } from "../../Button";
import { useState } from "react";
import Textarea from "../../core/shared/Textarea";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

function AddComment({ requestId }) {
  const [error, setError] = useState(false);
  const [action, setAction] = useState("");
  const singleProduct = useSelector((state) => state.singleFeedback);
  console.log(singleProduct);

  const formik = useFormik({
    initialValues: {
      content: "",
    },

    onSubmit: (values) => {},
  });

  return (
    <AddCommentStyled hasError={error}>
      <div className="top">
        <h2>Add Comment</h2>
        <Link to={`/edit/${requestId}`}>
          <PrimaryButton onClick={() => setAction("edit")}>
            Edit feedback
          </PrimaryButton>
        </Link>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <Textarea
          placeholder="Add comment..."
          name="content"
          onChange={formik.handleChange}
          value={formik.values.content}
        />
      </form>
      <AddCommentFooter>
        <p>
          <span>{250}</span> characters left
        </p>
        <PrimaryButton >Post Comment</PrimaryButton>
      </AddCommentFooter>
    </AddCommentStyled>
  );
}

export default AddComment;

const AddCommentStyled = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 24px 32px 32px 32px;
  margin-bottom: 127px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    font-family: inherit;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
    margin-bottom: 24px;
  }
`;

const AddCommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  p {
    font-family: inherit;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
  }
`;
