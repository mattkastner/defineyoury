// React specific components
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Styling imports
import "reset-css";
import "./index.scss";

// Components
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
