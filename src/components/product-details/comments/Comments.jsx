import React from "react";
import Comment from "./Comment";

function Comments({ comments }) {
  return (
    <>
      {comments?.map((comment) => (
        <Comment {...comment} />
      ))}
    </>
  );
}

export default Comments;
