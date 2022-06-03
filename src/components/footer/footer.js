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
          <a
            href="https://www.facebook.com/alayu.rossa/"
            className="social-icon"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alayu-estifanos-a32997221/"
            className="social-icon"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" className="social-icon" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" className="social-icon"target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/alayuestifanos" className="social-icon"target="_blank">
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
