import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h1>Green line laborer</h1>
        <ul>
          <li>
            <Link to="hero" smooth={true} offset={-400} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} offset={-98} duration={500}>
              Service
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-100} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="team" smooth={true} offset={-110} duration={500}>
              Team
            </Link>
          </li>
          <li>
            {" "}
            <button className="btn">
              <Link to="subscribe" smooth={true} offset={-100} duration={500}>
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
