import React, { useState } from "react";
import { withRouter } from "react-router-dom";

//Special Icons
import { ArrowRight } from "react-feather";
import { Menu } from "react-feather";

// Specialized Link
import UnstyledLink from "./UnstyledLink";

//import the styling
import "./Navigation.scss";

function Navigation(props) {
  // set the state for the click ability of the hamberger menu
  const [menuClick, setMenuClick] = useState(false);
  return (
    <nav className="navigation">
      {props.location.pathname.includes("/share") ? (
        <ul className="menu-click">
          <ArrowRight
            size={30}
            className="mobile-x"
            onClick={() => setMenuClick(false)}
          />
          <UnstyledLink to={{ pathname: "/share" }} name="Culture" />
          <UnstyledLink to={{ pathname: "/products/share" }} name="Products" />
        </ul>
      ) : (
          <ul className={menuClick ? "menu-click" : ""}>
          <ArrowRight
            size={30}
            className="mobile-x"
            onClick={() => setMenuClick(false)}
          />
          <UnstyledLink to={{ pathname: "/culture" }} name="Culture" />
          <UnstyledLink to={{ pathname: "/product" }} name="Products" />
          <UnstyledLink to={{ pathname: "/business" }} name="Business" />
          <UnstyledLink to={{ pathname: "/training" }} name="Training" />
        </ul>
      )}
      <Menu size={30} className="mobile-menu" onClick={() => setMenuClick(true)}/>
    </nav>
  );
}

export default withRouter(Navigation);
