import React from "react";

const Post = (props) => {
  return (
    <div>
      <h3>ID: {props.id}</h3>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
};
export default Post;
