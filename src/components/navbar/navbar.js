import React from "react";

import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-btn" id="nav-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
