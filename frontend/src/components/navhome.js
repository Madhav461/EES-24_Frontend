import React from "react";
import "./nav.css";

const Navhome = () => {
  return (
    <div>
      <div className="relative z-0 bg-gray md:w-[100vw] md:h-[110px] h-[80px] w-[100vw] overflow-hidden text-center text-base text-white font-audiowide">
        <ul
          className="m-0 hidden md:flex justify-evenly items-center absolute top-[55px] left-[453px] w-[555px] h-[38px]"
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
        <div className=" md:flex hidden md:absolute   md:top-[-9px] left-[calc(50%_-_336.45px)] w-[669.37px] h-[26px]">
          <img
            className="w-full h-full object-contain md:flex hidden md:absolute md:left-[0px] md:top-[0px] [transform:scale(1.077)]"
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
          <div className="absolute  md:flex hidden top-[0px] left-[calc(50%_-_1015px)]  w-[2030px] h-[26px]  items-center justify-center">
            <img
              className="w-[100%] h-[100%] object-contain absolute left-[0px] top-[0px] [transform:scale(1.7)]"
              alt=""
              src="/vector-line3.svg"
            />
          </div>
        </div>

        <div className="flex  justify-end items-center">
        <img
          className="absolute md:top-[3px] top-[5px] left-[0px] w-[98px] h-[70px]"
          alt=""
          src="/ees-logo-fcfbfc-1.svg"
        />

        {/* button login /signup */}
        <div>
        <button className="cursor-pointer  [border:none] p-0 bg-[transparent] md:absolute md:top-[17px] md:left-[1149px] w-[116px] h-[38px]">
          <div className="md:absolute md:top-[8px] md:left-[19px] w-[79px] h-6">
            <div className="md:absolute hidden md:flex  md:top-[11px] md:left-[0px] box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]" />
            <div className="md:absolute hidden md:flex md:top-[13px] md:left-[79px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]" />
          </div>

          <button className="cursor-pointer flex  glow-animation [border:none] p-0 bg-[transparent] md:absolute md:top-[0px] md:left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center  items-center justify-center w-[116px] h-[38px] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
            Login
          </button>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] md:absolute md:top-[17px] md:left-[1278px] w-[116px] h-[38px]">
          <div className="md:absolute md:top-[8px] md:left-[9px] w-[93px] h-6">
            <div className="md:absolute  hidden md:flex md:top-[11px] md:left-[0px] box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]" />
            <div className="md:absolute hidden md:flex  md:top-[13px] md:left-[93px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]" />
          </div>
          <button className=" glow-animation flex  cursor-pointer [border:none] p-0 bg-[transparent] md:absolute md:top-[0px] lmd:eft-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center items-center justify-center w-[116px] h-[38px]">
            Sign Up
          </button>
        </button>
        </div>
      
        </div>
       
      </div>
    </div>
  );
};

export default Navhome;
