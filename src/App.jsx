import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import HCustomers from "./Components/HCustomers/HCustomers";
import Subscribe from "./Components/Subscribe/Subscribe";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <hr />
      <Services />
      <hr />
      <About />
      <hr />
      <Team />
      <hr />

      <HCustomers />
      <hr />
      <Subscribe />
    </>
  );
};

export default App;
