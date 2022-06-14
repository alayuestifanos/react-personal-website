import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
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

      <p>
        &copy; <span id="date"></span> Alayu Estifanos. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
