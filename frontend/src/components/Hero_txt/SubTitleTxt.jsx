import React,{ useState } from "react";
import {useScramble} from "use-scramble";
function SubTitleTxt(){
    const title_word="Innovate. Inspire. Ignite. Greetings, Electronics Engineers. To the fest beyond imagination !!!";
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

        <p onClick={HandleHover} ref={ref}></p>

    )
}

export default SubTitleTxt;