import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <ul class="social-icons">
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

      <p>
        &copy; <span id="date"></span> Alayu Estifanos. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
