import React from "react";
import "../components/signup.css";
import Navhome from "./navhome";

const Signup = () => {
  return (
    <div className="flex SignUpPage flex-col  bg-contain w-full h-full text-white justify-center items-center gap-10">
      <Navhome />
      <div className="SignUp-card bg-contain w-[75vw] h-[75vh]">
      <div
          className="SignUp-card-whiteDiv   bg-contain  w-[104%] h-[35%] flex   gap-x-6 md:gap-x-24"
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
            SIGN UP
          </div>
        </div>
          <div className="svg-sign">
          <svg className="svg-tab"  width="118%" height="200%" viewBox="0 0 393 295" fill="none" xmlns="http://www.w3.org/2000/svg" style={{}}>
<g filter="url(#filter0_d_319_2)">
<path d="M62.0825 41.3431L46.3431 57.0825C44.8429 58.5828 44 60.6176 44 62.7393V122.169C44 126.587 47.5817 130.169 52 130.169L133.903 130.169C136.025 130.169 138.06 129.326 139.56 127.826L150.559 116.827H252.996L263.994 127.826C265.495 129.326 267.529 130.169 269.651 130.169L356.663 130.169C361.081 130.169 364.663 126.587 364.663 122.169V62.7393C364.663 60.6176 363.82 58.5828 362.32 57.0825L346.581 41.3431C345.08 39.8429 343.045 39 340.924 39H67.7393C65.6176 39 63.5828 39.8429 62.0825 41.3431Z" fill="#E7E7E7"/>
</g>
<path d="M119.389 97C117.667 97 116.4 96.924 115.589 96.772C114.779 96.62 114.373 96.4427 114.373 96.24L115.893 92.934C116.476 93.0353 117.92 93.1367 120.225 93.238C122.556 93.314 125.748 93.352 129.801 93.352H130.523C131.613 93.352 132.385 93.162 132.841 92.782C133.297 92.3767 133.525 91.7053 133.525 90.768V90.008C133.525 89.1213 133.335 88.488 132.955 88.108C132.601 87.728 131.79 87.538 130.523 87.538H121.707C119.149 87.538 117.287 87.0693 116.121 86.132C114.956 85.1693 114.373 83.6113 114.373 81.458V80.85C114.373 79.7353 114.576 78.7093 114.981 77.772C115.412 76.8347 116.134 76.0873 117.147 75.53C118.161 74.9473 119.554 74.656 121.327 74.656H131.663C133.386 74.656 134.779 74.7447 135.843 74.922C136.907 75.0993 137.439 75.2893 137.439 75.492L136.679 78.684C136.021 78.608 134.526 78.532 132.195 78.456C129.865 78.3547 126.736 78.304 122.809 78.304L122.391 78.266C121.226 78.266 120.441 78.5067 120.035 78.988C119.63 79.444 119.415 80.0267 119.389 80.736V81.382C119.389 82.218 119.617 82.8513 120.073 83.282C120.555 83.6873 121.34 83.89 122.429 83.89H130.865C132.487 83.89 133.867 84.0547 135.007 84.384C136.147 84.7133 137.021 85.3213 137.629 86.208C138.237 87.0693 138.541 88.3487 138.541 90.046V90.654C138.541 92.554 138.047 94.0867 137.059 95.252C136.097 96.4173 134.412 97 132.005 97H119.389ZM146.706 97V74.656H151.722V97H146.706ZM167.226 97C165.427 97 164.021 96.7467 163.008 96.24C161.994 95.7333 161.285 94.9733 160.88 93.96C160.474 92.9467 160.272 91.6927 160.272 90.198V81.724C160.272 79.292 160.816 77.506 161.906 76.366C162.995 75.2007 164.768 74.618 167.226 74.618H178.664C180.412 74.618 181.742 74.7193 182.654 74.922C183.591 75.0993 184.06 75.2893 184.06 75.492L183.3 78.646C182.869 78.57 181.59 78.494 179.462 78.418C177.359 78.3167 174.294 78.266 170.266 78.266H168.328C166.301 78.266 165.288 79.1653 165.288 80.964V90.654C165.288 91.5153 165.503 92.1867 165.934 92.668C166.39 93.124 167.188 93.352 168.328 93.352H169.886C172.318 93.352 174.37 93.3393 176.042 93.314C177.714 93.2633 179.094 93.2253 180.184 93.2V88.032L177.904 88.07L172.926 88.45V84.726H185.162V95.404L185.542 96.202C185.542 96.4047 185.01 96.5947 183.946 96.772C182.882 96.924 181.083 97 178.55 97H167.226ZM194.089 97V77.696L193.709 74.656H199.181L212.101 88.184L213.583 90.236H214.001V74.656H219.017V97H214.191L200.967 83.244L199.485 81.458H199.105V97H194.089ZM244.777 97.38C242.472 97.38 240.863 96.7593 239.951 95.518C239.039 94.2767 238.583 92.63 238.583 90.578V74.656H243.599V90.73C243.599 91.9207 243.89 92.7187 244.473 93.124C245.056 93.5293 245.778 93.732 246.639 93.732H254.695C255.506 93.732 256.215 93.5293 256.823 93.124C257.431 92.6933 257.735 91.8953 257.735 90.73V74.656H262.751V90.578C262.751 91.946 262.561 93.1367 262.181 94.15C261.801 95.1633 261.168 95.9613 260.281 96.544C259.394 97.1013 258.166 97.38 256.595 97.38H244.777ZM271.477 97V77.696L271.097 74.618H287.931C289.552 74.618 290.819 74.8333 291.731 75.264C292.668 75.6947 293.352 76.2647 293.783 76.974C294.239 77.658 294.53 78.3927 294.657 79.178C294.783 79.9633 294.847 80.7107 294.847 81.42V83.662C294.847 84.2447 294.758 84.9033 294.581 85.638C294.403 86.3473 294.074 87.044 293.593 87.728C293.111 88.3867 292.415 88.944 291.503 89.4C290.591 89.8307 289.4 90.046 287.931 90.046H284.055C282.459 90.046 280.964 90.008 279.571 89.932C278.203 89.856 277.177 89.7927 276.493 89.742V97H271.477ZM276.493 86.398H286.829C287.969 86.398 288.754 86.1193 289.185 85.562C289.615 85.0047 289.831 84.3333 289.831 83.548V81.154C289.831 80.3433 289.615 79.6593 289.185 79.102C288.754 78.5447 287.981 78.266 286.867 78.266H276.493V86.398Z" fill="black"/>
<defs>
<filter id="filter0_d_319_2" x="-7.6" y="0.400002" width="423.863" height="194.369" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="13"/>
<feGaussianBlur stdDeviation="25.8"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.95 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_2" result="shape"/>
</filter>
</defs>
</svg>
   
      
          </div>
        

        <div
          className="SignUp-card-blackDiv  w-full h-[60%] text-white flex relative"
          style={{alignContent:'center',}}
        >
          <div className="h-[100%] w-[60%]  relative   none" style={{}}>
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

              <div className="SignUp-card-blackDiv-whiteEESpattern  w-full h-[50%] mt-[50%] flex justify-center items-center ">
              <div className="SignUp-card-blackDiv-eesdesign w-[50%] translate-x-[-1.5rem] translate-y-[0.5rem] h-[50%]  "></div>
            </div>
          </div>

          <div
            className="h-[100%] w-[30%]   overflow-hidden justify-evenly text-white amaan"
            style={{}}
          >
            <form className="w-[100%] h-[90%] m-2">
              <div
                className="relative"
                style={{ width: "contain", gap: "2rem" }}
              >
                <input
                  className="w-[85%] h-[20%] px-4 py-2 mb-2 text-white bg-transparent white-placeholder "
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
                  className="w-[85%] h-[20%] px-4 py-2 mb-2 bg-transparent white-placeholder"
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
                    color: "white",
                  }}
                />
              </div>

              <div style={{ position: "relative" }}>
                <input
                  className="w-[85%] h-[20%] px-4 py-2 mb-2 bg-transparent white-placeholder"
                  type="text"
                  placeholder="COLLEGE NAME"
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
                  className="w-[85%] h-[20%] px-4 py-2 mb-2 bg-transparent white-placeholder"
                  type="text"
                  placeholder="YEAR"
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
                  className="w-[85%] h-[20%] px-4 py-2 mb-2 bg-transparent white-placeholder "
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

              <div style={{ position: "relative" }}>
                <input
                  className="w-[85%] h-[20%] px-4 py-2 mb-2 bg-transparent white-placeholder "
                  type="password"
                  placeholder="CONFIRM PASSWORD"
                  style={{
                    fontFamily: "Goldman",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "1.2px",
                    borderBottom: "1px solid #FFF",
                    marginBottom: "8%",
                    color: "white",
                  }}
                />
              </div>
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
              <button
                type="button"
                class="text-gray-900 bg-gray-100 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                style={{ width: "100%", fontFamily: "Goldman" }}
              >
                Sign Up
              </button>
              <p
                style={{
                  alignItems: "center",
                  font: "Goldman",
                  textAlign: "center",
                }}
              >
                Already have an account?
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
                LOG IN
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

          {/* sign up button and already have an account  */}
          <div
            className="h-[100%]    mb-[20%]  w-[30%] flex flex-col items-center justify-between ButtonContainerRightMostDiv "
            style={{}}
          >
            <div className=" laptopDesign  w-full ">
            <svg
                width="30%"
                height="30%"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                 <path d="M20 0V20H0" stroke="white" stroke-width="2" />
              </svg>
            </div>
            <button className="signup-button-blackDiv cursor-pointer w-full bg-transparent h-[20%] flex items-center justify-center">
              SIGN UP
            </button>
            <div className="h-[20%] w-full">
              <div className="w-full signup-button-blackDivAlreadyHaveAnAccount">
                Already have an account?
              </div>
              <button className="w-full h-[70%] cursor-pointer bg-transparent pb-[1.5rem] flex items-center justify-center signup-button-blackDivAlreadyHaveAnAccountButton">
                Log in
              </button>

            </div>
            
   
 </div>

            
         
        
 <svg className="ees-logo-tab" width="173" height="106" viewBox="0 0 173 106" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop:'60%',width:'100%',position:'relative'}}>
