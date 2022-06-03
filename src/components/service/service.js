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
        {service.map(
          ({ id, icon, name, description, serviceList, serviceTitle }) => {
            return (
              <div className="card" key={id}>
                <div className="card-side card-front">
                  <article className="service">
                    <i className={`fab ${icon} service-icon`}>{icon}</i>
                    <h4>{name}</h4>
                    <div className="underline"></div>
                    <p>{description}</p>
                  </article>
                </div>

                <div className="card-side card-back">
                  <p>{serviceTitle}</p>
                  <ul className="service-list">
                    {serviceList.map((service, index) => {
                      return (
                        <li
                          key={index}
                          className="service-item"
                          style={{ paddingLeft: 30 }}
                        >
                          {service}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Service;
