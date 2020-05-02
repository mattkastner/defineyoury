// React specific components
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

// Styling imports
import "reset-css";
import "./utilities/style.scss";

// Components
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
