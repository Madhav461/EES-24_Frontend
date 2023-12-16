import React from "react";
import Background from "./background";
import About from "./About";
import Hero from "./hero";
import Navhome from "./navhome";

const LandingPage = () => {
  return (
    <div className="text-white absolute">

      <Background />
      <Navhome />
      <Hero />
      <About />

      
    </div>
  );
};
export default LandingPage;
