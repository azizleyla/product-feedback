import styled from "styled-components";
import React, { useContext } from "react";
import { PrimaryButton } from "../../Button";
import { useState } from "react";
import DataContext from "../../../contexts/dataContext";
import AuthContext from "../../../contexts/authContext";

function AddComment({ requestId }) {
  const { addComment } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  const [commentInput, setCommentInput] = useState("");

  function submitForm() {
    addComment({ content: commentInput }, requestId);
    setCommentInput("");
    console.log(user.token);
  }

  return (
    <AddCommentStyled>
      <h2>Add Comment</h2>
      <textarea
        placeholder="Can't wait for dark mode!"
        name=""
        id=""
        cols="30"
        rows="3"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
      ></textarea>
      <AddCommentFooter>
        <p>
          <span>{250 - commentInput.length}</span> characters left
        </p>
        <PrimaryButton onClick={submitForm}>Post Comment</PrimaryButton>
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
  textarea {
    width: 100%;
    padding: 16px 24px 42px 24px;
    background: #f7f8fd;
    border: 1px solid #4661e6;
    border-radius: 5px;
    resize: none;
    outline: none;
    font-weight: normal;
    font-size: 15px;
    &:hover {
      background: #f7f8fd;
    }
    &::placeholder {
      font-family: inherit;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;
      color: #3a4374;
    }
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
