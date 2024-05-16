import React from "react";
import Service_three from "../../assets/service-three.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <div className="title-col1">
          <h1 id="theq">About</h1>
          {/* <button className="btn">View All Services</button> */}
        </div>
      </div>
      <div className="row2">
        <div className="about-col1">
          <h1>Features</h1>
          <ul>
            <li>Skilled and experienced gardeners</li>
            <li>Wide range of gardening services offered</li>
            <li>Attention to detail in every task</li>
            <li>Affordable prices</li>
            <li>Flexible scheduling options</li>
          </ul>
        </div>
        <div className="about-col2">
          <h1>Benefits</h1>
          <ul>
            <li>
              Experienced and knowledgeable gardeners ready to tackle any
              gardening project with ease.
            </li>
            <li>
              Hassle-free gardening services that take care of all your
              gardening needs, from planting to pruning.
            </li>
            <li>
              Transform your outdoor space into a beautiful and lush garden,
              adding value to your property.
            </li>
            <li>
              Save time and energy by letting our skilled gardeners handle all
              the hard work, so you can sit back and enjoy your garden.
            </li>
            <li>
              Affordable and competitive pricing options to fit any budget,
              without compromising on quality.
            </li>
          </ul>
        </div>
        <div className="about-col3">
          <img src={Service_three} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
