import React, { useState } from "react";
import FAQContainer1 from "./f-a-q-container";
import "./faq.css";

import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
// import AnimatedTextWord from "./AnimatedTextWord";

export const Faq = () => {

const[ClickedQuesNum,setClickedQuesNum]=useState(0);
const clicked=(num)=>{
  setClickedQuesNum(num);
}

return (
    <div className="relative flex flex-col mt-[30px] mb-[50px]" style={{width:'100vw' ,height:'min-content', justifyContent:'center', alignItems:'center'}}>

      {/* marquee */}
      <div className="glow-text w-[100%]"><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={35} className="marquee_container border-solid border-white border-y"><div class="marquee" className="marquee-font font-michroma text-white text-[24px]"><AnimatedTextCharacter text="Discover quick solutions and insights in our FAQs | | Your go-to resource for answers! | | Your Questions answered ! ! | |  "></AnimatedTextCharacter></div></Marquee></div>

      <div className="faqs mt-[0px] text-[94px] center tracking-[0.01em] leading-[150%] font-michroma text-white text-center inline-block w-[28%]">

        FAQ’s
      </div>

      <div className="conatainers-wrapper mt-[20px] w-[86.31%]" style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
        <FAQContainer1 index="1" Num={ClickedQuesNum} clicked={clicked} ques="Will there be any participation fees for any event?" Ans_h="There will be NO participation fees." ans="There will be NO participation fees." />
        <FAQContainer1 index="2" Num={ClickedQuesNum} clicked={clicked} ques="Will there be any entry fees for workshops?" Ans_h="There will be NO entry fees." ans="There will be NO entry fees." />
        <FAQContainer1 index="3" Num={ClickedQuesNum} clicked={clicked} ques="Are there any Prerequisites to attend the workshops?" Ans_h="No prerequisites, just an open mind" ans="No prerequisites, just an open mind" />
        <FAQContainer1 index="4" Num={ClickedQuesNum} clicked={clicked} ques="Are these workshops open to students studying in department other than ECE?" Ans_h="Yes anyone can attend the workshops" ans="Yes anyone can attend the workshops" />
        <FAQContainer1 index="5" Num={ClickedQuesNum} clicked={clicked} ques="What if we were not able to attend the workshop on schedule?" Ans_h="Everything taught in workshop is shared in the groups after the workshop and the workshop recordings will also be available for your reference." ans="Everything taught in workshop is shared in the groups after the workshop and the workshop recordings will also be available for your reference." />
        <FAQContainer1 index="6" Num={ClickedQuesNum} clicked={clicked} ques="Is there any restriction on team size participating in Udyam Events?" Ans_h="Yes there is a restriction on the team size. It varies for each event. Please make sure to check the team size limit of your event before registering." ans="Yes there is a restriction on the team size. It varies for each event. Please make sure to check the team size limit of your event before registering." />
        <FAQContainer1 index="7" Num={ClickedQuesNum} clicked={clicked} ques="Who should be contacted if there is any problem with registration in a particular event?" Ans_h="You must contact the event coordinator in case of any problems regarding registration." ans="You must contact the event coordinator in case of any problems regarding registration." />
        <FAQContainer1 index="8" Num={ClickedQuesNum} clicked={clicked} ques="Are there any prizes or rewards for participating in Events?" Ans_h="Yes there are prizes and rewards for participating in Events" ans="Yes there are prizes and rewards for participating in Events" />
      </div>
      
      <div className="STILL-HAVE-QUES mt-[10px] w-[48%] flex flex-col items-center justify-between text-center text-[32px] font-michroma ">
        <div className="still-ques mb-[32px] self-stretch relative flex flex-col items-center justify-center tracking-[0.01em] leading-[130%]">
            Still have a question?

        </div>  
        <div id="last-para" className="relative text-[21px] leading-[150%] font-goldman inline-block w-[100%]">

            Feel free to reach out for clarifications and inquiries.
        </div>   
      </div>
    </div>
    );
};
export default Faq;
