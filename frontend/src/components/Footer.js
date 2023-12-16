import React from "react";
import Icons from'./SocialIcons';
import Triangle from "./triangle";
import VerticalLine from "./lins";
const Footer = () => {
  return (
    <div className="relative  w-full h-[8088px] overflow-hidden text-left text-77xl text-pitchdeck-slide-background font-goldman">
      <div className="relative top-[7432px] left-[-295px] w-[1728px] overflow-hidden flex flex-col items-end justify-center text-mini font-bruno-ace-sc">
        <div className="relative w-[1468px] h-[771px] overflow-hidden shrink-0 " style={{padding:''}}>
          {/* this is the background image  */}
          <img
            className="absolute top-[127px] left-[28px] w-[1440px] h-[644px] object-cover"
            alt=""
            src="/rectangle-58@2x.png"
          />
          <div className="absolute top-[294px] left-[1444px] w-6 h-12 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[-4px] top-[0px] [transform:scale(1.333)]"
              alt=""
              src="/group-236@2x.png"
            />
          </div>
          <div className="absolute top-[220px] left-[1444px] w-6 h-[41.5px] flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[-4px] top-[0px] [transform:scale(1.386)]"
              alt=""
              src="/group-235@2x.png"
            />
          </div>

          {/* zig-zag pattern at the bottom of input tag */}
          <div className="absolute top-[590px] left-[343px] text-77xl font-libre-barcode-39 whitespace-pre-wrap inline-block w-[10rem]  h-[66px]" style={{margin:'2rem'}}>{`Elecyvt  s `}</div>

          {/* <div className="absolute top-[69px] left-[0px] w-[70.71px] h-[88px] flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[77px] top-[21px] [transform:scale(3.182)]"
              alt=""
              src="/frame-188@2x.png"
            />
          </div> */}
          {/* <div className="absolute top-[0px] left-[1333px] w-[70.71px] h-[88px] flex flex-col items-start justify-end py-11 pr-[14.26552963256836px] pl-0 box-border triangle2" style={{
            marginTop:'42px',
            marginLeft:'70px',
            transform:'rotate(180deg)',
          }}> */}
            {/* <div className="relative bg-pitchdeck-slide-background w-[100.45px] h-[10000.45px] [transform:_rotate(-51.22deg)]" style={{marginTop:'50px'}} />
            <div className="relative bg-pitchdeck-slide-background [filter:blur(154.3px)] w-[56.45px] h-[56.45px] [transform:_rotate(-51.22deg)] mt-[-70px]" />
          </div> */}
          {/* <Triangle/>
         </div> */}
          <div className="absolute top-[141px] left-[108px] w-[472px] h-[514px]">
            <Icons/>
            <div className="absolute top-[0px] left-[0px] box-border w-[472px] h-[89.99px] border-[2px] border-solid border-pitchdeck-slide-background" />
            <div className="absolute top-[88.13px] left-[143px] box-border w-0.5 h-[426.87px] border-r-[2px] border-solid border-pitchdeck-slide-background" />
          </div>
          {/* <div className="absolute top-[217px] left-[943px] box-border w-0.5 h-[439px] border-r-[2px] border-solid border-pitchdeck-slide-background" /> */}

         

          {/* text field are the left side form */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className=" z-4 p-4 bg-black placeholder-pitchdeck-slide-background rounded-sm  font-bruno-ace-sc text-pitchdeck-slide-background  top-[299px] left-[372px] absolute w-[415.99969482421875px] h-[3rem] "
            ></input>
            {/* design of input tag */}
            {/* <img
              className="absolute  z-0 top-[310px] left-[402px] w-[355px] object-contain  [transform:scale(1.22)]"
              alt=""
              src="/vector-74@2x.png"
            /> */}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Contact"
              className=" p-4 bg-black   placeholder-pitchdeck-slide-background rounded-sm  font-bruno-ace-sc text-pitchdeck-slide-background  top-[399px] left-[372px] absolute w-[415.99969482421875px] h-[3rem] "
            ></input>
            {/* design of input tag */}
            {/* <img
              className="absolute top-[25.5rem] left-[402px] w-[355px] object-contain  [transform:scale(1.22)]"
              alt=""
              src="/vector-74@2x.png"
            /> */}
          </div>

          <div>
            <input
              type="text"
              placeholder="message"
              className="p-4  bg-black   placeholder-pitchdeck-slide-background rounded-sm  font-bruno-ace-sc text-pitchdeck-slide-background  top-[489px] left-[372px] absolute w-[415.99969482421875px] h-[5rem] "
            ></input>
            {/* <img
              className="absolute top-[33.5rem] left-[402px] w-[355px] object-contain  [transform:scale(1.22)]"
              alt=""
              src="/vector-74@2x.png"
            /> */}
          </div>

          {/* links ka starting */}
          <h2 className="m-0 absolute top-[274px] left-[1081px] text-45xl tracking-[0.08em] font-normal font-goldman flex items-center w-[235px] h-[46px]">
            LINKS
          </h2>

          {/* get in touch heading */}
          <div className="[border:none] bg-[transparent] font-goldman text-[48px] [outline:none] absolute top-[149px] left-[128px] tracking-[0.08em] text-pitchdeck-slide-background text-left flex items-center w-[432px] h-[88px]">
            GET IN TOUCH
          </div>

          {/* this is the code for a link container */}
          <div>
            <div className="">
            <Triangle/></div>
            {/* quick vertical text */}
            <h4 className="m-0 absolute top-[328px] left-[1050px] text-inherit tracking-[0.08em] font-normal font-goldman flex items-center w-[69px] h-[31px] [transform:_rotate(-90deg)] [transform-origin:0_0]">{`QUICK `}</h4>

            <div>
              <img
                className="absolute top-[166px] left-[580px]  h-[27px] object-cover"
                alt=""
                src="/vector-75@2x.png"
              />
                <img
                className="absolute top-[1660px] left-[580px]  h-[57px] object-cover rotate-90"
                alt=""
                src="/vector-85@2x.png"
              />
              <a className="[text-decoration:none] absolute top-[366px] left-[1018px] w-[366px] h-1 flex flex-row items-start justify-start gap-[27px] text-[inherit]">
                <div className="relative w-[306px] h-11">
                  <div className="absolute top-[3px] left-[0px] w-[306px] h-[41px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.22)]"
                      alt=""
                      src="/vector-74@2x.png"
                    />
                  </div>
                  <div className="bg-black w-[310px] h-[33px] relative  flex">
                    <a className="absolute  cursor-pointer items-center px-2 py-2 ">
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

            {/* 4th link */}
            <div className=" translate-y-[40px] ">
              <a className="[text-decoration:none] absolute top-[366px] left-[1018px] w-[366px] h-11 flex flex-row items-start justify-start gap-[27px] text-[inherit]">
                <div className="relative w-[306px] h-11">
                  <div className="absolute top-[3px] left-[0px] w-[306px] h-[41px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.22)]"
                      alt=""
                      src="/vector-74@2x.png"
                    />
                  </div>
                  <div className="bg-black w-[310px] h-[33px] relative  flex">
                    <a className="absolute  cursor-pointer items-center px-2 py-2 ">
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

            {/* 2nd link */}
            <div className=" translate-y-[-95px] ">
              <a className="[text-decoration:none] absolute top-[366px] left-[1018px] w-[366px] h-11 flex flex-row items-start justify-start gap-[27px] text-[inherit]">
                <div className="relative w-[306px] h-11">
                  <div className="absolute top-[3px] left-[0px] w-[306px] h-[41px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.22)]"
                      alt=""
                      src="/vector-74@2x.png"
                    />
                  </div>
                  <div className="bg-black w-[310px] h-[33px] relative  flex">
                    <a className="absolute  cursor-pointer items-center px-2 py-2 ">
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

            {/* 3rd link */}
            <div className=" translate-y-[-28px] ">
              <a className="[text-decoration:none] absolute top-[366px] left-[1018px] w-[366px] h-11 flex flex-row items-start justify-start gap-[27px] text-[inherit]">
                <div className="relative w-[306px] h-11">
                  <div className="absolute top-[3px] left-[0px] w-[306px] h-[41px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.22)]"
                      alt=""
                      src="/vector-74@2x.png"
                    />
                  </div>
                  <div className="bg-black w-[310px] h-[33px] relative  flex">
                    <a className="absolute  cursor-pointer items-center px-2 py-2 ">
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
          </div>

          {/* design of plus design from links */}

          <div className="absolute top-[414px] left-[992px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>

          <div className="absolute top-[481px] left-[992px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[548px] left-[992px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[615px] left-[992px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[522px] left-[349px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[409px] left-[349px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[292px] left-[349px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[414px] left-[1333px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[481px] left-[1333px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[548px] left-[1333px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[615px] left-[1333px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[414px] left-[1394px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[481px] left-[1394px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[548px] left-[1394px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>
          <div className="absolute top-[615px] left-[1394px] w-2.5 h-2.5 flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/group-204@2x.png"
            />
          </div>

          {/* arrow design in top left below get in touch heading */}
          <div className="absolute top-[262px] left-[272px] w-[13px] h-[13px] flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(3.277)]"
              alt=""
              src="/group-215@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[2138px] left-[-113px] box-border w-0.5 h-[1442px] border-r-[2px] border-solid border-pitchdeck-slide-background" />
    </div>
  );
};

export default Footer;