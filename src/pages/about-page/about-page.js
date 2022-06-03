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
            I am 5th year software engineering student at Addis Ababa
            University, I have developed a strong foundation in software
            engineering principles and programming skills. In particular, I have
            focused on React and Node.js technologies and have gained practical
            experience through various projects and internships. I'm a fast
            learner and adaptive.
          </p>
          <p>
            I am highly skilled in creating responsive and user-friendly web
            applications using React and Node.js, as well as integrating them
            with various databases and APIs. Furthermore, I am an adaptable and
            collaborative team player who thrives in fast-paced environments.
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
