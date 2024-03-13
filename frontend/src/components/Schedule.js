import React, { useState } from 'react'
import { useScramble } from "use-scramble";
import './Schedule.css'
import { ImCross } from "react-icons/im";
const title_word = "SCHEDULE";
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
    function HandleHover() {
        replay();
    }







    // Accessing data


    const [displayText, setDisplayText] = useState([]);
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayText, setOverlayText] = useState([]);
    // MOBILE VIEW ELEMENTS
    const [isElementVisible1, setElementVisible1] = useState(false);
    const [isElementVisible2, setElementVisible2] = useState(false);
    const [isElementVisible3, setElementVisible3] = useState(false);
    const [isElementVisible4, setElementVisible4] = useState(false);
    const [isElementVisible5, setElementVisible5] = useState(false);

    const handleDivClick = (value) => {
        // setDisplayText(value);
        setShowOverlay(!showOverlay);
        // setOverlayText(value);
    };
    const handleClick1 = () => {
        setElementVisible1(!isElementVisible1);
        setShowOverlay(!showOverlay);
        const iteam1 = document.getElementById('schedule-div-1');
        const iteam2 = document.getElementById('schedule-div-2');
        const iteam3 = document.getElementById('schedule-div-3');
        const iteam4 = document.getElementById('schedule-div-4');
        const iteam5 = document.getElementById('schedule-div-5');
        // const iteam6 = document.getElementById('schedule-overlay-1');
        if (iteam1) {
            if (iteam1.style.display === 'none') {
                iteam1.style.display = 'block';
                iteam2.style.display = 'none';
                iteam3.style.display = 'none';
                iteam4.style.display = 'none';
                iteam5.style.display = 'none';
            }
        }
    }
    const handleClick2 = () => {
        const iteam1 = document.getElementById('schedule-div-1');
        const iteam2 = document.getElementById('schedule-div-2');
        const iteam3 = document.getElementById('schedule-div-3');
        const iteam4 = document.getElementById('schedule-div-4');
        const iteam5 = document.getElementById('schedule-div-5');
        setElementVisible2(!isElementVisible2);
        setShowOverlay(!showOverlay);
        if (iteam2) {
            if (iteam2.style.display === 'none') {
                iteam2.style.display = 'block';
                iteam1.style.display = 'none';
                iteam3.style.display = 'none';
                iteam4.style.display = 'none';
                iteam5.style.display = 'none';
            }
        }
    }
    const handleClick3 = () => {
        const iteam1 = document.getElementById('schedule-div-1');
        const iteam2 = document.getElementById('schedule-div-2');
        const iteam3 = document.getElementById('schedule-div-3');
        const iteam4 = document.getElementById('schedule-div-4');
        const iteam5 = document.getElementById('schedule-div-5');
        setElementVisible3(!isElementVisible3);
        setShowOverlay(!showOverlay);
        if (iteam3) {
            if (iteam3.style.display === 'none') {
                iteam3.style.display = 'block';
                iteam1.style.display = 'none';
                iteam2.style.display = 'none';
                iteam4.style.display = 'none';
                iteam5.style.display = 'none';
            }
        }
    }
    const handleClick4 = () => {
        const iteam1 = document.getElementById('schedule-div-1');
        const iteam2 = document.getElementById('schedule-div-2');
        const iteam3 = document.getElementById('schedule-div-3');
        const iteam4 = document.getElementById('schedule-div-4');
        const iteam5 = document.getElementById('schedule-div-5');
        setElementVisible4(!isElementVisible4);
        setShowOverlay(!showOverlay);
        if (iteam4) {
            if (iteam4.style.display === 'none') {
                iteam4.style.display = 'block';
                iteam1.style.display = 'none';
                iteam2.style.display = 'none';
                iteam3.style.display = 'none';
                iteam5.style.display = 'none';
            }
        }
    }
    const handleClick5 = () => {
        const iteam1 = document.getElementById('schedule-div-1');
        const iteam2 = document.getElementById('schedule-div-2');
        const iteam3 = document.getElementById('schedule-div-3');
        const iteam4 = document.getElementById('schedule-div-4');
        const iteam5 = document.getElementById('schedule-div-5');
        setElementVisible5(!isElementVisible5);
        setShowOverlay(!showOverlay);
        if (iteam5) {
            if (iteam5.style.display === 'none') {
                iteam5.style.display = 'block';
                iteam1.style.display = 'none';
                iteam2.style.display = 'none';
                iteam3.style.display = 'none';
                iteam4.style.display = 'none';
            }
        }
    }


