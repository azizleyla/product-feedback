import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { DeleteBtn } from "../components/Button";
import { editCategories, status } from "../data";
import { useFormik } from "formik";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import axios from "axios";
import { useHistory } from "react-router";

const EditFeedback = () => {
  const params = useParams();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      status: "choose-option",
      detail: "",
    },

    onSubmit: (values) => {},
  });

  const { data, isLoading } = useQuery(
    ["feedback", params.feedbackId],
    () => {
      async function getData() {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/requests/${params.feedbackId}`,
        );
        formik.setFieldValue("title", response.data.data.title);
        formik.setFieldValue("category", response.data.data.category);
        formik.setFieldValue("status", response.data.data.status);
        formik.setFieldValue(
          "detail",
          response.data.data.description || "",
        );

        return response.data;
      }
      return getData();
    },
  );

  if (isLoading) {
    return <div className="loader"></div>;
  }

  const updateFeedback = async () => {
    if (formik.status === "choose-option" || formik.category === "") {
      return;
    }

    const response = await axios.patch(
      `https://product-feedback-app-api.herokuapp.com/api/v1/requests/${params.feedbackId}`,
      {
        title: formik.values.title,
        description: formik.values.detail,
        category: formik.values.category,
        status: formik.values.status,
      },
    );
    if (response.data.status === "success") {
      alert("Data updated successfully");
    } else {
      alert("Data updated unsuccessfully");
    }
    console.log(response.data);
  };

  return (
    <>
      <FormContainer onSubmit={formik.handleSubmit}>
        <h3>Create new feedback</h3>
        <div className="input-field">
          <span>Feedback Title</span>
          <label>Add a short, descriptive headline</label>
          <input
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className="input-field">
          <span>Category</span>
          <label>Choose a category for your feedback</label>
          <select
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
          >
            {editCategories.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <div className="input-field">
            <span>Update status</span>
            <label>Change feature state</label>
            <select name="status" onChange={formik.handleChange}>
              <option value="choose-option">Choose option</option>
              {status.map((s) => (
                <option value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="input-field">
          <span>Feedback Detail</span>
          <label>
            Include any specific comments on what should be improved,
            added, etc.
          </label>
          <textarea
            name="detail"
            value={formik.values.detail}
            onChange={formik.handleChange}
            rows="5"
            cols="10"
          ></textarea>
        </div>
        <div className="btn-container">
          <DeleteBtn>Delete</DeleteBtn>
          <div className="right">
            <Link to="/">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </Link>

            <button className="add-feedback" onClick={updateFeedback}>
              Add Feedback
            </button>
          </div>
        </div>
      </FormContainer>
    </>
  );
};
const FormContainer = styled.form`
  padding: 4rem;
  max-width: 54rem;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 4rem;
  select {
    margin-bottom: 10px;
  }
  h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    /* identical to box height */
    text-transform: capitalize;
    letter-spacing: -0.333333px;

    color: #3a4374;
  }
  .input-field {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea,
  select {
    padding: 1.3rem 2rem;
    outline: none;
    background: #f7f8fd;
    border: none;
  }
  label {
    margin-top: 0.2rem;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 1.6rem;
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

    justify-content: space-between;
    gap: 1.5rem;
    margin-top: 3rem;
    .cancel-btn {
      margin-right: 10px;
    }
  }
`;
export default EditFeedback;
