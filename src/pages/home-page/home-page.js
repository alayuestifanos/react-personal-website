import React from "react";

import "./home-page.css";
import AboutPage from "../about-page/about-page";
import Service from "../../components/service/service";
import Header from "../../components/header/header";
import Skills from "../../components/skiils/skills";

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutPage />
      <Service />
      <Skills />
    </>
  );
};

export default HomePage;
