import React from "react";

import { Route, Switch } from "react-router-dom";

import { LoadableHome, LoadableNotFoundPage } from "./routes";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <LoadableHome />
    </Route>
    <Route>
      <LoadableNotFoundPage />
    </Route>
  </Switch>
);

export default Routes;
