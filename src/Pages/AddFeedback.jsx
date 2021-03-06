import styled from "styled-components";
import React from "react";
import data from "../data";
import { useFormik } from 'formik';


export const allCategories = [
  ...new Set([
    "ui",
    "ux",
    ...data.productRequests.map((item) => item.category),
  ]),
];

const AddFeedback = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Feedback title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

  
    

      <button type="submit">Submit</button>
    </form>

    // <FormContainer>
    //   <h3>Create new feedback</h3>
    //   <div className="input-field">
    //     <span>Feedback Title</span>
    //     <label>Add a short, descriptive headline</label>
    //     <input type="text" />
    //   </div>
    //   <div className="input-field">
    //     <span>Category</span>
    //     <label>Choose a category for your feedback</label>
    //     <select>
    //       {allCategories.map((item) => {
    //         return <option value={item}>{item}</option>;
    //       })}
    //     </select>
    //   </div>
    //   <div className="input-field">
    //     <span>Feedback Detail</span>
    //     <label>
    //       Include any specific comments on what should be improved, added,
    //       etc.
    //     </label>
    //     <textarea rows="5" cols="10"></textarea>
    //   </div>
    //   <div className="btn-container">
    //     <Link to="/">
    //       <button type="button" className="cancel-btn">
    //         Cancel
    //       </button>
    //     </Link>

    //     <button className="add-feedback">Add Feedback</button>
    //   </div>
    // </FormContainer>
  );
};

export default AddFeedback;

const FormContainer = styled.form`
  padding: 4rem;
  max-width: 54rem;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 4rem;
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
    justify-content: flex-end;
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;
