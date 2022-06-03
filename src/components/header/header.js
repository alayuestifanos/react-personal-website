import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import HeroImage from "../../assets/images/hero-image.jpg";

import "./header.css";

const Header = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>i'm alayu</h1>
          <h4>freelance web & mobile App Developer</h4>
          <Link to="contact" className="btn hero-btn">
            hire me
          </Link>

          <ul className="social-icons hero-icons">
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
              <a
                href="https://www.twitter.com"
                className="social-icon"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="social-icon"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alayuestifanos"
                className="social-icon"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </article>
        <article className="hero-img">
          <div className="heros">
            <img src={HeroImage} className="hero-photo" alt="Alayu" />
          </div>
        </article>
      </div>
    </header>
  );
};
export default Header;
