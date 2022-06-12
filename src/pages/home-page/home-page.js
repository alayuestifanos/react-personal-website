import React from "react";
import { Link } from "react-router-dom";

import "./home-page.css";
import NavBar from "../../components/navbar/navbar";
import HeroImage from "../../assets/images/hero-image.jpg";

const HomePage = () => {
  return (
    <header class="hero">
      <div class="section-center hero-center">
        <article class="hero-info">
          <div class="underline"></div>
          <h1>i'm alayu</h1>
          <h4>freelance web & mobile UI/UX Designer</h4>
          <Link to="contact" class="btn hero-btn">
            hire me
          </Link>

          <ul class="social-icons hero-icons">
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </article>
        <article class="hero-img">
          <img src={HeroImage} class="hero-photo" alt="john doe" />
        </article>
      </div>
    </header>
  );
};

export default HomePage;
