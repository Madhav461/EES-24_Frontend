import React from "react";
import FAQContainer1 from "./f-a-q-container";
import "./faq.css";
import Marquee from "react-fast-marquee";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import AnimatedTextWord from "./AnimatedTextWord";
//23 13 27

export const Faq = () => {
    return (
        <div className="relative h-[1122px] mt-[30px] w-[1440px]">
<div className="absolute top-[68px] left-[calc(50%_-_203.5px)] text-[94px] tracking-[0.01em] leading-[150%] font-michroma text-turquoise text-center inline-block w-[407px]">
        FAQ’s
      </div>

      <div className="glow-text "><Marquee className="marquee_container"><p class="marquee" className="font-michroma text-turquoise text-14xl"><AnimatedTextCharacter text="Your Questions Answered   Your Questions Answered    Your Questions Answered      "></AnimatedTextCharacter></p></Marquee></div>

      <FAQContainer1 propTop="214px" propLeft="calc(50% - 621.5px)" />
      <FAQContainer1 propTop="306px" propLeft="calc(50% - 621.5px)" />
      <FAQContainer1 propTop="398px" propLeft="calc(50% - 621.5px)" />
      <FAQContainer1 propTop="490px" propLeft="calc(50% - 621.5px)" />

      
      <div id="left-svgs" className="absolute top-[644px] left-[6.3%] w-[46px] h-[109px] object-cover">
         <img
          className="absolute top-[0px] left-[0px]" alt=""
          src="/Group 241.svg"
        /> 
        </div>

        <div id="right-svgs" className="absolute top-[644px] left-[90.5%] w-[46px] h-[109px] object-cover">
         <img
          className="absolute top-[0px] left-[0px]" alt=""
          src="/Group 241.svg"
        />
        </div>

      <div className="container-shape absolute top-[582px] left-[9.8%] w-[1201px] h-[348px] text-5xl font-ligconsolata">

        <div className="absolute top-[68.2px] left-[calc(50%_-_502.9px)] text-[24px] leading-[150%] inline-block w-[1008.7px] h-[104.4px]">
          Navigate Through Frequently Asked Questions to Enhance Your
          Understanding of Shadowfall Chronicles
        </div>
        <div className="absolute top-[197.2px] left-[calc(50%_-_502.9px)] text-[14px] leading-[150%] inline-block w-[1008.7px] h-[91.3px]">
          Navigate Through Frequently Asked Questions to Enhance Your
          Understanding of Shadowfall Chronicles Navigate Through Frequently
          Asked Questions to Enhance Your Understanding of Shadowfall Chronicles
          Navigate Through Frequently Asked Questions to Enhance Your
          Understanding of Shadowfall Chronicles Navigate Through Frequently
          Asked Questions to Enhance Your Understanding of Shadowfall Chronicles
        </div>
        <div className="absolute top-[279.9px] left-[0px] w-[42.5px] h-[68.2px]">
          <div className="absolute top-[0px] left-[0px] box-border w-[42.5px] h-[68.2px] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
          <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[42.5px] h-[68.2px] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
        </div>
        <div className="absolute top-[0px] left-[1156px] w-[42.5px] h-[68.2px]">
          <div className="absolute top-[68.2px] left-[42.5px] box-border w-[42.5px] h-[68.2px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
          <div className="absolute top-[68.2px] left-[42.5px] [filter:blur(8px)] box-border w-[42.5px] h-[68.2px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
        </div>
      </div>
      
      <div className="absolute top-[894px] left-[calc(50%_-_347px)] flex flex-col items-center justify-start text-center text-[32px] font-michroma">
        <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
          <div className="self-stretch relative tracking-[0.01em] leading-[130%]">
            Still have a question?
          </div>
          <div className="relative text-2xl leading-[150%] font-ligconsolata inline-block w-[696px]">
            Feel free to reach out for clarifications and inquiries.
          </div>
        </div>
      </div>
      
      </div>
    );
};
export default Faq;