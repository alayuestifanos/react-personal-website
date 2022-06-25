import React from "react";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./navbar.css";
import { useGlobalContext } from "../../context";

const NavBar = () => {
  const { openSidebar} = useGlobalContext();
  return (
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img></img>
          <button
            onClick={openSidebar}
            className="nav-btn"
            id="nav-btn"
          >
            <i className="fas fa-bars">
              <FaBars />
            </i>
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
