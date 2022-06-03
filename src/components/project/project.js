import React from "react";

import "./project.css";
import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/2.jpg";
import Image3 from "../../assets/images/3.jpg";
import Image4 from "../../assets/images/4.jpg";

const Project = () => {
  return (
    <section className="section projects">
      <div className="section-title">
        <h2>latest works</h2>
        <div className="underline"></div>
        <p className="projects-text">
          I am constantly exploring new technologies and methodologies to solve
          complex problems and improve the performance, scalability, and
          security of software systems.Currently, I focused on developing mobile
          and web applications.
        </p>
      </div>

      <div className="section-center projects-center">
        <a href="projects.html" className="project-1">
          <article className="project">
            <img src={Image1} alt="single project" className="project-img" />
            <div className="project-info">
              <h4>Vuejs and Nodejs</h4>
              <p>Home Rental</p>
            </div>
          </article>
        </a>

        <a href="projects.html" className="project-2">
          <article className="project">
            <img src={Image2} alt="single project" className="project-img" />
            <div className="project-info">
              <h4>Flutter with Nodejs</h4>
              <p>Religious Daily Schedule Notifier</p>
            </div>
          </article>
        </a>

        <a href="projects.html" className="project-3">
          <article className="project">
            <img src={Image3} alt="single project" className="project-img" />
            <div className="project-info">
              <h4>HTML/CSS</h4>
              <p>Stripe landing page clone</p>
            </div>
          </article>
        </a>

        <a href="projects.html" className="project-4">
          <article className="project">
            <img src={Image4} alt="single project" className="project-img" />
            <div className="project-info">
              <h4>React</h4>
              <p>Personal Website</p>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
};

export default Project;
