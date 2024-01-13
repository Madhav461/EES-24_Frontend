import React from "react";
import Background from "./background";
import About from "./About";
import Hero from "./hero";
import Navhome from "./navhome";
import Schedule from "./Schedule";
import Footer from "./Footer";
import SponsorsFull from "./Sponsors";

import Faq from "./faq";

import Speaker from "./Speaker";

const LandingPage = () => {
  return (
    <div className="flex flex-col  w-full h-full text-white  ">

      <Background />
      <Navhome />
      <Hero />
      <About />
      <Schedule />
      <SponsorsFull></SponsorsFull>
      {<Speaker></Speaker>}
      <Faq/>

      

      < Footer />

      
    </div>
  );
};
export default LandingPage;
