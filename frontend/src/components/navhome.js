import React from "react";
import "./nav.css";

const Navhome = () => {
  return (
    <div>
      <div className="relative  bg-gray w-[100vw] h-[110px] overflow-hidden text-center text-base text-white font-audiowide">
        <ul
          className="m-0  absolute top-[55px] left-[480px] w-[555px] h-[38px]"
          id="list"
          list="none"
        >
          <div className="absolute  top-[0px] left-[154px] tracking-[0.08em] flex items-center justify-center w-[137px] h-[38px] glow-text cursor-pointer">
            Workshops
          </div>
          <div className="absolute top-[0px] left-[439px] tracking-[0.08em] flex items-center justify-center w-[116px] h-[38px] glow-text cursor-pointer">
            Sponsors
          </div>
          <div className="absolute top-[0px] left-[315px] tracking-[0.08em] flex items-center justify-center w-[94px] h-[38px] glow-text cursor-pointer">
            Gallery
          </div>
          <div className="absolute top-[0px] left-[0px] tracking-[0.08em] flex items-center justify-center w-[129px] h-[38px] glow-text cursor-pointer">
            Schedule
          </div>
          <div className="absolute top-[0px] left-[0px] tracking-[0.08em] flex items-center justify-center w-[129px] h-[38px] glow-text cursor-pointer">
            Schedule
          </div>
        </ul>
        <div className="absolute top-[-9px] left-[calc(50%_-_336.45px)] w-[669.37px] h-[26px]">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.077)]"
            alt=""
            src="/vector-line.svg" //uper white
          />

          <div className="absolute top-[0px] left-[calc(50%_-_334.69px)] w-[669.37px] h-[26px] flex items-center justify-center"></div>
        </div>
        <div className="absolute top-[79px] left-[calc(50%_-_1015px)] w-[2030px] h-[26px]">
          <img
            className="absolute top-[0px] left-[calc(50%_-_1015px)]  w-[2030px] h-[26px]"
            alt=""
            src="/vector-line2.svg" //dark bottom
          />
          <div className="absolute top-[0px] left-[calc(50%_-_1015px)]  w-[2030px] h-[26px] flex items-center justify-center">
            <img
              className="w-[100%] h-[100%] object-contain absolute left-[0px] top-[0px] [transform:scale(1.7)]"
              alt=""
              src="/vector-line3.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[3px] left-[0px] w-[98px] h-[70px]"
          alt=""
          src="/ees-logo-fcfbfc-1.svg"
        />

        {/* button login /signup */}
        <button className="cursor-pointer  [border:none] p-0 bg-[transparent] absolute top-[17px] left-[1149px] w-[116px] h-[38px]">
          <div className="absolute top-[8px] left-[19px] w-[79px] h-6">
            <div className="absolute top-[11px] left-[0px] box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]" />
            <div className="absolute top-[13px] left-[79px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]" />
          </div>

          <button className="cursor-pointer glow-animation [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center flex items-center justify-center w-[116px] h-[38px] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
            Login
          </button>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[17px] left-[1278px] w-[116px] h-[38px]">
          <div className="absolute top-[8px] left-[9px] w-[93px] h-6">
            <div className="absolute top-[11px] left-[0px] box-border w-3 h-[13px] border-b-[1px] border-solid border-white border-l-[1px]" />
            <div className="absolute top-[13px] left-[93px] box-border w-3 h-[13px] [transform:_rotate(180deg)] [transform-origin:0_0] border-b-[1px] border-solid border-white border-l-[1px]" />
          </div>
          <button className=" glow-animation cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base tracking-[0.08em] font-audiowide text-white text-center flex items-center justify-center w-[116px] h-[38px]">
            Sign Up
          </button>
        </button>
      </div>
    </div>
  );
};

export default Navhome;
