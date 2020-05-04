import { Redirect, withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";

// components
import Navigation from "./navigation/Navigation";

// styles
import "./Header.scss";

function Header(props) {
  // set the state for the scroll ability
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (props.location.pathname === "/") {
    return <Redirect to={"/culture"} />;
  }
  return (
    <header
      className={scrollPosition > 40 ? "header__nav" : "header__nav"}
    >
      <div className="nav__container">
        <h2 className="title">UGeneration</h2>
        <Navigation />
      </div>
    </header>
  );
}

export default withRouter(Header);
