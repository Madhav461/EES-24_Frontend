import React from "react";

const Footerlinks = () => {
  return (
    <div className="flex w-full pb-14 md:pb-28 justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center w-[35%] relative">
        <div className="Links-heading flex items-center">
          <h4 className="text-inherit tracking-[0.08em] font-normal font-goldman flex items-center transform -rotate-90">
            QUICK
          </h4>
          <h2 className="text-5xl md:text-45xl tracking-[0.08em] font-normal font-goldman flex items-center">
            LINKS
          </h2>
        </div>

        <div className="">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="relative mb-4">
              <a className="[text-decoration:none] w-full h-11 flex flex-row items-start justify-start gap-6 md:gap-12 text-[inherit] ">
                <div className="relative">
                  <div className="absolute w-3/4 md:w-[306px] h-[41px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.22)]"
                      alt=""
                      src="/vector-74@2x.png"
                    />
                  </div>
                  <div className="bg-black w-full md:w-[310px] h-[33px] relative flex items-center justify-center">
                    <a className="absolute   cursor-pointer items-center px-2 py-2">
                      Links
                    </a>
                  </div>
                </div>
                <img
                  className="relative w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/vector-76@2x.png"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footerlinks;
