import React from "react";
import "./HCustomers.css";
import happy from "../../assets/happy.png";
const HCustomers = () => {
  return (
    <div className="hCustomers">
      <div className="hc-left">
        <h1>Happy Customers</h1>
        <p>
          We bring life to your garden with our skilled gardeners and passion
          for creating beautiful outdoor spaces.
        </p>
        <button className="btn hc-btn">View All Testimonial</button>
      </div>
      <div className="hc-right">
        <img src={happy} alt="" />
      </div>
    </div>
  );
};

export default HCustomers;
