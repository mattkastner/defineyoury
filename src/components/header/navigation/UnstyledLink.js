import React from "react";
import { Link } from "react-router-dom";

export default function UnstyledLink(props) {
  return (
      <Link to={props.to} style={{ textDecoration: "none", color: "black"}}>
          <li>{props.name}</li>
    </Link>
  );
}
