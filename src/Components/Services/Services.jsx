import React from "react";
import "./Services.css";
import Services_box from "./Services-box/Services-box";
const Services = () => {
  return (
    <div className="services">
      <div className="title">
        <div className="title-col1">
          <h1>Our Services</h1>
          <button className="btn">View All Services</button>
        </div>
      </div>
      <div className="services-col2">
        <Services_box />
        <Services_box />
        <Services_box />
      </div>
    </div>
  );
};

export default Services;
