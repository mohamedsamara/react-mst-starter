import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
  const toggleMenu = (e) => {
    const navBurger = document.querySelectorAll(".navbar-burger")[0];
    const navMenu = document.querySelectorAll(".navbar-menu")[0];

    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          React MST
        </Link>

        <a
          role="button"
          className="navbar-burger"
          onClick={toggleMenu}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/test2">
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-light" to="/test">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
