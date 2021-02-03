import React from "react";

import { Route, Switch } from "react-router-dom";

import {
  LoadableHome,
  LoadablePosts,
  LoadableAddPost,
  LoadableNotFoundPage,
} from "./routes";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <LoadableHome />
    </Route>
    <Route path="/posts">
      <LoadablePosts />
    </Route>
    <Route path="/post/add">
      <LoadableAddPost />
    </Route>
    <Route>
      <LoadableNotFoundPage />
    </Route>
  </Switch>
);

export default Routes;
