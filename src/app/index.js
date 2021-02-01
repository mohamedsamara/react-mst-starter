import "core-js";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
