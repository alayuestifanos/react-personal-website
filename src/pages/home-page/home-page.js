import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./home-page.css";
import NavBar from "../../components/navbar/navbar";
import HeroImage from "../../assets/images/hero-image.jpg";
import AboutPage from "../about-page/about-page";

const HomePage = () => {
  return (
    <>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>i'm alayu</h1>
            <h4>freelance web & mobile UI/UX Designer</h4>
            <Link to="contact" className="btn hero-btn">
              hire me
            </Link>

            <ul className="social-icons hero-icons">
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
          </article>
          <article className="hero-img">
            <img src={HeroImage} className="hero-photo" alt="john doe" />
          </article>
        </div>
      </header>
      <AboutPage />
    </>
  );
};

export default HomePage;
