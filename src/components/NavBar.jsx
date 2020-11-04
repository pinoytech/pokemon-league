import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-dark navbar-expand bg-dark">
    <a href="/" className="navbar-brand">
      <img
        src="/images/logo.jpeg"
        width="30"
        height="30"
        className="d-inline-block align-top mr-2"
        alt=""
        loading="lazy"
      />
      Pokemon League
    </a>
  </nav>
);

export default NavBar;
