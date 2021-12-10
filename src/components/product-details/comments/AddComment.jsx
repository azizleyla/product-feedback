import styled from "styled-components";
import React, { useEffect } from "react";
import { PrimaryButton } from "../../Button";
import { useState } from "react";
import Textarea from "../../core/shared/Textarea";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddComment({ requestId }) {
  const [error, setError] = useState(false);
  const [action, setAction] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state) => state.auth.token);
  console.log(token);

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: Yup.object({
      content: Yup.string()
        .max(5, "Must be less than 6")
        .required("Content is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      addComment(values);
      formik.resetForm({});
    },
  });
  console.log(formik.values);
  console.log(formik.errors);

  const addComment = async (values) => {
    const headersObject = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };

    if (values.content.trim().length === 0) {
      return;
    }
    setIsLoading(true);
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/comments`,
      {
        feedbackId: requestId,
        content: values.content,
      },
      {
        headers: headersObject,
      }
    );
    setIsLoading(false);
    console.log(response.data);
  };

  return (
    <AddCommentStyled hasError={error}>
      {" "}
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
        <AddCommentFooter>
          <p>
            <span>{250 - formik.values.content.length}</span> characters left.
          </p>
          <PrimaryButton disabled={!formik.values.content.trim() || isLoading}>
            {isLoading ? "Loading" : "Post Comment"}
          </PrimaryButton>
        </AddCommentFooter>
      </form>{" "}
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
