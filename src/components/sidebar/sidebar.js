import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

import { useGlobalContext } from "../../context";
import "./sidebar.css";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      id="sidebar"
    >
      <div>
        <button onClick={closeSidebar} className="close-btn" id="close-btn">
          <i className="fas fa-times">
            <FaTimes />
          </i>
        </button>

        <ul className="sidebar-links">
          <li>
            <Link onClick={closeSidebar} to="/">
              home
            </Link>
          </li>
          <li>
            <Link onClick={closeSidebar} to="about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeSidebar} to="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={closeSidebar} to="contact">
              Contact
            </Link>
          </li>
        </ul>

        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
