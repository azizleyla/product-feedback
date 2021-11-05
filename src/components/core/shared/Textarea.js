import React from "react";
import styled from "styled-components";

// const Textarea = ({ placeholder }) => {
//   return (
//     <TextareaInput
//       placeholder={placeholder}
//       name=""
//       id=""

//     ></TextareaInput>
//   );
// };

const Textarea = styled.textarea`
  width: 100%;
  padding: 16px 24px 42px 24px;
  background: #f7f8fd;
  ${(props) =>
    props.hasError
      ? "border: 1px solid #f13636;"
      : "border: 1px solid #4661e6;"}

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
`;
export default Textarea;
