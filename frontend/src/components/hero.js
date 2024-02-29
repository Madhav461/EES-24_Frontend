// import "./navHero.css"
import "./hero.css";
import React from "react";
import Icon from "./Icon";
import MbEesAnimation from "./MbEesAnimation";
import { useScramble } from "use-scramble";
import {motion} from 'framer-motion';
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import AnimatedTextWord from "./AnimatedTextWord";
import SubTitleTxt from "./Hero_txt/SubTitleTxt";
import SubTitleTxtMB from "./Hero_txt/SubTitleTxtMB";
// const title_word="Currents of Creativity, Voltage of Vision: Electrify the Future!";
const title_word = "Innovate. Inspire. Ignite. Greetings, Electronics Engineers. To the fest beyond imagination !!!";
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

  const { ref1, replay } = useScramble({
    text: sample,
    ...params,
  });

  // const {ref2}=useScramble({
  //   text:sample,
  //   ...params,
  // })
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

    <div className="main_hero h-auto w-screen ">
      <div id="hero_container" className="hero_container1123 border-solid mt-[30px] border-white">
        {/* <div className="glow-text "><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={30} className="marquee_container border-y-2 border-solid border-white"><p class="marquee"><AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *"></AnimatedTextCharacter></p></Marquee></div> */}
        <div className="glow-text "><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={30} className="marquee_container border-y-2 border-solid border-white "><div class="marquee font-michroma text-white"><AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *"></AnimatedTextCharacter></div></Marquee></div>
      {/* <div className="glow-text "><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={30} className="marquee_container border-solid border-white border-y-2"><p class="marquee" className="marquee-font font-michroma text-white "><AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *"></AnimatedTextCharacter></p></Marquee></div> */}

        <div className="container">
          <div className="p1">
            <div className="text">
              Currents of Creativity, Voltage of Vision: Electrify the Future!
            </div>
          </div>

          <div className="logo hover:scale-110 duration-300"><a href='/' > <Icon></Icon> </a></div>
          
          {/* <div className="p2">
            <div>
              <p ref={ref1}></p>
            </div>
          </div> */}
          <div className="p2">
            <SubTitleTxt></SubTitleTxt>
          </div>

          <div class="tatvaa_container hover:scale-110 duration-300">
            <img className="tatva_card w-[100%]" src="tatvaa.svg" alt="tatva-card"></img>
          </div>

        </div>

      </div>

      {/* MOBILE VIEW */}
      <div id="hero_container-mb" className="mb_hero_container border-solid mt-[26px] border-white">
        <div className="glow-text-mb "><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={30} className="marquee_container-mb border-y-2 border-solid border-white"><div class="marquee"><AnimatedTextCharacter text="EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS * EVENTS * WORKSHOPS * COMPETITIONS * LECTURES * STALLS * SPORTS * PERFORMENCES * ARTS *"></AnimatedTextCharacter></div></Marquee></div>

        <div className="container-hero-mb">

          {/* <div className="mb_ees_animation z-100 hover:scale-110 duration-300"><MbEesAnimation></MbEesAnimation></div> */}



          {/* MOBILE VIEW EES LOGO ANIMATION */}


          <motion.div animate={{scale:[0.95,1.1,0.95],opacity:[0.95,1,0.95],x:[0,15,-15,0],y:[-15,15,15,-15]}}
          transition={{
            times:[0,1],
            duration:5,
            repeat:Infinity,
            type:"keyframes",
            ease:"easeInOut",
          }}>
            <img src="ees_logo_2.svg"></img>
          </motion.div>



          {/* <Icon></Icon> */}
          {/* <div className="logo-hero-mb"><Icon></Icon></div> */}
          <div className="ees-hero-mb">
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
              <img className="" src="ees-hero-mb-upper.svg" alt="ees"></img>
            </motion.div>
            <img className="ees-hero-mb-text" src="ees-hero-mb.svg" alt="ees"></img>
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
              <img className="" src="ees-hero-mb-lower.svg" alt="ees"></img>
            </motion.div>
          </div>

          <div className="p1-hero-mb">
            Currents of Creativity, Voltage of Vision: Electrify the Future!
          </div>

          <div className="p2-hero-mb">
            <SubTitleTxtMB></SubTitleTxtMB>
          </div>


          <div class="tatvaa_container-mb hover:scale-110 duration-300">
            <img className="tatva_card w-[100%]" src="tatvaa.svg" alt="tatva-card"></img>
          </div>

          <div class="hero-mb-cardDesign hover:scale-110 duration-300">
            <img className="hero-mb-cardDesign-img" src="hero-mb-cardDesign-img.svg" alt=""></img>
          </div>

        </div>

      </div>


    </div>
  );
};

export default Hero;
