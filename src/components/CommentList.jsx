import React from "react";
import SingleComment from "./SingleComment";

function CommentList({ comments }) {
  console.log(comments)
  return (
    <div>
      {comments.map(comment => <SingleComment key={}/>)}
    </div>
  );
}
export default CommentList;
