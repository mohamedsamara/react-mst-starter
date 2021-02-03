import React, { useEffect } from "react";

import { observer } from "mobx-react";

import useStore from "../../stores/useStore";
import AddPost from "../AddPost";
import PostItem from "../../components/PostItem";

const Posts = observer(() => {
  const store = useStore();

  useEffect(() => {
    store.postStore.fetchPosts();
  }, []);

  const posts = Array.from(store.postStore.posts);

  const toggleModal = (e) => {
    const modal = document.querySelectorAll(".modal")[0];
    modal.classList.toggle("is-active");
  };

  return (
    <>
      <div className="is-flex is-justify-content-space-between align-items-center mb-3">
        <span className="tag is-primary is-light mb-2">
          {`There are ${store.postStore.postsCount} posts.`}
        </span>
        <button className="button is-black" onClick={toggleModal}>
          Add Post
        </button>
      </div>

      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          deletePost={store.postStore.deletePost}
        />
      ))}

      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <AddPost />
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={toggleModal}
        ></button>
      </div>
    </>
  );
});

export default Posts;
