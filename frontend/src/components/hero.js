// import "./navHero.css"
import "./hero.css";
import Icon from "./Icon";
const Hero = () => {
  return (
    <div className="container z-0 m-auto">
      <div className="p1">
        <div className="text">
          {/* Keep the content that you want here */}
          Currents of Creativity, Voltage of Vision: Electrify the Future!
        </div>
      </div>
      {/* <img className="logo w-[100%] h-[100%]" src="ees_logo_1.svg" alt="EES Logo" /> */}
      <Icon></Icon>
      <div className="p2">
        <div>
          {/* Keep the content that you want here */}
          Greetings. Electronics Engineers. To the fest beyond imagination!
        </div>
      </div>
    </div>
  );
};

export default Hero;
