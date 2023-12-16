import React from "react";
import Background from "./background";

import About from './About'; 

import Hero from "./hero";
import Navhome from "./navhome";


const LandingPage = () => {
  return (
    <div className="text-white absolute">
       <Navhome/>
      <Background />
     

      <Hero />
      {/* <About className="relative" /> */}

      
      {/* <h1 className="text-white text-center text-2xl">EES hehe</h1> */}

    </div>
  );
};
export default LandingPage;
