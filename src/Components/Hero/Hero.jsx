import React from "react";
import "./Hero.css";
import list from "../../assets/potal.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <h1>The Gardening Experts at Your Service</h1>
        <p>
          Get your garden looking its best with the skilled and friendly
          gardeners from Green Line Laborer.
        </p>
        <button className="btn">View All Services</button>
      </div>
      <div className="right-hero">
        <img src={list} alt="" />
      </div>
    </div>
  );
};

export default Hero;
