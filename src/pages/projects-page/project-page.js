import React from "react";
import { FaHome } from "react-icons/fa";

import "./project-page.css";
import AboutImage from "../../assets/images/about.jpeg";

const ProjectPage = () => {
  return (
    <>
      <header class="projects-hero">
        <div class="section-title">
          <h1>my projects</h1>
          <div class="underline"></div>
        </div>
      </header>
      <section class="section">
        <div class="section-center projects-page-center">
          <article class="single-project">
            <div class="project-container">
              <img src={AboutImage} alt="single project" />
              <a href="#" class="project-icon">
                <FaHome />
              </a>
            </div>
            <div class="project-details">
              <h4>project name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                eveniet amet odit aperiam, provident cum possimus sapiente minus
                quos! Ipsum?
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a href="https://www.github.com">source code</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
