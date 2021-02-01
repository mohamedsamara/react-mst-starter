import loadable from "@loadable/component";

export const LoadableHome = loadable(() => import("../pages/Homepage"));

export const LoadableNotFoundPage = loadable(() => import("../pages/Page404"));
