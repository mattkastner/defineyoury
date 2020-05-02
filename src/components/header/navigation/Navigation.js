import React from "react";
import { withRouter } from "react-router-dom";

// Specialized Link
import UnstyledLink from "./UnstyledLink";

//import the styling
import "./Navigation.scss";

function Navigation(props) {
  return (
    <nav className="navigation">
      {props.location.pathname.includes("/share") ? (
        <ul>
          <UnstyledLink to={{ pathname: "/share" }} name="Culture" />
          <UnstyledLink to={{ pathname: "/products/share" }} name="products" />
        </ul>
      ) : (
        <ul>
          <UnstyledLink to={{ pathname: "/culture" }} name="culture" />
          <UnstyledLink to={{ pathname: "/products" }} name="products" />
          <UnstyledLink to={{ pathname: "/business" }} name="business" />
          <UnstyledLink to={{ pathname: "/training" }} name="training" />
        </ul>
      )}
    </nav>
  );
}

export default withRouter(Navigation);
