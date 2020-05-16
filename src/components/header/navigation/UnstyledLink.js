import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./UnstyledLink.scss";

function UnstyledLink(props) {
  return (
    <Link to={props.to} style={{ textDecoration: "none", position: "relative" }}>
      <li className="nav-link">
        {props.name}
      <div className={
          props.location.pathname.includes(props.name.toLowerCase())
            ? "nav-indicator underline"
            : "nav-indicator"
        }></div>
      </li>
    </Link>
  );
}

export default withRouter(UnstyledLink);
