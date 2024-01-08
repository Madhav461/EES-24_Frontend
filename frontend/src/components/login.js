import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Navhome from "./navhome";
const Login = () => {
  return (
    <>
    <div className="z-20">
      <Navhome />
      </div>
      <div className="flex items-center justify-center relative">
        <img
          className="w-[1200px] h-[350px] object-center  mt-40 ml-8"
          alt=""
          src="/vector 92 (1).svg"
        />

        <img
          className=" w-[860px] h-[240px] top-0 mt-8 ml-16 absolute"
          alt=""
          src="/vector 91.svg"
        />
        <img
          className=" w-[180px] h-[110px] mt-24 top-0 left-96 absolute"
          alt=""
          src="/ees_logo_FCFBFC 1 (1).svg"
        />
        <img
          className=" w-[211px] h-[80px] top-0 mt-28 absolute mr-80"
          alt=""
          src="/Group 271.svg"
        />
        <img
          className=" w-[22px] h-[22px] mt-56 top-0 absolute right-96"
          alt=""
          src="/Group 284.svg"
        />
        <img
          className=" w-[22px] h-[22px] mt-60 top-0 absolute right-96"
          alt=""
          src="/Group 285.svg"
        />
        <img
          className=" w-[200px] h-[40px] mt-32 top-0 absolute ml-60"
          alt=""
          src="/LOG IN.svg"
        />
        <img
          className=" w-[13px] h-[13px] mt-64 top-0 absolute ml-48"
          alt=""
          src="/Vector_96.svg"
        />
        <img
          className=" w-[13px] h-[13px] mt-64 top-0 absolute mr-96"
          alt=""
          src="/Vector_97.svg"
        />
        <img
          className=" w-[80px] h-[69px] mt-64 top-0 absolute mr-24 right-96"
          alt=""
          src="/OR.svg"
        />
        <img
          className=" w-[230px] h-[180px] mt-96 top-0 absolute left-96"
          alt=""
          src="/Vector 93 (1).svg"
        />
        <img
          className=" w-[150px] h-[100px] mt-96 top-12 absolute ml-8 left-96"
          alt=""
          src="/ees.svg"
        />
        <img
          className=" w-[150px] h-[100px] mt-64 top-4 absolute right-96 mr-16"
          alt=""
          src="/SIGN UP with google.svg"
        />
        <img
          className=" w-[150px] h-[100px] mt-96 top-6 absolute right-96 mr-16"
          alt=""
          src="/Create an account_.svg"
        />
        <Link to="/signup">
          <img
            className=" max-w-[200px] max-h-auto mt-96 top-24 absolute right-96 mr-12"
            alt=""
            src="/Vector_94.svg"
          />
          <img
            className=" max-w-auto max-h-auto mt-96 top-24 absolute right-96 mr-28"
            alt=""
            src="/Sign Up.svg"
          />
        </Link>
      </div>
    </>
  );
};

export default Login;
