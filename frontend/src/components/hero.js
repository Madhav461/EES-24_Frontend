// import "./navHero.css"
import "./hero.css";
import Icon from "./Icon";
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import AnimatedTextWord from "./AnimatedTextWord";
const Hero = () => {
  return (
    <div className="h-auto w-screen ">
      <div id="hero_container" className=" border-solid border-white ">
        <div className="glow-text"><Marquee className="marquee_container"><p class="marquee"><AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *"></AnimatedTextCharacter></p></Marquee></div>
      
    <div className="container z-0 m-auto overflow-hidden">
      
      
      <div className="p1">
      
        <div className="text">

          Currents of Creativity, Voltage of Vision: Electrify the Future!
        </div>
        
      </div>
      
      <div className="logo"><Icon></Icon></div>
      <div className="p2">
        <div>

          Greetings. Electronics Engineers. To the fest beyond imagination!
        </div>
        
        
      </div>
      
      
    </div>
    
    
    </div>
    </div>
  );
};

export default Hero;
