import styled from "styled-components";
import React, { useContext } from "react";
import { PrimaryButton } from "../../Button";
import { useState } from "react";
import DataContext from "../../../contexts/dataContext";
import Textarea from "../../core/shared/Textarea";

function AddComment({ requestId }) {
  const { dispatch } = useContext(DataContext);

  const [commentInput, setCommentInput] = useState("");
  const [error, setError] = useState(false);
  function submitForm() {
    setCommentInput("");
  }

  function changeInput(e) {
    if (e.target.value.length > 250) {
      setError(true);
      return;
    } else {
      setCommentInput(e.target.value);
      setError(false);
    }
  }

  return (
    <AddCommentStyled hasError={error}>
      <h2>Add Comment</h2>
      <Textarea
        placeholder="Add comment..."
        value={commentInput}
        onChange={changeInput}
      />
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
