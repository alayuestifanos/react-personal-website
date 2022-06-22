import React from "react";
import { Link } from "react-router-dom";

import "./about-page.css";
import AboutImage from "../../assets/images/about.jpeg";

const AboutPage = () => {
  return (
    <section className="section about">
      <div className="section-center about-center">
        <article className="about-img">
          <div className="abouts">
            <img src={AboutImage} className="hero-photo" alt="about img" />
          </div>
        </article>
        <article className="about-info">
          <div className="section-title about-title">
            <h2>about</h2>
            <div className="underline"></div>
          </div>
          <p>
            My name is Alayu Estifanos.I am a very diligent worker. I put work
            on what I have to. I will not stop when I face obstacles. Rather, it
            will encourage me to do more research on it and try to figure it
            out, to overcome it. I don't only focus on getting the function
            working but also making sure it is in the most effective and fastest
            way possible.
          </p>
          <p>
            I'm a fast learner and adaptive. It takes me a few hours to get used
            to new technology. Also, I'm very good at collaboration work. I'd be
            the perfect fit for big projects which involve teamwork. I have
            worked on Flutter, React Native, Angular , Android, React, and
            NodeJS projects. Developed several Android applications and web
            applications. 
          </p>
          <Link to="about" className="btn">
            about me
          </Link>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
