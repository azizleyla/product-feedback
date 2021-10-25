import React from "react";
import Reply from "./Reply";

const Replies = ({ replies }) => {
  return (
    <>
      {replies.map((reply) => {
        return <Reply {...reply} />;
      })}
    </>
  );
};

export default Replies;
