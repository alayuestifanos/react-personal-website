import React from "react";
import { FaHome } from "react-icons/fa";

import "./project-page.css";
import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/2.jpg";
import Image3 from "../../assets/images/3.jpg";
import Image4 from "../../assets/images/4.jpg";

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
              <img src={Image4} alt="single project" />
              <a href="#" class="project-icon">
                <FaHome />
              </a>
            </div>
            <div class="project-details">
              <h4>Religious Daily Schedule Notifier</h4>
              <p>
                Religious Daily Schedule Notifier is an app that can notify its
                subscribers whenever the representative of that holy place posts
                their daily programs. functionalities: CRUD on schedule CRUD on
                subscription. Authentication and Authorization.It is done by
                using clean architecture and using bloc for state managment
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a
                  href="https://github.com/alayuestifanos/Advanced-Mobile-Programming-Final-Project"
                  target="_blank"
                >
                  source code
                </a>
              </div>
            </div>
          </article>
          <article class="single-project">
            <div class="project-container">
              <img src={Image3} alt="single project" />
              <a href="#" class="project-icon">
                <FaHome />
              </a>
            </div>
            <div class="project-details">
              <h4>Home Rental</h4>
              <p>
                Home Renting and Selling online application which can also shows
                the distribution of living houses and apartments in the country.
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a
                  href="https://github.com/alayuestifanos/Design-Pattern-Home_Rental-website"
                  target="_blank"
                >
                  source code
                </a>
              </div>
            </div>
          </article>
          <article class="single-project">
            <div class="project-container">
              <img src={Image2} alt="single project" />
              <a href="#" class="project-icon">
                <FaHome />
              </a>
            </div>
            <div class="project-details">
              <h4>peronal website</h4>
              <p>
                This personal website developed using React is a modern and
                dynamic way to showcase my skills, and interests to the world.I
                use react for building user interfaces because React allows for
                building interactive and responsive user interfaces for web
                applications.
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a
                  href="https://github.com/alayuestifanos/react-personal-website"
                  target="_blank"
                >
                  source code
                </a>
              </div>
            </div>
          </article>
          <article class="single-project">
            <div class="project-container">
              <img src={Image2} alt="single project" />
              <a href="#" class="project-icon">
                <FaHome />
              </a>
            </div>
            <div class="project-details">
              <h4>Stripe Landing Papge Clone</h4>
              <p>
                A Stripe clone web created using HTML and CSS is a project that
                involves replicating the visual design and layout of Stripe's
                website, which is a popular payment processing platform, in the
                form of a web app. The user interface is created by using HTML
                and CSS code, which would define the structure of the app's
                pages and the visual appearance of the various elements. The app
                would be designed to be fully responsive, meaning it can adapt
                to different screen sizes and devices.
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a
                  href="https://github.com/alayuestifanos/stripe-landing-page"
                  target="_blank"
                >
                  source code
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
