import React from "react";

import "./project.css";
import AboutImage from "../../assets/images/about.jpeg";

const Project = () => {
  return (
    <section class="section projects">
      <div class="section-title">
        <h2>latest works</h2>
        <div class="underline"></div>
        <p class="projects-text">
          I am constantly exploring new technologies and methodologies to solve
          complex problems and improve the performance, scalability, and
          security of software systems.Currently, I focused on developing mobile
          and web applications.
        </p>
      </div>

      <div class="section-center projects-center">
        <a href="projects.html" class="project-1">
          <article class="project">
            <img src={AboutImage} alt="single project" class="project-img" />
            <div class="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>

        <a href="projects.html" class="project-2">
          <article class="project">
            <img src={AboutImage} alt="single project" class="project-img" />
            <div class="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>

        <a href="projects.html" class="project-3">
          <article class="project">
            <img src={AboutImage} alt="single project" class="project-img" />
            <div class="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>

        <a href="projects.html" class="project-4">
          <article class="project">
            <img src={AboutImage} alt="single project" class="project-img" />
            <div class="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
};

export default Project;
