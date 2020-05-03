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
          <UnstyledLink to={{ pathname: "/products/share" }} name="Products" />
        </ul>
      ) : (
        <ul>
          <UnstyledLink to={{ pathname: "/culture" }} name="Culture" />
          <UnstyledLink to={{ pathname: "/products" }} name="Products" />
          <UnstyledLink to={{ pathname: "/business" }} name="Business" />
          <UnstyledLink to={{ pathname: "/training" }} name="Training" />
        </ul>
      )}
    </nav>
  );
}

export default withRouter(Navigation);