<path d="M145 78.4131V92.1886H131.225" stroke="white" stroke-width="2"/>
<path d="M9.99988 37.7754V23.9999H23.7754" stroke="white" stroke-width="2"/>
<g filter="url(#filter0_d_319_2)">
<path d="M16.8877 34.8887C16.8877 32.6795 18.6786 30.8887 20.8877 30.8887H134.378C136.587 30.8887 138.378 32.6795 138.378 34.8887V70.7017C138.378 71.761 137.958 72.777 137.21 73.5269L126.634 84.1271C125.884 84.8792 124.865 85.3019 123.802 85.3019H20.8877C18.6786 85.3019 16.8877 83.5111 16.8877 81.3019V34.8887Z" fill="white"/>
</g>
<path d="M36 66.998V38.678H40.32V66.998H36ZM41.76 66.998V38.678H43.2V66.998H41.76ZM44.64 66.998V38.678H48.96V66.998H44.64ZM53.28 66.998V38.678H54.72V66.998H53.28ZM56.16 66.998V38.678H57.6V66.998H56.16ZM44.112 71.174H50.928V72.278H45.264V75.926H49.968V77.078H45.264V81.206H50.88V82.31H44.112V71.174ZM62.6625 66.998V38.678H66.9825V66.998H62.6625ZM68.4225 66.998V38.678H69.8625V66.998H68.4225ZM71.3025 66.998V38.678H75.6225V66.998H71.3025ZM79.9425 66.998V38.678H81.3825V66.998H79.9425ZM82.8225 66.998V38.678H84.2625V66.998H82.8225ZM70.7745 71.174H77.5905V72.278H71.9265V75.926H76.6305V77.078H71.9265V81.206H77.5425V82.31H70.7745V71.174ZM89.325 66.998V38.678H90.765V66.998H89.325ZM92.205 66.998V38.678H96.525V66.998H92.205ZM97.965 66.998V38.678H99.405V66.998H97.965ZM100.845 66.998V38.678H105.165V66.998H100.845ZM109.485 66.998V38.678H110.925V66.998H109.485ZM100.797 82.502C99.357 82.502 98.189 82.022 97.293 81.062L97.965 79.958L98.013 79.814L98.157 79.862C98.157 79.894 98.173 79.958 98.205 80.054C98.205 80.118 98.237 80.198 98.301 80.294C98.333 80.358 98.397 80.422 98.493 80.486C99.165 81.062 99.997 81.35 100.989 81.35C101.629 81.35 102.173 81.174 102.621 80.822C103.069 80.438 103.293 79.99 103.293 79.478C103.293 79.126 103.213 78.822 103.053 78.566C102.925 78.342 102.685 78.118 102.333 77.894C101.981 77.67 101.437 77.398 100.701 77.078C99.613 76.662 98.829 76.182 98.349 75.638C97.901 75.094 97.677 74.486 97.677 73.814C97.677 72.982 97.981 72.31 98.589 71.798C99.197 71.286 100.013 71.03 101.037 71.03C101.645 71.03 102.221 71.158 102.765 71.414C103.277 71.67 103.741 72.006 104.157 72.422L103.341 73.526L103.245 73.43C103.245 73.398 103.229 73.35 103.197 73.286C103.197 73.19 103.165 73.11 103.101 73.046C103.069 72.95 103.005 72.87 102.909 72.806C102.653 72.55 102.349 72.358 101.997 72.23C101.677 72.134 101.293 72.086 100.845 72.086C100.269 72.086 99.821 72.246 99.501 72.566C99.149 72.886 98.973 73.27 98.973 73.718C98.973 74.07 99.037 74.374 99.165 74.63C99.325 74.886 99.597 75.126 99.981 75.35C100.365 75.606 100.941 75.878 101.709 76.166C102.765 76.614 103.501 77.062 103.917 77.51C104.301 77.99 104.493 78.582 104.493 79.286C104.493 79.83 104.365 80.342 104.109 80.822C103.821 81.302 103.405 81.702 102.861 82.022C102.285 82.342 101.597 82.502 100.797 82.502Z" fill="url(#paint0_linear_319_2)"/>
<defs>
<filter id="filter0_d_319_2" x="0.687695" y="0.688671" width="171.89" height="104.813" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="-5"/>
<feGaussianBlur stdDeviation="12.6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.95 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_2" result="shape"/>
</filter>
<linearGradient id="paint0_linear_319_2" x1="77.7194" y1="27.872" x2="77.7194" y2="96.9318" gradientUnits="userSpaceOnUse">
<stop stop-color="#080101"/>
<stop offset="0.380208" stop-color="#080101" stop-opacity="0.6"/>
<stop offset="0.578125" stop-color="#080101"/>
<stop offset="0.729167" stop-color="#080101" stop-opacity="0.641975"/>
<stop offset="1" stop-color="#080101" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
      </div>


    </div> </div>
  );
};

export default Signup;
