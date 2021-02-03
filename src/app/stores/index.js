import { types } from "mobx-state-tree";
import axios from "axios";

import PostStore from "./PostStore";

export function createStore() {
  const Store = types.model("Store", {
    postStore: PostStore,
  });

  const store = Store.create(
    {
      postStore: {},
    },
    axios
  );

  return store;
}
