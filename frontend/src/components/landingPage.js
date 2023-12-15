import React from "react";
import Background from "./background";

import About from "./About";

import Hero from "./hero";

const LandingPage = () => {
  return (
    <div className="text-white">
      <Background />
      <About />
      <Hero />
    </div>
  );
};
export default LandingPage;
