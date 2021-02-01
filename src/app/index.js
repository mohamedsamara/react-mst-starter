import "core-js";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

const rootElement = document.getElementById("root");

ReactDOM.render(<div>Hello React!</div>, rootElement);
