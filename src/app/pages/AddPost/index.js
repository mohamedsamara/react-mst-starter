import React, { useState } from "react";

import { observer } from "mobx-react";

import useStore from "../../stores/useStore";

const AddPost = observer(() => {
  const store = useStore();
  const [post, setPost] = useState({
    title: "",
    post: "",
  });

  const handleOnChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.postStore.addPost(post);

    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <h4 className="title is-4">Add Post</h4>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Title"
            name="title"
            value={post.title}
            onChange={handleOnChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Body</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Body"
            name="body"
            value={post.body}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  );
});

export default AddPost;
