import { Redirect, withRouter, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

// components
import Navigation from "./navigation/Navigation";

// styles
import "./Header.scss";

function Header(props) {
  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
  }, []);
  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("header__height__min");
    } else {
      headerEl.classList.remove("header__height__min");
    }
  };

  if (props.location.pathname === "/") {
    return <Redirect to={"/culture"} />;
  }

  return (
    <header id="header" className={"header__nav"}>
      <div className="nav__container">
        <Link to="/" className="title">
          Define Youry
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default withRouter(Header);
