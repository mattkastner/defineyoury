import React from "react";
import Navigation from "./navigation/Navigation";

import { Redirect, withRouter } from "react-router-dom";

import './Header.scss'

function Header(props) {
  if (props.location.pathname === '/') {
    return <Redirect to={"/culture"} />
  }
  return (
    <header className="header__nav">
      <div className="nav__container">
        <h2 className="title">UGeneration</h2>
        <Navigation />
      </div>
    </header>
  );
}

export default withRouter(Header);
