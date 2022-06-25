import React from "react";

import "./home-page.css";
import AboutPage from "../about-page/about-page";
import Service from "../../components/service/service";
import Header from "../../components/header/header";
import Skills from "../../components/skiils/skills";
import Project from "../../components/project/project";
import SideBar from "../../components/sidebar/sidebar";

const HomePage = () => {
  return (
    <>
      <Header />
      <SideBar />
      <AboutPage />
      <Service />
      <Project />
      <Skills />
    </>
  );
};

export default HomePage;
