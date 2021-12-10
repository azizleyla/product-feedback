import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import data from "../../../data";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addFeedback } from "../../../redux/slices/feedbackSlice";
import { useHistory } from "react-router";
import axios from "axios";
import * as Yup from "yup";
import { FormikInputError } from "../../FormikInputError";
import { GoBackBtn } from "../../Button";
import IconArrowLeft from "../../../assets/shared/icon-arrow-left.svg";
import newFeedbackIcon from "../../../assets/shared/icon-new-feedback.svg";

export const allCategories = [
  ...new Set([
    "UI",
    "UX",
    ...data.productRequests.map((item) => item.category),
  ]),
];
const NewFeedback = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "UI",
      detail: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Can't be empty"),
      category: Yup.string(),
      detail: Yup.string()
        .max(50, "Must be 15 characters or less")
        .required("Can't be empty"),
    }),
    onSubmit: (values) => {
      const addFeedback = async () => {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/requests`,
          {
            title: values.title,
            category: values.category,
            description: values.detail,
          }
        );
        if (response.data.status === "success") {
          history.push("/");
        }
      };
      addFeedback();
    },
  });
  const hasTitleError = formik.touched.title && formik.errors.title;
  const titleError = formik.errors.title;
  const hasDetailError = formik.touched.detail && formik.errors.detail;
  const detailError = formik.errors.detail;

  return (
    <div className="new-feedback-container">
      <div className="btn-container">
        <img src={IconArrowLeft} alt="icon" />
        <GoBackBtn to="/">Go Back</GoBackBtn>
      </div>
      <CreateNewFeedback onSubmit={formik.handleSubmit}>
        <img
          src={newFeedbackIcon}
          alt="new-feedback-icon"
          className="new-feedback-icon"
        />
        <h3>Create new feedback</h3>
        <div className="input-field">
          <span>Feedback Title</span>
          <label>Add a short, descriptive headline</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            className={hasTitleError ? "error" : ""}
          />
          {hasTitleError ? (
            <FormikInputError className={hasTitleError && "show-error"}>
              {titleError}
            </FormikInputError>
          ) : null}
        </div>
        <div className="input-field">
          <span>Category</span>
          <label>Choose a category for your feedback</label>
          <select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            {allCategories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="input-field">
          <span>Feedback Detail</span>
          <label>
            Include any specific comments on what should be improved, added,
            etc.
          </label>
          <textarea
            name="detail"
            value={formik.values.detail}
            onChange={formik.handleChange}
            rows="5"
            cols="10"
            className={hasDetailError ? "error" : ""}
          ></textarea>
          {hasDetailError ? (
            <FormikInputError>{detailError}</FormikInputError>
          ) : null}
        </div>
        <div className="btn-container">
          <Link to="/">
            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </Link>
          <button className="add-feedback">Add Feedback</button>
        </div>
      </CreateNewFeedback>
    </div>
  );
};

const CreateNewFeedback = styled.form`
  padding: 5.2rem 4.2rem 4.2rem 4.2rem;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  .new-feedback-icon {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
  }
  h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    text-transform: capitalize;
    letter-spacing: -0.333333px;
    margin-bottom: 4rem;
    color: #3a4374;
  }
  .input-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    position: relative;
  }
  input,
  textarea,
  select {
    padding: 1.3rem 2rem;
    outline: none;
    background: #f7f8fd;
    border: none;
    border-radius: 5px;
    border: 1px solid transparent;
    line-height: 20px;
  }
  textarea {
    &.error {
      border: 1px solid #d73737;
    }
  }

  input {
    &.error {
      border: 1px solid #d73737;
    }
  }
  label {
    margin-top: 0.2rem;
    margin-bottom: 1.6rem;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
    color: #647196;
  }
  span {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;

    color: #3a4374;
  }
  .btn-container {
    display: flex;
    justify-content: flex-end;
    gap: 1.5rem;
    margin-top: 3rem;
  }
  .error {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #d73737;
  }
`;

export default NewFeedback;
