import React from "react";
import Navigation from "./navigation/Navigation";

import './Header.scss'

function Header(props) {
  return (
    <header className="header__nav">
      <h2 className="title">UGeneration</h2>
      <Navigation />
    </header>
  );
}

export default Header;
