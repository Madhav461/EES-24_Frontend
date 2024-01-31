// import "./navHero.css"
import "./hero.css";
import React from "react";
import Icon from "./Icon";
import { useScramble } from "use-scramble";
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import AnimatedTextWord from "./AnimatedTextWord";
// const title_word="Currents of Creativity, Voltage of Vision: Electrify the Future!";
const title_word = "Innovate. Inspire . Ignite . Greetings , Electronics Engineers. To the fest beyond imagination! ! ! ";
const Hero = () => {
  const [sample, setSample] = React.useState(title_word);

  const params = {
    overdrive: false,
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 14,
    seed: 2,
    chance: 0.81,
    overflow: false,
  };

  const { ref, replay } = useScramble({
    text: sample,
    ...params,
  });
  // const { ref, replay } = useScramble({ text: 'your_text' });

  // return <p ref={ref} onclick={replay} />;
  // const { hero_title,replay } = useScramble({
  //   text: 'Achilles next, that nimble runner, swift on his feet as the wind',
  //   speed: 0.6,
  //   tick: 1,
  //   step: 1,
  //   scramble: 4,
  //   seed: 0,
  // });

  return (

    <div className="h-auto w-screen ">
      <div id="hero_container" className=" border-solid mt-[26px] border-white">
        {/* <div className="glow-text "><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={30} className="marquee_container border-y-2 border-solid border-white"><p class="marquee"><AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *"></AnimatedTextCharacter></p></Marquee></div> */}
        <div className="glow-text "><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={30} className="marquee_container border-y-2 border-solid border-white"><div class="marquee"><AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *"></AnimatedTextCharacter></div></Marquee></div>
      {/* <div className="glow-text "><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={30} className="marquee_container border-solid border-white border-y-2"><p class="marquee" className="marquee-font font-michroma text-white "><AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETETIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *"></AnimatedTextCharacter></p></Marquee></div> */}

        <div className="container">
          <div className="p1">
            <div className="text">
              Currents of Creativity, Voltage of Vision: Electrify the Future!
            </div>
          </div>

          <div className="logo hover:scale-110 duration-300"><a href='/' > <Icon></Icon> </a></div>
          
          <div className="p2">
            <div>
              <p ref={ref}></p>
            </div>
          </div>

          <div class="tatvaa_container hover:scale-110 duration-300">
            <img className="tatva_card w-[100%]" src="tatvaa.svg" alt="tatva-card"></img>
          </div>

        </div>




      </div>

    </div>
  );
};

export default Hero;
