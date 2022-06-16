import React from "react";

import "./home-page.css";
import AboutPage from "../about-page/about-page";
import Service from "../../components/service/service";
import Header from "../../components/header/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutPage />
      <Service />
    </>
  );
};

export default HomePage;