// mobile view
    let element1 = null;
    let element2 = null;
    let element3 = null;
    let element4 = null;
    let element5 = null;
    if (isElementVisible1) {
        element1 = <div className=' mt-[40px] text-[10px] font-audiowide [word-spacing:4px] tracking-[1.5px] leading-[15px]' >
            A quiz is going to be organised as PS1 of Cassandra. It will provide you with the experience of how data science companies take tests. The format is very close to how companies ask in intern tests.
            Everyone has to give it individually, and then the marks of team members will be considered for a particular team's performance. It was initially scheduled for 10 March but has now been postponed to the first week of April.
        </div>
    }



    if (isElementVisible2) {
        element2 = <div className=' mt-[40px] text-[10px] font-audiowide [word-spacing:4px] tracking-[1.5px] leading-[15px]' >
            Get ready to showcase your badminton prowess! The Electronics Engineering Society (EES) at IIT BHU is thrilled to extend an exclusive invitation to all students of the ECE branch to participate in the upcoming Intra-Branch Mashal Badminton Tournament.
            Hurry up and register now to secure your spot in the tournament!
            Registration deadline- 7 March 2024
            Registration link:https://forms.gle/BkLajmRtK9hQzDgFA
            Catch the updates on:
            Instagram: https://tiny.cc/s7sbxz
            Facebook: https://tiny.cc/r8sbxz

        </div>
    }

    if (isElementVisible3) {
        element3 = <div className=' mt-[40px] text-[10px] font-audiowide [word-spacing:4px] tracking-[1.5px] leading-[15px]' >
            📣 Exclusive Invitation: Register Now for the Mashal Football Tournament! ⚽<br></br>
            Get ready to kick off the excitement! The Electronics Engineering Society (EES) at IIT BHU is thrilled to invite all students to participate in the upcoming Mashal Football Tournament.<br></br>
            🏆 Showcase your football skills and compete for glory on the field!<br></br>
            📅 Registration deadline: 8 March 2024<br></br>
            Secure your team's spot in the tournament by registering now! Only the top 8 teams will be recorded, so bring your A-game!<br></br>
            🔗 Registration link:
            <a href="https://forms.gle/yGsZbP6KyUSD1jnP7" target="_blank" rel="noopener noreferrer">https://forms.gle/yGsZbP6KyUSD1jnP7</a><br></br>
            Stay updated on tournament details and announcements:📷 <br></br>
            Instagram:
            <a href="http://tiny.cc/xoqexz" target="_blank" rel="noopener noreferrer">🔗 http://tiny.cc/xoqexz</a><br></br>
            📘 Facebook:
            <a href=" http://tiny.cc/bsqexz" target="_blank" rel="noopener noreferrer">🔗  http://tiny.cc/bsqexz</a>
        </div>
    }

    if (isElementVisible4) {
        element4 = <div className=' mt-[40px] text-[10px] font-audiowide [word-spacing:4px] tracking-[1.5px] leading-[15px]' >
            The Electronics Engineering Society (EES) was established with a holistic vision to create awareness among students about the core technologies based on Electronics and Communication Engineering. Now, we are gearing up for the 15th edition of India's premier solo Electronics Engineering-focused festivals. Beyond the realm of core engineering, EES has excelled in educating a vast number of students on the transformative technologies shaping our world today, including artificial intelligence, data science, web development, and algorithmic coding.
        </div>
    }

    if (isElementVisible5) {
        element5 = <div  className=' mt-[40px] text-[10px] font-audiowide [word-spacing:4px] tracking-[1.5px] leading-[15px]' >
        Join us for an engaging online speaker session in association with the Electronics Engineering Society (EES), IIT BHU. This event is designed to inspire, motivate, and provide valuable career insights to current students.<br></br>
        Event Details:<br></br>
        Date: 10th March 2024<br></br>
        Time:  5:30 PM to 6:30 PM<br></br>
        Speaker Name: Aman Kumar<br></br>
        Current Company: Cisco <br></br>
        Designation: Software Engineer<br></br>
        <a href="http://tinyurl.com/WebinarIITBHU10March" target="_blank" rel="noopener noreferrer">Registration Link:
            http://tinyurl.com/WebinarIITBHU10March</a>
    </div>
    }






















    return (
        <div id="schedule">
            {/* md defind as 768 px in tailwindcofig in screens */}

            <div className='max-h-fit w-screen mt-[5%]    border-t-[0.5px] border-b-[0.5px]  border-solid  border-[#FFF] '>
                <div className='w-screen   Schedule_screen border-solid border-[#FFF] border-y-[0.5px] my-[50px] '>
                    <div className=''>
                        <div className=' schedule_gap flex border-solid border-[#FFF] border-b-[0.5px] items-center'>
                            <div id="schedule_title" className=' text-white  font-audiowide text-s ml-3 text-center ab:text-[100px] tracking-[1rem] font-bold leading-[0px] items-center  md:ml-[24px]  '>
                                SCHEDULE
                            </div>
                        </div>
                        <div className="flex w-full   ">
                            {/* 70 percent colmn */}
                            <div className="md:w-[60%] w-[90%] ml-10 md:mx-0 relative">
                                {/* can change mx to ml-100px */}
                                <div className='  grid Schedule_grid    grid-rows-8 md:ml-[100px] overflow-hidden  border-solid border-[#FFF] '>

                                    <div className=' group cursor-pointer border-[0.5px] mr-5 border-solid border-[#FFF] hover:bg-[#D9D9D9]/20 hover:border-l-[10px]  hover:border-[#FFF]  pl-[25px] hover:pl-[15.5px] '>


                                        <div className='  text-white h-[100%] items-center  flex   font-audiowide tracking-[4.5px]    ' onClick={handleClick1} >
                                            1. Cassandra quiz was postponed to the first week of April.

                                        </div>
                                    </div>
                                    <div className=' group cursor-pointer border-[0.5px] mr-5 border-solid border-[#FFF] hover:bg-[#D9D9D9]/20 hover:border-l-[10px]  hover:border-[#FFF]  pl-[25px] hover:pl-[15.5px] '>


                                        <div className='  text-white h-[100%] items-center  flex    font-audiowide tracking-[4.5px]    ' onClick={handleClick2} >
                                            2. Mashal Badminton Tournament:

                                        </div>
                                    </div>
                                    <div className=' group cursor-pointer border-[0.5px] mr-5 border-solid border-[#FFF] hover:bg-[#D9D9D9]/20 hover:border-l-[10px]  hover:border-[#FFF]  pl-[25px] hover:pl-[15.5px] '>


                                        <div className='  text-white h-[100%] items-center  flex    font-audiowide tracking-[4.5px] ' onClick={handleClick3}  >
                                            3. Mashal football tournament:

                                        </div>
                                    </div>
                                    <div className=' group cursor-pointer border-[0.5px] mr-5 border-solid border-[#FFF] hover:bg-[#D9D9D9]/20 hover:border-l-[10px]  hover:border-[#FFF]  pl-[25px] hover:pl-[15.5px] '>


                                        <div className='  text-white h-[100%] items-center  flex   font-audiowide tracking-[4.5px]   ' onClick={handleClick4}  >
                                            4. EES WEBSITE LAUNCH:
                                        </div>
                                    </div>
                                    <div className=' group cursor-pointer border-[0.5px] mr-5 border-solid border-[#FFF] hover:bg-[#D9D9D9]/20 hover:border-l-[10px]  hover:border-[#FFF]  pl-[25px] hover:pl-[15.5px] '>


                                        <div className='  text-white h-[100%] items-center  flex   font-audiowide tracking-[4.5px]    ' onClick={handleClick5}  >
                                            5. Guest lecture by Aman Kumar (Software Engineer, hero speaker at Cisco).
                                        </div>
                                    </div>



                                </div>
                                {showOverlay && (
                                    <div
                                        className={` md:hidden absolute inset-0 backdrop-blur-md bg-black/50 flex  `}
                                        onClick={() => { setShowOverlay(false); setElementVisible1(false); setElementVisible2(false); setElementVisible3(false); setElementVisible4(false); setElementVisible5(false); }}
                                    >
                                        <div className='ml-[5px] mt-[5px] mr-[0px]'><ImCross /></div>
                                        {element1}
                                        {element2}
                                        {element3}
                                        {element4}
                                        {element5}

                                    </div>
                                )}

                            </div>

                            {/* 30 percent coloumn */}
                            {/* styling used in each block */}
                            {/* text-[20px] font-audiowide [word-spacing:8px] tracking-[1.5px] leading-[35px] */}
                            <div className=" w-[40%] hidden md:block font-goldman overflow-hidden Schedule_display ">
                                {/* <h3 id="side_title" className=''  >Display Text:</h3> */}


                                <div id="schedule-div-1" className=' mt-[40px] ' style={{ display: 'block', }}>
                                    A quiz is going to be organised as PS1 of Cassandra. It will provide you with the experience of how data science companies take tests. The format is very close to how companies ask in intern tests.
                                    Everyone has to give it individually, and then the marks of team members will be considered for a particular team's performance. It was initially scheduled for 10 March but has now been postponed to the first week of April.
                                </div>





                                <div id="schedule-div-2" className=' mt-[40px] ' style={{ display: 'none', }}>
                                    Get ready to showcase your badminton prowess! The Electronics Engineering Society (EES) at IIT BHU is thrilled to extend an exclusive invitation to all students of the ECE branch to participate in the upcoming Intra-Branch Mashal Badminton Tournament.
                                    Hurry up and register now to secure your spot in the tournament!<br></br>
                                    Registration deadline- 7 March 2024<br></br>
                                    Registration link:<a href="https://forms.gle/BkLajmRtK9hQzDgFA" target="_blank" rel="noopener noreferrer">https://forms.gle/BkLajmRtK9hQzDgFA</a><br></br>
                                    Catch the updates on:<br></br>
                                    Instagram:<a href="https://tiny.cc/s7sbxz" target="_blank" rel="noopener noreferrer">https://tiny.cc/s7sbxz</a><br></br> 
                                    Facebook:<a href="https://tiny.cc/r8sbxz" target="_blank" rel="noopener noreferrer">https://tiny.cc/r8sbxz</a> 
                                </div>
                                <div id="schedule-div-3" className=' mt-[40px] ' style={{ display: 'none', }}>
                                    📣 Exclusive Invitation: Register Now for the Mashal Football Tournament!<br></br>
                                    ⚽Get ready to kick off the excitement! The Electronics Engineering Society (EES) at IIT BHU is thrilled to invite all students to participate in the upcoming Mashal Football Tournament.<br></br>
                                    🏆 Showcase your football skills and compete for glory on the field!<br></br>
                                    📅 Registration deadline: 8 March 2024<br></br>
                                    Secure your team's spot in the tournament by registering now! Only the top 8 teams will be recorded, so bring your A-game!<br></br>
                                    🔗 Registration link:
                                    <a href="https://forms.gle/yGsZbP6KyUSD1jnP7" target="_blank" rel="noopener noreferrer">https://forms.gle/yGsZbP6KyUSD1jnP7</a><br></br>
                                    Stay updated on tournament details and announcements:📷 <br></br>
                                    Instagram:
                                    <a href="http://tiny.cc/xoqexz" target="_blank" rel="noopener noreferrer">🔗 http://tiny.cc/xoqexz</a><br></br>
                                    📘 Facebook:
                                    <a href=" http://tiny.cc/bsqexz" target="_blank" rel="noopener noreferrer">🔗  http://tiny.cc/bsqexz</a>
                                </div>
                                <div id="schedule-div-4" className=' mt-[40px]' style={{ display: 'none', }}>
                                    The Electronics Engineering Society (EES) was established with a holistic vision to create awareness among students about the core technologies based on Electronics and Communication Engineering. Now, we are gearing up for the 15th edition of India's premier solo Electronics Engineering-focused festivals. Beyond the realm of core engineering, EES has excelled in educating a vast number of students on the transformative technologies shaping our world today, including artificial intelligence, data science, web development, and algorithmic coding.
                                </div>
                                <div id="schedule-div-5"  className=' mt-[40px] ' style={{ display: 'none', }}>
                                    Join us for an engaging online speaker session in association with the Electronics Engineering Society (EES), IIT BHU. This event is designed to inspire, motivate, and provide valuable career insights to current students.<br></br>
                                    Event Details:<br></br>
                                    Date: 10th March 2024<br></br>
                                    Time:  5:30 PM to 6:30 PM<br></br>
                                    Speaker Name: Aman Kumar<br></br>
                                    Current Company: Cisco <br></br>
                                    Designation: Software Engineer<br></br>
                                    <a href="http://tinyurl.com/WebinarIITBHU10March" target="_blank" rel="noopener noreferrer">Registration Link:
                                        http://tinyurl.com/WebinarIITBHU10March</a>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>


    )
}

export default Schedule
