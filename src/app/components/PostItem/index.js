import React from "react";

const PostItem = ({ post, deletePost }) => {
  return (
    <div className="box">
      <h3 className="title is-4">{post.title}</h3>
      <p className="subtitle is-5">{post.body}</p>
      <button className="button is-danger" onClick={() => deletePost(post)}>
        Delete
      </button>
    </div>
  );
};

export default PostItem;
