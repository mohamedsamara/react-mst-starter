import loadable from "@loadable/component";

export const LoadableHome = loadable(() => import("../pages/Homepage"));

export const LoadablePosts = loadable(() => import("../pages/Posts"));

export const LoadableAddPost = loadable(() => import("../pages/AddPost"));

export const LoadableNotFoundPage = loadable(() => import("../pages/Page404"));
