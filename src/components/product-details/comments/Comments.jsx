import React from "react";
import Comment from "./Comment";

function Comments({ comments }) {
  console.log(comments);
  return (
    <>
      {comments?.map((comment) => (
        <Comment {...comment} />
      ))}
    </>
  );
}

export default Comments;
