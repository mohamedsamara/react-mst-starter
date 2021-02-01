import React from "react";

import { Router } from "react-router-dom";

import history from "./history";
import Routes from "./routes";

import "./styles";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navigation />
        <main className="container p-3 has-background-light main main-content">
          <Routes />
        </main>
      </Router>
    </>
  );
};

export default App;
