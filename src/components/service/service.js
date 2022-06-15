import React, { useState } from "react";

import "./service.css";
import services from "./service-data";
const Service = () => {
  const [service, setService] = useState(services);
  return (
    <section className="section bg-grey">
      <div className="section-title">
        <h2>services</h2>
        <div className="underline"></div>
      </div>

      <div className="services-center section-center">
        {service.map(({ id, icon, title, description }) => {
          return (
            <article className="service" key={id}>
              <i className={`fab ${icon} service-icon`}></i>
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
