import React, {useState} from "react";
import './f-a-q-container.css';

const FAQContainer1 = (props)=>{

const [IsOpen,setIsOpen] = useState(false);
// const toggleAns=()=>{
// if(props.Num===props.index) {
//   setIsOpen(!IsOpen);}
// }
// const quesClicked=()=>{
//   props.clicked(props.index);
//   toggleAns();
// }
const toggleAns=()=>{
  setIsOpen(!IsOpen);}


return (
  <div className="FAQ-CONTAINER flex flex-col justify-center items-center" style={{height:'min-content',marginBottom:'5px'}}>
      
    <div onClick={toggleAns}
  className="QUESTION-CONTAINER w-[1243px] text-2xl text-pitchdeck-slide-background font-ligconsolata" style={{minHeight: '79px', display:"flex", position:"relative", justifyContent:'center',alignItems:"center",margin:'7px 0 7px 0' , cursor:'pointer'}}
    >
      <div className="text-center leading-[150%] inline-block w-[1044px]">
       {/* {props.ques} */}
       "Navigate Through Frequently Asked Questions to Enhance Your Understanding of Shadowfall Chronicles"
      </div>
      <div className="absolute bottom-[0px] left-[0px] w-[44px] h-[47px]">
        <div className="absolute top-[0px] left-[0px] box-border w-[44px] h-[47px] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
        <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[44px] h-[47px] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
      </div>
      <div className="absolute top-[0px] left-[1199px] w-[44px] h-[47px]">
        <div className="absolute top-[0px] left-[0px] box-border w-[44px] h-[47px] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
        <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[44px] h-[47px] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
      </div>
    </div>

{/* using conditional rendering of Answer-container if faq question-container is clicked */}
     { IsOpen && <div className="ANSWER-CONTAINER (IsOpen ? 'slide-out' : '') relative flex flex-col w-[1243px]" style={{minHeight:'348px',transition:''}} >

      <button onClick={toggleAns} className="h-[35px] w-[35px] absolute top-[10px] right-[10px] cursor-pointer" style={{zIndex:'5', transition:''}}>
        X
      </button>

    <div className="answer-container absolute top-[0px] left-[44px] w-[1201px] h-[348px]">
        <div id="left-svgs" className="absolute top-[68px] left-[-4.3%] w-[46px] h-[109px] object-cover">
         <img
          className="absolute top-[0px] left-[0px]" alt=""
          src="/Group 241.svg"/> 
        </div>

        <div id="right-svgs" className="absolute top-[68px] right-[-0.4%] w-[46px] h-[109px] object-cover">
         <img
          className="absolute top-[0px] left-[0px]" alt=""
          src="/Group 241.svg" />
        </div>

      <div className="container-shape absolute top-[0px] left-[0px] w-[1201px] h-[348px] text-5xl font-ligconsolata">
        <div className="Answer_heading absolute top-[68.2px] left-[calc(50%_-_502.9px)] text-[24px] leading-[150%] inline-block w-[1008.7px] h-[104.4px]">
          {/* {props.Ans_h} */}
          Navigate Through Frequently Asked Questions to Enhance Your Understanding of Shadowfall Chronicles"
        </div>
        <div className="answer_content absolute top-[197.2px] left-[calc(50%_-_502.9px)] text-[14px] leading-[150%] inline-block w-[1008.7px] h-[91.3px]">
         {/* {props.ans} */}
         Navigate Through Frequently Asked Questions to Enhance Your
          Understanding of Shadowfall Chronicles Navigate Through Frequently
          Asked Questions to Enhance Your Understanding of Shadowfall Chronicles
          Navigate Through Frequently Asked Questions to Enhance Your
          Understanding of Shadowfall Chronicles Navigate Through Frequently
          Asked Questions to Enhance Your Understanding of Shadowfall Chronicles
        </div>
        
        <div id="left-border" className="absolute top-[279.9px] left-[0px] w-[42.5px] h-[68.2px]">
          <div className="absolute top-[0px] left-[0px] box-border w-[42.5px] h-[68.2px] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
          <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[42.5px] h-[68.2px] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
        </div>
        <div id="right-border" className="absolute top-[0px] left-[1156px] w-[42.5px] h-[68.2px]">
          <div className="absolute top-[68.2px] left-[42.5px] box-border w-[42.5px] h-[68.2px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
          <div className="absolute top-[68.2px] left-[42.5px] [filter:blur(8px)] box-border w-[42.5px] h-[68.2px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
        </div>
      </div>
    </div>
    </div> }

  </div>
);
};

export default FAQContainer1;
