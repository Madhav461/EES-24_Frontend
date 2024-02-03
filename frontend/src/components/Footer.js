import React from "react";
import Icons from "./icons";
import "./Footer.css";
import Footerlinks from "./Footerlinks";
import FooterInputForm from "./FooterInputForm";

const Footer = () => {
  return (
    <div className="relative  footer-container w-[auto] h-[auto] bottom-0  text-left text-77xl text-pitchdeck-slide-background font-goldman ">
      <div class="angle-rectangle"></div>
      <div className="relative  max-w-full max-h-fit  flex flex-col items-end justify-center text-mini font-bruno-ace-sc  ">
        <div
          className="relative overflow-hidden flex flex-col w-[95vw]  h-[33.25rem]   shrink-0 "
          style={{ padding: "" }}
        >
    

          {/* get in touch heading */}
          <div className=" footer-top-section flex items-center justify-center relative w-full h-fit">
            <div className="getintouch bg-transparent font-goldman text-[350%] outline-none mt-[3rem] border-solid border-2  border-white tracking-[.2rem] text-pitchdeck-slide-background text-left flex items-center p-[0.5rem]">
              GET IN TOUCH
            </div>

            <div className="footer-line w-[60%] h-[30%]  "></div>
          </div>

          <div className="footer-content-container  gap-2  flex relative w-full h-[75%]  justify-between">
            <div className=" h-full w-[15%] flex items-center overflow-hidden">
              <Icons />
            </div>

            {/* icons and form separating line ka div */}
            <div className="h-[97%] w-0.5  bg-pitchdeck-slide-background overflow-hidden gojosaturro" />

            <div className="h-full w-[45%] overflow-hidden  object-contain  flex items-center forminput">
              <FooterInputForm />
            </div>

            {/* icons and form separating line ka div */}
            <div className="lin">
              <svg
                width="2"
                height="437"
                viewBox="0 0 2 437"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ padding: ".1rem" }}
              >
                <line
                  x1="1"
                  y1="4.37114e-08"
                  x2="0.999981"
                  y2="437"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>

            <div className="h-full w-[35%]  flex items-center input">
              <Footerlinks></Footerlinks>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
