// import "./navHero.css"
import "./hero.css";
import Icon from "./Icon";
import Marquee from "react-fast-marquee";
const Hero = () => {
  return (
    <div className="h-screen w-screen">
      <Marquee  className="border-solid  border-teal-300 border-y md:h-[7%] h-[10%] font-bold tracking-widest glow-text"><p class="marquee">EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *</p></Marquee>
    <div className="container z-0 m-auto">
      
      <div className="p1">
      
        <div className="text">
          {/* Keep the content that you want here */}
          Currents of Creativity, Voltage of Vision: Electrify the Future!
        </div>
      </div>
      {/* <img className="logo w-[100%] h-[100%]" src="ees_logo_1.svg" alt="EES Logo" /> */}
      {/* <Icon></Icon> */}
      <div className="logo"><Icon></Icon></div>
      <div className="p2">
        <div>
          {/* Keep the content that you want here */}
          Greetings. Electronics Engineers. To the fest beyond imagination!
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
