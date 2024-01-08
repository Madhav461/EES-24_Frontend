import React from 'react'
// import "./nav.css";
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburger.js';


const Navhome2 =() =>{
  return (
    <div>
      <div className="relative bg-gray w-[100vw]  h-[73px]  flex  justice  overflow-hidden text-center text-base  text-white font-audiowide pb-3">
      <div className="pb-8 z-20 left-[15px] md:hidden">
     <HamburgerMenu />
      </div>
      <div className=' ' >
          <a href='/'><img
            className=" cursor-pointer pt-5  md:w-[98px]  md:h-[70px] w-[60px] h-[50px] ab:w-[72px] ab:h-[60px]"
            alt=""
            src="/ees-logo-fcfbfc-1.svg"
          />
          </a>
        </div>
      <ul
          className="  my-4 hidden md:flex xl:text-3xl  justify-evenly space-x-8 items-stretch    "
          id="list"
          list="none"
        >
       
          <div className="flex tracking-[0.08em] items-center justify-center  glow-text cursor-pointer">
            Workshops
          </div>
          <div className="flex  tracking-[0.08em] items-center justify-centre glow-text cursor-pointer">
            Sponsors
          </div>
          <div className="tracking-[0.08em] flex items-center justify-center  glow-text cursor-pointer">
            Gallery
          </div>
          <div className=" tracking-[0.08em] flex items-center justify-center  glow-text cursor-pointer">
            Schedule
          </div>

        </ul>
       
       <div className="relative pr-3">
       <Link to="/login">
          <button className="cursor-pointer  [border:none] p-0 bg-[transparent] ">
         
         <div className="flex absolute top-[11px] left-[84px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]"/>
         <div className="absolute top-[13px] left-[0px]  box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]"/>
         <button className="cursor-pointer mx-3 flex  glow-animation [border:none] p-0 bg-[transparent]  top-[0px] left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center  items-center justify-center   [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
                Login
              </button>
         
          </button>
          </Link>
          
        </div>
       <div className='relative'>
       <Link to="/signup">
       <button className="cursor-pointer [border:none] p-0 bg-[transparent] ">
             
                <div className="absolute flex top-[11px] left-[0px] box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]" />
                <div className="absolute  flex  top-[11px] left-[95px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]" />
            
              <button className=" glow-animation flex mx-3 cursor-pointer [border:none] p-0 bg-[transparent]  top-[0px] left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center items-center justify-center ">
                SignUp
              </button>
            </button>
            </Link>
       </div>
     
      
       </div>

       <div className='bg-white w-full h-0.5 rounded-full'/>
      
      
      {/* <div className=" w-full">
          <img
            className="w-full h-[20px]"
            alt=""
            src="/whiteline.svg" //dark bottom
          /> </div> */}


    </div>
  )
}
export default Navhome2