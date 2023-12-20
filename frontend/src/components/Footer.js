import React from "react";
import Icons from "./icons";
import "./Footer.css";
import Footerlinks from "./Footerlinks";
import FooterInputForm from "./FooterInputForm";

const Footer = () => {
  return (
    <div className="relative footer-container w-full h-fit  text-left text-77xl text-pitchdeck-slide-background font-goldman ">
      <div className="relative max-w-full max-h-fit  flex flex-col items-end justify-center text-mini font-bruno-ace-sc  ">
        <div
          className="relative  flex flex-col w-[95vw]  h-[33.25rem]   shrink-0 "
          style={{ padding: "" }}
        >
          {/* get in touch heading */}
          <div className=" footer-top-section flex items-center justify-center relative w-full h-fit">
            <div className="bg-transparent font-goldman text-[48px] outline-none m-[2rem] border-solid border-2 py-1 border-white tracking-[0.08em] text-pitchdeck-slide-background text-left flex items-center">
              GET IN TOUCH
            </div>

            <div className="footer-line w-[60%] h-[30%] "></div>
          </div>

         

          <div className="footer-content-container  gap-2  flex relative w-full h-[75%]  justify-between">
            <div className=" h-full w-[15%] flex items-center">
              <Icons />
            </div>

            {/* icons and form separating line ka div */}
            <div className="h-full w-0.5 bg-pitchdeck-slide-background" />

            <div className="h-full w-[45%] overflow-hidden  object-contain  flex items-center">
              <FooterInputForm />
            </div>

            {/* icons and form separating line ka div */}
            <div className="h-full w-0.5 bg-pitchdeck-slide-background" />

            <div className="h-full w-[35%] flex items-center">
              <Footerlinks></Footerlinks>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
