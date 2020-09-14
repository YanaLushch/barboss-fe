import "./styles.scss";

import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";

import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
import Framework7React from 'framework7-react';

import Root from "./pages/Root";
import stores from "./stores";

Framework7.use(Framework7React);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
