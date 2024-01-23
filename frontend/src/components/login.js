import React from "react";
import "../components/login.css";
import Navhome from "./navhome";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex SignUpPage flex-col  bg-contain w-full h-full text-white justify-center items-center gap-10">
      <Navhome />
      <div className="SignUp-card bg-contain w-[75vw] h-[75vh]">
        <div
          className="SignUp-card-whiteDiv   bg-contain  w-full h-[35%] flex   gap-x-6 md:gap-x-24"
          style={{}}
        >
          <div
            className="EES-logo mt-12 mx-2 md:mx-12 px-4 w-[15%] none"
            style={{ borderRight: "5px dashed black" }}
          ></div>
          <div
            className="SignUp  flex  my-auto  justify-center mb-[20%]   items-center"
            style={{ whiteSpace: "nowrap" }}
          >
            LOGIN
          </div>
        </div>

        <div
          className="SignUp-card-blackDiv  w-full h-[60%] text-white flex relative"
          style={{}}
        >
          <div className="h-[100%] w-[30%]  relative   none" style={{}}>
            <div className=" flex  laptopDesign  translate-x-[-15%] translate-y-[35%] justify-end">
              <svg
                width="10%"
                height="10%"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 0V20H0" stroke="white" stroke-width="2" />
              </svg>
            </div>

            <div className="SignUp-card-blackDiv-whiteEESpattern  w-full h-[50%] mt-[70%] flex justify-center items-center absolute">
              <div className="SignUp-card-blackDiv-eesdesign w-[50%] translate-x-[-1.5rem] translate-y-[0.5rem] h-[50%]  "></div>
            </div>
          </div>

          <div
            className="h-[100%] w-[30%]   overflow-hidden justify-evenly text-white amaan"
            style={{}}
          >
            <form className="w-full h-[90%] m-2">
              <div
                className="relative"
                style={{ width: "contain", gap: "2rem" }}
              >
                <input
                  className="w-[85%] h-[20%] px-4 py-2 mt-12 text-white bg-transparent white-placeholder "
                  type="text"
                  placeholder="NAME"
                  style={{
                    fontFamily: "Goldman",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "1.2px",
                    borderBottom: "1px solid #FFF",
                    color: "white",
                  }}
                />
              </div>
              <div style={{ position: "relative" }}>
                <input
                  className="w-[85%] h-[20%] px-4 py-2 mt-12 bg-transparent white-placeholder "
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
                    color: "white",
                  }}
                />
              </div>
              <button
                type="button"
                class="text-gray-900 bg-gray-100 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-100 font-large rounded-lg text-sm px-4 mt-8 mb-4 py-2.5 text-center"
                style={{
                  width: "95%",
                  fontFamily: "Goldman",
                  justifycontent: "center",
                }}
              >
                Login
              </button>
              <div className="  laptopDesign flex justify-center">
                <svg
                  width="45"
                  height="48"
                  viewBox="0 0 45 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 0V20H0" stroke="white" stroke-width="2" />
                  <path d="M0 28H20V48" stroke="white" stroke-width="2" />
                  <path
                    d="M25 48L25 28L45 28"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </form>

            {/* new code for signUp button and already have an account button mobile view */}
            <div className=" button-container ">
              <p
                style={{
                  alignItems: "center",
                  font: "Goldman",
                  textAlign: "center",
                }}
              >
                Create an account?
              </p>

              <button
                type="button"
                class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center "
                style={{
                  width: "100%",
                  fontFamily: "Goldman",
                  textAlign: "center",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/*  white pattern  border  */}
          <div
            className="h-[80%] w-[10%]  flex items-center ml-[2rem] zigzagPattern "
            style={{}}
          >
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
                  <rect width="50.951" height="271" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <img className="w-[45px] h-[30px] mt-[1%]" src="/Vector_97.svg" alt="" />
          <div
            className="h-[100%] w-[30%] flex flex-col items-center justify-center ButtonContainerRightMostDiv "
            style={{}}
          >
            <div className="rohit74"><img className="w-[80px] h-[69px] flex" style={{"marginLeft":"-76px"}}src="/OR.svg" alt="" />
            <img
              className=" w-[150px] h-[10px]"
              alt=""
              style={{"marginLeft":"-106px"}}
              src="/SIGN UP with google.svg"
            /></div>
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mb-10 flex flex-col items-center justify-between"
            >
              <i className="uil uil-google"style={{"fontSize":"34px","marginTop":"8px","marginLeft":"-100px"}}></i>
            </Link>

            <div className="h-[20%] w-full">
              <div className="w-full mt-[20%] signup-button-blackDivAlreadyHaveAnAccount" style={{"marginTop":"40px","fontSize":"13px"}}>
                Create an account?
              </div>
              <Link to="/signup">
                <button className="w-full h-[70%] cursor-pointer bg-transparent pb-[1.5rem] flex items-center justify-center signup-button-blackDivAlreadyHaveAnAccountButton" style={{"paddingTop":"9px","fontSize":"17px","marginTop":"22px"}}>
                  Sign Up
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
