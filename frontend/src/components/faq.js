import React, { useState } from "react";
import FAQContainer1 from "./f-a-q-container";
import "./faq.css";
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import AnimatedTextWord from "./AnimatedTextWord";

export const Faq = () => {

const[ClickedQuesNum,setClickedQuesNum]=useState(0);
const clicked=(num)=>{
  setClickedQuesNum(num);
}
// 16 19 30 
return (
    <div className="relative flex flex-col mt-[30px] mb-[50px]" style={{width:'100vw' ,height:'min-content', justifyContent:'center', alignItems:'center'}}>

      <div className="glow-text w-[100%]"><Marquee className="marquee_container"><p class="marquee" className="marquee-font font-michroma text-turquoise text-[33px]"><AnimatedTextCharacter text="Your Questions Answered   ||  Your Questions Answered   ||  Your Questions Answered   ||  "></AnimatedTextCharacter></p></Marquee></div>
      <div className="faqs mt-[0px] text-[94px] center tracking-[0.01em] leading-[150%] font-michroma text-turquoise text-center inline-block w-[28%]">
        FAQ’s
      </div>

      <div className="conatainers-wrapper mt-[20px] w-[86.31%]" style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
        <FAQContainer1 index="1" Num={ClickedQuesNum} clicked={clicked} ques="" Ans_h="" ans="" />
        <FAQContainer1 index="2" Num={ClickedQuesNum} clicked={clicked} ques="" Ans_h="" ans="" />
        <FAQContainer1 index="3" Num={ClickedQuesNum} clicked={clicked} ques="" Ans_h="" ans="" />
        <FAQContainer1 index="4" Num={ClickedQuesNum} clicked={clicked} ques="" Ans_h="" ans="" />
      </div>
      
      <div className="STILL-HAVE-QUES mt-[10px] w-[48%] flex flex-col items-center justify-between text-center text-[32px] font-michroma ">
        <div className="still-ques mb-[32px] self-stretch relative flex flex-col items-center justify-center tracking-[0.01em] leading-[130%]">
            Still have a question?
        </div>  
        <div id="last-para" className="relative text-[21px] leading-[150%] font-ligconsolata inline-block w-[100%]">
            Feel free to reach out for clarifications and inquiries.
        </div>   
      </div>
    </div>
    );
};
export default Faq;