import React, { useState } from "react";
import FAQContainer1 from "./f-a-q-container";
import "./faq.css";
import Marquee from "react-fast-marquee";
// import AnimatedTextCharacter from "./AnimatedTextCharacter";
// import AnimatedTextWord from "./AnimatedTextWord";

export const Faq = () => {

const[QuesNum,setQuesNum]=useState(0);
const clicked=(num)=>{
  setQuesNum(num);
}

return (
  <div className="relative flex flex-col mt-[30px] mb-[50px] w-[1440px]" style={{height:'min-content', justifyContent:'center', alignItems:'center'}}>

      <div className=" tracking-widest glow-text"><Marquee speed={100} gradient={true} gradientColor="black" gradientWidth={35} className="marquee_container border-y-2 border-solid border-teal-300 "><p class="marquee" >* YOUR QUESTIONS ANSWERED * YOUR QUESTIONS ANSWERED * YOUR QUESTIONS ANSWERED * YOUR QUESTIONS ANSWERED * YOUR QUESTIONS ANSWERED * YOUR QUESTIONS ANSWERED * YOUR QUESTIONS ANSWERED * YOUR QUESTIONS ANSWERED * YOUR QUESTIONS ANSWERED * YOUR QUESTIONS ANSWERED </p></Marquee></div>

      <div className="mt-[0px] text-[94px] tracking-[0.01em] leading-[150%] font-michroma text-turquoise text-center inline-block w-[407px]">
        FAQ’s 
      </div>

      <div className="conatainers-wrapper mt-[20px] " style={{display:'flex',flexDirection:'column'}}>
        <FAQContainer1 index="1" Num="QuesNum" clicked={clicked} ques="" Ans_h="" ans="" />
        <FAQContainer1 index="2" Num="QuesNum" clicked={clicked} ques="" Ans_h="" ans="" />
        <FAQContainer1 index="3" Num="QuesNum" clicked={clicked} ques="" Ans_h="" ans="" />
        <FAQContainer1 index="4" Num="QuesNum" clicked={clicked} ques="" Ans_h="" ans="" />
      </div>
      
      <div className="STILL-HAVE-QUES mt-[10px] flex flex-col items-center justify-start text-center text-[32px] font-michroma">
        <div className="self-stretch relative flex flex-col items-center justify-center gap-[32px] tracking-[0.01em] leading-[130%]">
            Still have a question?
          <div className="relative text-2xl leading-[150%] font- inline-block w-[696px]">
            Feel free to reach out for clarifications and inquiries.
          </div>
        </div>      
      </div>
      </div>
    );
};
export default Faq;