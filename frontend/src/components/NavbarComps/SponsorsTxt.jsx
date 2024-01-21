import React,{ useState } from "react";
import {useScramble} from "use-scramble";
function SponsorsTxt(){
    const title_word="Sponsors";
    const [sample, setSample] = React.useState(title_word);

    const params = {
        overdrive: false,
        speed: 1,
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
  function HandleHover(){
    replay();
  }
    return(
         <div className=" font-audiowide flex tracking-[0.08em] items-center justify-center  md:w-[110px] w-[95px] h-[38px] glow-text cursor-pointer">
        <p onMouseLeave={HandleHover} ref={ref}></p>
        </div>
    )
}

export default SponsorsTxt;