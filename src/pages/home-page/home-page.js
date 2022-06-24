import React from "react";

import "./home-page.css";
import AboutPage from "../about-page/about-page";
import Service from "../../components/service/service";
import Header from "../../components/header/header";
import Skills from "../../components/skiils/skills";
import Project from "../../components/project/project";


const HomePage = () => {
  return (
    <>
      <Header />
      
      <AboutPage />
      <Service />
      <Project />
      <Skills />
    </>
  );
};

export default HomePage;
