import "./EventsHome.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

import Background from "./background";
import Navhome2 from "./navhome";
import Footer from "./Footer";

const EventsHome = () => {

  let navigate = useNavigate();
  const routeChange = (route) => {
    let path = `/events/${route}`;
    navigate(path);
  }

  return (
    <>
      <Background />
      <Navhome2 />
      <div className="events-home-main">
        <img className="events-home-heading-svg" src="/events-home-heading.svg" alt=""></img>
      </div>
      <div className="glow-text events-home-marquee"><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={30} className="marquee_container border-y-2 border-solid border-white"><div class="marquee"><AnimatedTextCharacter text="UDYAM | | UDGAM | | MASHAL | |  THE EPITOME OF TECHNICAL EXCELLENCE AT IIT BHU"></AnimatedTextCharacter></div></Marquee> </div>
      <div className="events-home-container">
        <div class="events-home-card" onClick={() => routeChange("udyam")}>
          <img className="events-home-svg transition-all duration-300 ease-in-out transform hover:scale-110" src="events-udyam.svg" alt=""></img>
        </div>
        <div class="events-home-card" onClick={() => routeChange("udgam")}>
          <img className="events-home-svg transition-all duration-300 ease-in-out transform hover:scale-110" src="events-udgam.svg" alt=""></img>
        </div>
        <div class="events-home-card" onClick={() => routeChange("mashal")}>
          <img className="events-home-svg transition-all duration-300 ease-in-out transform hover:scale-110" src="events-mashal.svg" alt=""></img>
        </div>
      </div>
      <Footer />
    </>
  );
  // return (
  //   <div className="events-home-container">
  //       <div class="events-home-card" onClick={() => routeChange("udyam")}>
  //         <img className="events-home-svg" src="events-udyam.svg" alt=""></img>
  //       </div>
  //       <div class="events-home-card" onClick={() => routeChange("udgam")}>
  //         <img className="events-home-svg" src="events-udgam.svg" alt=""></img>
  //       </div>
  //       <div class="events-home-card" onClick={() => routeChange("mashal")}>
  //         <img className="events-home-svg" src="events-mashal.svg" alt=""></img>
  //       </div>
  //   </div>
  // );
};

export default EventsHome;