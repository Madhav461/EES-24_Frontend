// Signup.js

import React from "react";
import "../components/login.css"; // Adjust the path accordingly
import Navhome from "./navhome";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex login-page flex-col w-full h-full text-white justify-center items-center gap-10">
      <Navhome />
      <div className="SignUp-card bg-contain w-[75vw] h-[75vh]">
        <div className="SignUp-card-whiteDiv w-[100%] h-[35%] bg-contain flex  gap-x-24">
          <div
            className="EES-logo mt-12 mx-12 px-4 w-[15%]"
            style={{ borderRight: "5px dashed black" }}
          ></div>
          <div className="SignUp-card-heading w-full mt-4 md:mt-20 h-[60%] text-center md:w-[50%] text-lg md:text-2xl lg:text-3xl">
            LOGIN
          </div>
        </div>
        <div className="SignUp-card-blackDiv w-[100%] h-[60%] text-white flex relative">
          <div className="h-[100%] w-[30%]   relative ">
            <div className="SignUp-card-blackDiv-whiteEESpattern w-[100%] h-[50%] mt-[70%] flex justify-center items-center absolute">
              <div className="SignUp-card-blackDiv-eesdesign w-[50%] translate-x-[-1.5rem] translate-y-[0.5rem] h-[50%] "></div>
            </div>
          </div>
          <div className="h-[100%] w-[30%]    overflow-hidden  justify-evenly  text-white">
            <form className="w-full h-[90%]  m-2   ">
              <div style={{ position: "relative" }}>
                <input
                  className="w-fit text-white h-[20%] px-4 py-2 mt-16 bg-transparent white-placeholder"
                  type="text"
                  placeholder="EMAIL"
                  style={{
                    fontFamily: "Goldman",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "1.2px",
                    borderBottom: "1px solid #FFF",
                  }}
                />
              </div>

              <div style={{ position: "relative" }}>
                <input
                  className="w-fit text-white h-[20%] px-4 py-2 mt-12 bg-transparent white-placeholder"
                  type="password"
                  placeholder="PASSWORD"
                  style={{
                    fontFamily: "Goldman",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "1.2px",
                    borderBottom: "1px solid #FFF",
                  }}
                />
              </div>
              <button className="signup-button-blackDiv cursor-pointer w-[270px] bg-transparent h-[20%] mt-16 flex items-center justify-center  ">
                LOGIN
              </button>
            </form>
          </div>

          {/* zig zag pattern */}
          <div className="h-[80%] w-[10%] flex items-center   ml-[2rem]">
            <svg
              width="100%"
              height="90%"
              viewBox="0 0 51 271"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1692_2)">
                <rect
                  x="-40"
                  y="-145.857"
                  width="20"
                  height="342.201"
                  transform="rotate(-45 -40 -145.857)"
                  fill="white"
                />
                <rect
                  x="-39.4736"
                  y="-88.8574"
                  width="20"
                  height="342.201"
                  transform="rotate(-45 -39.4736 -88.8574)"
                  fill="white"
                />
                <rect
                  x="-38.9473"
                  y="-31.8574"
                  width="20"
                  height="342.201"
                  transform="rotate(-45 -38.9473 -31.8574)"
                  fill="white"
                />
                <rect
                  x="-38.4209"
                  y="25.1426"
                  width="20"
                  height="342.201"
                  transform="rotate(-45 -38.4209 25.1426)"
                  fill="white"
                />
                <rect
                  x="-37.8945"
                  y="82.1426"
                  width="20"
                  height="342.201"
                  transform="rotate(-45 -37.8945 82.1426)"
                  fill="white"
                />
                <rect
                  x="-37.3682"
                  y="139.143"
                  width="20"
                  height="342.201"
                  transform="rotate(-45 -37.3682 139.143)"
                  fill="white"
                />
                <rect
                  x="-36.8418"
                  y="196.143"
                  width="20"
                  height="342.201"
                  transform="rotate(-45 -36.8418 196.143)"
                  fill="white"
                />
                <rect
                  x="-36.3154"
                  y="253.143"
                  width="20"
                  height="342.201"
                  transform="rotate(-45 -36.3154 253.143)"
                  fill="white"
                />
                <rect
                  x="-53.5264"
                  y="-131.384"
                  width="20"
                  height="339.036"
                  transform="rotate(-45 -53.5264 -131.384)"
                  fill="#1B1515"
                />
                <rect
                  x="-53"
                  y="-74.3848"
                  width="20"
                  height="339.036"
                  transform="rotate(-45 -53 -74.3848)"
                  fill="#1B1515"
                />
                <rect
                  x="-52.4736"
                  y="-17.3848"
                  width="20"
                  height="339.036"
                  transform="rotate(-45 -52.4736 -17.3848)"
                  fill="#1B1515"
                />
                <rect
                  x="-51.9473"
                  y="39.6152"
                  width="20"
                  height="339.036"
                  transform="rotate(-45 -51.9473 39.6152)"
                  fill="#1B1515"
                />
                <rect
                  x="-51.4209"
                  y="96.6152"
                  width="20"
                  height="339.036"
                  transform="rotate(-45 -51.4209 96.6152)"
                  fill="#1B1515"
                />
                <rect
                  x="-50.8945"
                  y="153.615"
                  width="20"
                  height="339.036"
                  transform="rotate(-45 -50.8945 153.615)"
                  fill="#1B1515"
                />
                <rect
                  x="-50.3682"
                  y="210.615"
                  width="20"
                  height="339.036"
                  transform="rotate(-45 -50.3682 210.615)"
                  fill="#1B1515"
                />
                <rect
                  x="-49.8418"
                  y="267.615"
                  width="20"
                  height="339.036"
                  transform="rotate(-45 -49.8418 267.615)"
                  fill="#1B1515"
                />
              </g>
              <defs>
                <clipPath id="clip0_1692_2">
                  <rect width="50.951" height="272" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className=" h-[100%] w-[30%] flex flex-col items-center justify-between  ">
            <img className="w-[80px] h-[69px] mt-16" src="/OR.svg" alt="" />
            <img
              className=" w-[150px] h-[100px] absolute mt-20"
              alt=""
              src="/SIGN UP with google.svg"
            />
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mb-10 flex flex-col items-center justify-between"
            >
              <i className="uil uil-google"></i>
            </Link>
            <div className=" h-[20%] w-[100%] ">
              <div className="w-[100%] signup-button-blackDivAlreadyHaveAnAccount">
                Create an account?
              </div>
              <Link to="/signup">
                <button className=" w-[100%] h-[70%] cursor-pointer bg-transparent pb-[1.5rem] flex items-center justify-center  signup-button-blackDivAlreadyHaveAnAccountButton">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
