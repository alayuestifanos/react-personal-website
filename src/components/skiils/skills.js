import React, { useState } from "react";

import "./skills.css";
import { frontendSkills, backendSkills, mobileSkills } from "./skills-data";

const Skills = () => {
  const [frontend, setFrontend] = useState(frontendSkills);
  const [backtend, setBackend] = useState(backendSkills);
  const [mobile, setMobile] = useState(mobileSkills);

  return (
    <section className="section skills">
      <div className="section-title">
        <h2>skills</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center skills-center">
        {frontend.map((skill) => {
          return (
            <article key={skill.id}>
              <h3>{skill.title}</h3>
              {skill.courses.map((course, index) => {
                return (
                  <div className="skill" key={index}>
                    <p>{course.courseName}</p>
                    <div className="skill-container">
                      <div
                        className={`skill-value value-${course.value}`}
                      ></div>
                      <p className="skill-text skill-text-70">
                        {`${course.value}%`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </article>
          );
        })}

        {backtend.map((skill) => {
          return (
            <article key={skill.id}>
              <h3>{skill.title}</h3>
              {skill.courses.map((course, index) => {
                return (
                  <div className="skill" key={index}>
                    <p>{course.courseName}</p>
                    <div className="skill-container">
                      <div
                        className={`skill-value value-${course.value}`}
                      ></div>
                      <p className="skill-text skill-text-70">
                        {`${course.value}%`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </article>
          );
        })}
        {mobile.map((skill) => {
          return (
            <article key={skill.id}>
              <h3>{skill.title}</h3>
              {skill.courses.map((course, index) => {
                return (
                  <div className="skill" key={index}>
                    <p>{course.courseName}</p>
                    <div className="skill-container">
                      <div
                        className={`skill-value value-${course.value}`}
                      ></div>
                      <p className="skill-text skill-text-70">
                        {`${course.value}%`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
