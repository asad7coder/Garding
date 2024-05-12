import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <h1>Subscribe to Newsletter</h1>
      <p>
        Enter your email address to register to our newsletter subscription!
      </p>
      <input type="text" placeholder="Email Address" />
      <br />
      <button className="btn subscribe-btn">Send</button>
    </div>
  );
};

export default Subscribe;
