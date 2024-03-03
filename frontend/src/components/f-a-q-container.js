import React, {useState} from "react";
import './f-a-q-container.css';


const FAQContainer1 = (props)=>{

const [IsOpen,setIsOpen] = useState(false);

const toggleAns=()=>{
  setIsOpen(!IsOpen);
}
const quesClicked=()=>{
  props.clicked(props.index);
  toggleAns();
}
// for closing open answers, if any
if((props.Num!=props.index) && IsOpen){
  setIsOpen(false);
}

return (

  <div id ="faq_container" className="FAQ-CONTAINER w-[100%] flex flex-col justify-center items-center" style={{height:'min-content',marginBottom:'5px'}}>
      
    <div onClick={quesClicked}
  className="QUESTION-CONTAINER w-[100%] min-h-[79px] text-[22px] text-pitchdeck-slide-background font-goldman" style={{display:"flex", position:"relative", justifyContent:'center',alignItems:"center",margin:'7px 0 7px 0' , cursor:'pointer'}}
    >
      <div className="Question text-center leading-[150%] inline-block w-[84%]">
       {props.ques}
       {/* Will there be any participation fees for any event? */}
      </div>

      <div className="bottom_left_border absolute bottom-[0px] left-[0px] w-[3.5%] h-[59%]">
        <div className="absolute top-[0px] left-[0px] box-border w-[100%] h-[100%] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
        <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[100%] h-[100%] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
      </div>
      <div className="top_right_border absolute top-[0px] right-[0px] w-[3.5%] h-[59%]">
        <div className="absolute top-[0px] left-[0px] box-border w-[100%] h-[100%] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
        <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[100%] h-[100%] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
      </div>
    </div>

{/* using conditional rendering of Answer-container if faq question-container is clicked */}
     { IsOpen && <div className="ANSWER-CONTAINER min-h-[150px] (IsOpen ? 'slide-out' : '') relative flex flex-col w-[100%]" style={{transition:''}} >

      <button onClick={toggleAns} className="w-[21px] h-[21px] absolute top-[3.5%] right-[0.9%] cursor-pointer" style={{zIndex:'5', transition:''}}>
        <img src="https://img.icons8.com/?size=256&id=A4DsujzAX4rw&format=png" className="w-[100%] h-[100%] absolute top-[0px] left-[0px]"></img>
      </button>

    <div className="answer-container absolute top-[0px] left-[3.539%] w-[96.62%] h-[100%]">
        <div id="left-svgs" className="absolute top-[19.54%] left-[-4.35%] w-[3.83%] h-[31.32%] object-cover">
         <img
          className="absolute top-[0px] left-[0px] w-[100%] h-[100%]" alt=""
          src="/Group 241.svg"/> 
        </div>

        <div id="right-svgs" className="absolute top-[19.54%] right-[-0.4%] w-[3.83%] h-[31.32%] object-cover">
         <img
          className="absolute top-[0px] left-[0px] w-[100%] h-[100%]" alt=""
          src="/Group 241.svg" />
        </div>


      <div className="container-shape absolute top-[0px] left-[0px] w-[100%] h-[100%] text-5xl ">
        
        {/* <div className="Answer_heading absolute top-[19.59%] text-[24px] leading-[150%] inline-block w-[83.98%] h-[30%]" style={{left:'50%', transform:'translateX(-50%)'}}>

         //  {props.Ans_h} 
          Navigate Through Frequently Asked Questions to Enhance Your Understanding of Shadowfall Chronicles 
        </div> */}
        
        <div className="absolute w-[83.98%] flex flex-col justify-center align-center" style={{left:'50%',top:'50%', transform:'translate(-50%,-50%)'}}>
        <div className="font-goldman answer_content text-center text-[20px] leading-[150%] w-[100%]" >

         {props.ans}
         {/* Navigate Through Frequently Asked Questions to Enhance Your
          Understanding of Shadowfall Chronicles Navigate Through Frequently
          Asked Questions to Enhance Your Understanding of Shadowfall Chronicles
          Navigate Through Frequently Asked Questions to Enhance Your
          Understanding of Shadowfall Chronicles Navigate Through Frequently
          Asked Questions to Enhance Your Understanding of Shadowfall Chronicles */}
          
        </div>
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
