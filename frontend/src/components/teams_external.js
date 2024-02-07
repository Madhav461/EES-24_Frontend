import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import Background from "./background";
import Navhome2 from "./navhome";
const TEAMS_EXTERNAL = () => {

   const handleClick = () => {
      window.location.href = 'url'; 
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const styles = {
      padding: "2%",
      display: "grid",
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: "3%",
      gridAutoRows: "1fr",
    };
  
  
  return (
    <div className="w-100vw h-100vh">
      <Background />
      <Navhome2 />
      <br />
      <br />
      <div className="heading_teams h-[12%] w-[100%] mb-[-1%]  flex justify-center items-center">
       <img className="heading_svg w-[30%]"
        src="/teams_external_heading.svg"
      />
      </div>

      <div className="glow-text ">
        <Marquee
          speed={100}
          gradient={true}
          gradientColor="black"
          gradientWidth={30}
          className="marquee_container border-y-2 border-solid border-white"
        >
          <div class="marquee">
            <AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *RAJAT*"></AnimatedTextCharacter>
          </div>
        </Marquee>
      </div>

      <div className="cards p-1">
      <div className="internal_matter" style={styles}>
      <div className="card1_teams_ext h-auto w-auto relative inline-block transition-all duration-300 ease-in-out transform hover:scale-110">
      <a href="your-target-url" onClick={handleClick}>
        <img
          className="hover_effect card_teams_external filter brightness-110 cursor-pointer hover:shadow-lg"
          src="/teams_external_card.svg"
          alt="Teams External Card"
        /></a>
      </div>
    

    <div className="card1_teams_ext h-auto w-auto relative inline-block transition-all duration-300 ease-in-out transform hover:scale-110">
      <img
        className="hover_effect card_teams_external filter brightness-110 cursor-pointer hover:shadow-lg"
        src="/teams_external_web.svg"
        alt="Teams External Card"
      />
    </div>
    <div className="card1_teams_ext h-auto w-auto relative inline-block transition-all duration-300 ease-in-out transform hover:scale-110">
      <img
        className="hover_effect card_teams_external filter brightness-110 cursor-pointer hover:shadow-lg"
        src="/teams_external_design.svg"
        alt="Teams External Card"
      />
    </div>
    <div className="card1_teams_ext h-auto w-auto relative inline-block transition-all duration-300 ease-in-out transform hover:scale-110">
      <img
        className="hover_effect card_teams_external filter brightness-110 cursor-pointer hover:shadow-lg"
        src="/teams_external_marketing.svg"
        alt="Teams External Card"
      />
    </div>
    <div className="card1_teams_ext h-auto w-auto relative inline-block transition-all duration-300 ease-in-out transform hover:scale-110">
      <img
        className="hover_effect card_teams_external filter brightness-110 cursor-pointer hover:shadow-lg"
        src="/teams_external_publi.svg"
        alt="Teams External Card"
      />
    </div>
    <div className="card1_teams_ext h-auto w-auto relative inline-block transition-all duration-300 ease-in-out transform hover:scale-110">
      <img
        className="hover_effect card_teams_external filter brightness-110 cursor-pointer hover:shadow-lg"
        src="/teams_external_content.svg"
        alt="Teams External Card"
      />
    </div>
    <div className="card1_teams_ext h-auto w-auto relative inline-block transition-all duration-300 ease-in-out transform hover:scale-110">
      <img
        className="hover_effect card_teams_external filter brightness-110 cursor-pointer hover:shadow-lg"
        src="/teams_external_cultural.svg"
        alt="Teams External Card"
      />
    </div>
     


        </div>
      </div>
    </div>
  );
};

export default TEAMS_EXTERNAL;
