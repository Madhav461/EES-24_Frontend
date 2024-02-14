import React, { useState } from 'react'
import {useScramble} from "use-scramble";
import './Schedule.css'
const title_word="SCHEDULE";
function Schedule() {
    const [sample, setSample] = React.useState(title_word);

    const params = {
        overdrive: false,
        speed: 0.9,
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



//   const params = {
//     overdrive: false,
//     speed: 1,
//     tick: 1,
//     step: 4,
//     scramble: 14,
//     seed: 2,
//     chance: 0,
//     overflow: true,
//   };

//   const { ref, replay } = useScramble({
//     text: sample,
//     ...params,
//   });
//   function HandleHover(){
//     replay();
//   }



    const [displayText, setDisplayText] = useState('');
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayText, setOverlayText] = useState('');

    const handleDivClick = (value) => {
        setDisplayText(value);
        setShowOverlay(!showOverlay);
        setOverlayText(value);
    };

    return (
        <div id="schedule">
            {/* md defind as 768 px in tailwindcofig in screens */}

            <div className='max-h-fit w-screen    border-t-[0.5px] border-b-[0.5px]  border-solid  border-[#FFF] '>
                <div className='w-screen h-[1088px] border-solid border-[#FFF] border-y-[0.5px] my-[50px]'>
                    <div className='  h-[1088px] '>
                        <div className=' h-[150px] flex border-solid border-[#FFF] border-b-[0.5px] items-center'>
                        {/* leading-[131px] */}
                        {/* mt-[23px] */}
                        {/* onMouseOver={HandleHover} */}
                            <div id="schedule_title" className=' text-white  font-audiowide text-s ml-3 text-center ab:text-[100px] tracking-[1rem] font-bold leading-[0px] items-center  md:ml-[24px]  '>
                                {/* underline  */}
                                {/* <p ref={ref}></p> */}
                                SCHEDULE
                            </div>
                        </div>
                        <div className="flex w-full   ">
                            {/* 70 percent colmn */}
                            <div className="md:w-[70%] w-[90%] mx-10 md:mx-0 relative">
                                {/* can change mx to ml-100px */}
                                <div className=' h-[938px] grid    grid-rows-8 md:mx-[100px] overflow-hidden  border-solid border-[#FFF] '>
                                    {Array.from({ length: 8 }, (_, index) => index + 1).map((item) => (
                                        <div className=' group cursor-pointer border-[0.5px] mr-5 border-solid border-[#FFF] hover:bg-[#D9D9D9]/20 hover:border-l-[10px]  hover:border-[#FFF]  pl-[25px] hover:pl-[15.5px] '>
                                            <div className='  text-white h-[100%] items-center  flex   text-[22.664px] font-audiowide tracking-[4.5px]    ' onClick={(e) => handleDivClick(e.target.textContent)} >
                                                more updates coming soon....
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {showOverlay && (
                                    // bg-slate-700 opacity-90 bg-blend-saturation
                                    // bg-[#D9D9D9]/10
                                    <div
                                        className={` md:hidden absolute inset-0 backdrop-blur-md bg-black/50 flex  items-center justify-center`}
                                        onClick={() => setShowOverlay(false)}
                                    >
                                        <div className="text-white font-goldman opacity-100 " id='overlay'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor molestiae sunt fuga nulla ad, dolores adipisci quidem eum vero, quos eligendi voluptate ducimus sed repellat voluptas harum et itaque?</div>
                                    </div>
                                )}

                            </div>

                            {/* 30 percent coloumn */}
                            <div  className=" w-[30%] hidden md:block font-goldman overflow-hidden">
                                <h3 id="side_title">Display Text:</h3>
                                <p id="side_txt">{displayText}</p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>


    )
}

export default Schedule
