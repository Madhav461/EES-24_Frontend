// import React from "react";
import React, { useState } from 'react';
import "./nav.css";
import Hamburger from "./hamburger.js"
import { Link } from 'react-router-dom';



const Navhome = () => {
  
  
  return (
    <div>
      <div className="relative z-0 bg-gray lag:w-[100vw] lag:h-[110px] h-[75px] w-[100vw] overflow-hidden text-center text-base text-white font-audiowide">
        <ul
          className="m-0 hidden lag:flex justify-evenly items-center absolute top-[55px] left-[453px] w-[555px] h-[38px]"
          id="list"
          list="none"
        >
          <div className="flex tracking-[0.08em] items-center justify-center w-[137px] h-[38px] glow-text cursor-pointer">
            Workshops
          </div>
          <div className="flex  tracking-[0.08em] items-center justify-center w-[116px] h-[38px] glow-text cursor-pointer">
            Sponsors
          </div>
          <div className="tracking-[0.08em] flex items-center justify-center w-[94px] h-[38px] glow-text cursor-pointer">
            Gallery
          </div>
          <div className=" tracking-[0.08em] flex items-center justify-center w-[129px] h-[38px] glow-text cursor-pointer">
            Schedule
          </div>
        
        </ul>
        <div className=" lag:flex hidden lag:absolute   lag:top-[-9px] left-[calc(50%_-_336.45px)] w-[669.37px] h-[26px]">
          <img
            className="w-full h-full object-contain lag:flex hidden lag:absolute lag:left-[0px] lag:top-[0px] [transform:scale(1.077)]"
            alt=""
            src="/vector-line.svg" //uper white
          />

          <div className="absolute  top-[0px] left-[calc(50%_-_334.69px)] w-[669.37px] h-[26px] flex items-center justify-center"></div>
        </div>
        <div className="absolute top-[79px] left-[calc(50%_-_1015px)] w-[2030px] h-[26px]">
          <img
            className="absolute top-[0px] left-[calc(50%_-_1015px)]  w-[2030px] h-[26px]"
            alt=""
            src="/vector-line2.svg" //dark bottom
          />
          <div className="absolute  lag:flex hidden top-[0px] left-[calc(50%_-_1015px)]  w-[2030px] h-[26px]  items-center justify-center">
            <img
              className="w-[100%] h-[100%] object-contain absolute left-[0px] top-[0px] [transform:scale(1.7)]"
              alt=""
              src="/vector-line3.svg"
            />
          </div>
        </div>

        <div className="flex  justify-end items-center">
        <a href='/'><img
          className="absolute cursor-pointer lag:top-[3px] top-[5px] lag:left-[0px] left-[80px] lag:w-[98px]  lag:h-[70px] h-auto w-auto"
          alt=""
          src="/ees-logo-fcfbfc-1.svg"
        />
        </a>
           
      

        {/* button login /signup */}
        <div>
        <Link to="/login"> 
        <button className="cursor-pointer  [border:none] p-0 bg-[transparent] lag:absolute lag:top-[17px] lag:left-[1149px] w-[116px] h-[38px]">
          <div className="lag:absolute lag:top-[8px] lag:left-[19px] w-[79px] h-6">
            <div className="lag:absolute hidden lag:flex  lag:top-[11px] lag:left-[0px] box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]" />
            <div className="lag:absolute hidden lag:flex lag:top-[13px] lag:left-[79px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]" />
          </div>

          <button className="cursor-pointer flex  glow-animation [border:none] p-0 bg-[transparent] lag:absolute lag:top-[0px] lag:left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center  items-center justify-center w-[116px] h-[38px] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
            Login
          </button>
        </button>
        </Link>
        
        <Link to="/signup">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] lag:absolute lag:top-[17px] lag:left-[1278px] w-[116px] h-[38px]">
          <div className="lag:absolute lag:top-[8px] lag:left-[9px] w-[93px] h-6">
            <div className="lag:absolute  hidden lag:flex lag:top-[11px] lag:left-[0px] box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]" />
            <div className="lag:absolute hidden lag:flex  lag:top-[13px] lag:left-[93px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]" />
          </div>
          <button className=" glow-animation flex  cursor-pointer [border:none] p-0 bg-[transparent] lag:absolute lag:top-[0px] llag:eft-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center items-center justify-center w-[116px] h-[38px]">
            Sign Up
          </button>
        </button>
        </Link>
        </div>
      
        </div>
       
      </div>
    </div>
  );
};

export default Navhome;
