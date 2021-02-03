import { types, flow, getEnv } from "mobx-state-tree";

export const Post = types.model("Post", {
  id: types.number,
  title: types.string,
  body: types.string,
});

const PostStore = types
  .model("PostStore", {
    posts: types.optional(types.array(Post), []),
  })
  .views((self) => ({
    get postsCount() {
      return self.posts.length;
    },
  }))
  .actions((self) => {
    return {
      fetchPosts: flow(function* () {
        const env = getEnv(self);

        const response = yield env.get(
          `https://jsonplaceholder.typicode.com/posts`
        );

        self.posts = response.data;
      }),

      addPost: flow(function* ({ id, title, body }) {
        const env = getEnv(self);

        const post = {
          id: Math.floor(Math.random() * 1000),
          title,
          body,
        };

        yield env.post(`https://jsonplaceholder.typicode.com/posts`, {
          post,
        });

        self.posts.unshift(Post.create(post));
      }),
      deletePost: flow(function* (post) {
        const env = getEnv(self);

        yield env.delete(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`
        );

        self.posts.remove(post);
      }),
    };
  });

export default PostStore;
