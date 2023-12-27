import React, {useState} from "react";
import './f-a-q-container.css';

const FAQContainer1 = (props)=>{

const [IsOpen,setIsOpen] = useState(false);

const toggleAns=()=>{
  setIsOpen(!IsOpen);
}
{/*25 42 44 62 66 */}
const quesClicked=()=>{
  props.clicked(props.index);
  toggleAns();
}
// for closing open answers, if any
if((props.Num!=props.index) && IsOpen){
  setIsOpen(false);
}

return (
  <div className="FAQ-CONTAINER w-[100%] flex flex-col justify-center items-center" style={{height:'min-content',marginBottom:'5px'}}>
      
    <div onClick={quesClicked}
  className="QUESTION-CONTAINER w-[100%] min-h-[79px] text-2xl text-pitchdeck-slide-background font-ligconsolata" style={{display:"flex", position:"relative", justifyContent:'center',alignItems:"center",margin:'7px 0 7px 0' , cursor:'pointer'}}
    >
      <div className="text-center leading-[150%] inline-block w-[84%]">
       {/* {props.ques} */}
      "Navigate Through Frequently Asked Questions to Enhance Your Understanding of Shadowfall Chronicles"
      </div>
      <div className="absolute bottom-[0px] left-[0px] w-[3.5%] h-[59%]">
        <div className="absolute top-[0px] left-[0px] box-border w-[100%] h-[100%] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
        <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[100%] h-[100%] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
      </div>
      <div className="absolute top-[0px] right-[0px] w-[3.5%] h-[59%]">
        <div className="absolute top-[0px] left-[0px] box-border w-[100%] h-[100%] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
        <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[100%] h-[100%] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
      </div>
    </div>

{/* using conditional rendering of Answer-container if faq question-container is clicked */}
     { IsOpen && <div className="ANSWER-CONTAINER min-h-[348px] (IsOpen ? 'slide-out' : '') relative flex flex-col w-[100%]" style={{transition:''}} >

      <button onClick={toggleAns} className="h-[35px] w-[35px] absolute top-[10px] right-[10px] cursor-pointer" style={{zIndex:'5', transition:''}}>
      {/* <img src="" /> */}
        X
      </button>

    <div className="answer-container absolute top-[0px] left-[3.539%] w-[96.62%] h-[100%]">
        <div id="left-svgs" className="absolute top-[19.54%] left-[-4.35%] w-[46px] h-[109px] object-cover">
         <img
          className="absolute top-[0px] left-[0px]" alt=""
          src="/Group 241.svg"/> 
        </div>

        <div id="right-svgs" className="absolute top-[19.54%] right-[-0.4%] w-[46px] h-[109px] object-cover">
         <img
          className="absolute top-[0px] left-[0px]" alt=""
          src="/Group 241.svg" />
        </div>

      <div className="container-shape absolute top-[0px] left-[0px] w-[100%] h-[100%] text-5xl font-ligconsolata">
        <div className="Answer_heading absolute top-[19.59%] text-[24px] leading-[150%] inline-block w-[83.98%] h-[30%]" style={{left:'50%', transform:'translateX(-50%)'}}>
          {/* {props.Ans_h} */}
          Navigate Through Frequently Asked Questions to Enhance Your Understanding of Shadowfall Chronicles"
        </div>
        <div className="answer_content absolute top-[56.6%] text-[14px] leading-[150%] inline-block w-[83.98%] h-[26.2%]" style={{left:'50%', transform:'translateX(-50%)'}}>
         {/* {props.ans} */}
         Navigate Through Frequently Asked Questions to Enhance Your
          Understanding of Shadowfall Chronicles Navigate Through Frequently
          Asked Questions to Enhance Your Understanding of Shadowfall Chronicles
          Navigate Through Frequently Asked Questions to Enhance Your
          Understanding of Shadowfall Chronicles Navigate Through Frequently
          Asked Questions to Enhance Your Understanding of Shadowfall Chronicles
        </div>
        
        <div id="left-border" className="absolute bottom-[0px] left-[0px] w-[3.59%] h-[19.6%]">
          <div className="absolute top-[0px] left-[0px] box-border w-[100%] h-[100%] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
          <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[100%] h-[100%] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
        </div>
        <div id="right-border" className="absolute top-[0px] right-[0px] w-[3.59%] h-[19.6%]">
          <div className="absolute top-[0px] left-[0px] box-border w-[100%] h-[100%] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
          <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[100%] h-[100%] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
        </div>
      </div>
    </div>
    </div> }

  </div>
);
};

export default FAQContainer1;
