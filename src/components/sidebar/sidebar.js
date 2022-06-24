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

import "./sidebar.css";
const SideBar = () => {
  return (
    <aside className="sidebar show-sidebar" id="sidebar">
      <div>
        <button className="close-btn" id="close-btn">
          <i className="fas fa-times">
            <FaTimes />
          </i>
        </button>

        <ul className="sidebar-links">
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
