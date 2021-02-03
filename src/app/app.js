import React from "react";

import { Router } from "react-router-dom";
import { Provider } from "mobx-react";

import history from "./history";
import Routes from "./routes";
import { createStore } from "./stores";

import "./styles";
import Navigation from "./components/Navigation";

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Navigation />
        <main className="has-background-light main">
          <section className="container px-3 py-5">
            <Routes />
          </section>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
