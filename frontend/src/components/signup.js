import React, { useEffect, useContext, useState } from "react";
import "../components/signup.css";
import Navhome from "./navhome";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import Collegelist from "./collegelist";
import GoogleButton from "react-google-button";
import queryString from "query-string";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// function getElementValue(id) {
//   const element = document.getElementById(id);

//   // Check if the element exists before accessing its value
//   return element ? element.value : "";
// }

// function getSelectValue(id) {
//   const selectElement = document.getElementById(id);

//   // Check if the select element exists and has selected options
//   if (selectElement && selectElement.options) {
//     const selectedOption = selectElement.options[selectElement.selectedIndex];
//     return selectedOption ? selectedOption.value : "";
//   }

//   return "";
// }

const Signup = () => {
  // const [loading, setLoading] = useState(false);
  const { googleAuthenticate, pageloading, signUpUser, setPageLoading } =
    useContext(AuthContext);

  const onGoogleLoginSuccess = async () => {
    setPageLoading(true);
    try {
      const res = await axios.get(
        `https://api.eesiitbhu.co.in/api/user/auth/social/o/google-oauth2?redirect_uri=${window.location.href}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      window.location = res.data.authorization_url;
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong _sign_3!", {
        position: "bottom-right"
      });
    }
    setPageLoading(false);
  };

  let location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    // console.log("State : " + state)
    // console.log("Code : " + code)
    let mounted = true;
    if (mounted) {
      try {
        googleAuthenticate(state, code);
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong_sign 1 !", {
          position: "bottom-right"
        });
      }
    }

    return () => {
      mounted = false;
    };
  }, [location]);

  // function showFormData() {
  //   console.log(formData);

  //
  // }

  const onSubmit = async (values, actions) => {
    console.log(values);
    try {
      signUpUser(values);
      // toast.success("Signed up succesfully!", {
      //   position: "bottom-right"
      // });

    } catch (err) {
      toast.error("Something went wrong _sign_2!", {
        position: "bottom-right"
      });
      console.error(err);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      CollegeName: "",
      password: "",
      confirmPassword: "",
      name: "",
      year: 0,
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return pageloading ? (
    <Spinner />
  ) : (
    <div
      className="flex SignUpPage  flex-col  bg-contain w-100vw h-100vh text-white justify-center items-center gap-10"
      style={{}}
    >
      <Navhome />
      <div className="SignUp-card  w-[75vw] h-[80vh]" style={{}}>
        <div
          className="SignUp-card-whiteDiv bg-contain  w-full h-[35%] flex   gap-x-6 md:gap-x-24"
          style={{}}
        >
          <div
            className="EES-logo mt-12 mx-2 md:mx-12 px-4 w-[15%] none"
            style={{ borderRight: "3px dashed black" }}
          ></div>

          <div
            className="SignUp flex my-auto  justify-center mb-[20%] items-center"
            style={{ whiteSpace: "nowrap", fontSize: "2.5rem" }}
          >
            SIGN UP
          </div>
        </div>
        <div
          className="SignUp-card-blackDiv w-[96%] h-[60%] text-white  relative"
          style={{
            paddingTop: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginTop: "0px",
          }}
        >
          <div
            className="h-[100%] w-[30%]  flex flex-col relative     none"
            style={{}}
          >
            <div className="laptopDesignElement flex justify-end  w-[100%] h-[20%]">
              <svg
                width="65%"
                height="65%"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 0V20H0" stroke="white" stroke-width="2" />
              </svg>
            </div>
            <div className="SignUp-card-blackDiv-whiteEESpattern w-full h-[50%] mt-[70%] flex justify-center items-center absolute">
              <div className="SignUp-card-blackDiv-eesdesign w-[50%] translate-x-[-1.5rem] translate-y-[0.5rem] h-[50%]  "></div>
            </div>
          </div>

          <div
            className="h-[100%] w-[30%]   overflow-hidden justify-evenly items-center text-white amaan"
            style={{}}
          >
            <form
              className="w-full h-[75%] m-2 formDiv"
              id="myForm"
              style={{}}
              onSubmit={handleSubmit}
            >
              <div
                className="relative"
                style={{ width: "contain", gap: "2rem" }}
              >
                <input
                  value={values.name}
                  onChange={handleChange}
                  className=""
                  type="text"
                  id="name"
                  placeholder="NAME"
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

              <div
                className="relative"
                style={{ width: "contain", gap: "2rem" }}
              >
                <label htmlFor="email"></label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="EMAIL"
                  type="email"
                  className={errors.email && touched.email ? "input-error" : ""}
                  onBlur={handleBlur}
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
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>

              <div
                className="relative"
                style={{ width: "contain", gap: "2rem" }}
              >
                <div>
                  <select
                    value={values.CollegeName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="CollegeName"
                    style={{
                      fontFamily: "Goldman",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "1.2px",
                      borderBottom: "1px solid #FFF",
                      width: "94%", // Set the width as needed
                      padding: "0.25rem 0.2rem",
                      color: "white",
                      background: "transparent",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  >
                    <option
                      style={{ color: "black" }}
                      value=""
                      disabled
                      selected
                    >
                      COLLEGE NAME
                    </option>
                    <Collegelist />
                  </select>
                  {errors.CollegeName && touched.CollegeName && (
                    <p className="error">{errors.CollegeName}</p>
                  )}
                </div>
              </div>
              <div
                className="relative"
                style={{ width: "contain", gap: "2rem" }}
              >
                <input
                  className=" "
                  type="number"
                  value={values.year}
                  id="year"
                  onBlur={handleBlur}
                  min="1"
                  onChange={handleChange}
                  max="5"
                  placeholder="YEAR"
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

              <div
                className="relative"
                style={{ width: "contain", gap: "2rem" }}
              >
                <input
                  id="password"
                  type="password"
                  placeholder="PASSWORD"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : ""
                  }
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

                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>

              <div
                className="relative"
                style={{ width: "contain", gap: "2rem" }}
              >
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-error"
                      : ""
                  }
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
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>
            </form>
            <div className="w-[120%] h-[20%] flex  justify-center items-center laptopDesignElement ">
              <button
                form="myForm"
                id="myForm"
                onClick={handleSubmit}
                type="button"
                className="SignUpBtnForMobileView"
                class="text-gray-900 bg-gray-100 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                style={{
                  fontFamily: "Goldman",
                  padding: "0.5rem 1rem", // Adjusted padding for smaller size
                  width: "50%",
                  fontSize: "1.5rem", // Adjusted font-size for smaller size
                }}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* new code for signUp button and already have an account button mobile view */}
          <div className=" button-container  flex flex-col ">
            <div className="">
              <button
                form="myForm"
                id="myForm"
                onClick={handleSubmit}
                type="button"
                className="SignUpBtnForMobileView"
                class="text-gray-900 bg-gray-100 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                style={{
                  width: "100%",
                  fontFamily: "Goldman",
                  padding: "0.5rem",
                  width: "60%",
                  fontSize: "1.5rem",
                  marginBottom: "2%",
                }}
              >
                Sign Up
              </button>
              <div>
                <GoogleButton
                  type="light" // can be light or dark
                  onClick={onGoogleLoginSuccess}
                  style={{ width: "20%", marginLeft: "38%" }}
                />
              </div>
            </div>

            <div className="   flex items-center justify-evenly">
              <div className="  w-[50%] h-[50%] flex items-center justify-between ">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 173 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M145 78.4131V92.1886H131.225"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M9.99988 37.7754V23.9999H23.7754"
                    stroke="white"
                    stroke-width="2"
                  />
                  <g filter="url(#filter0_d_2109_561)">
                    <path
                      d="M16.8877 34.8887C16.8877 32.6795 18.6786 30.8887 20.8877 30.8887H134.378C136.587 30.8887 138.378 32.6795 138.378 34.8887V70.7017C138.378 71.761 137.958 72.777 137.21 73.5269L126.634 84.1271C125.884 84.8792 124.865 85.3019 123.802 85.3019H20.8877C18.6786 85.3019 16.8877 83.5111 16.8877 81.3019V34.8887Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M36 66.998V38.678H40.32V66.998H36ZM41.76 66.998V38.678H43.2V66.998H41.76ZM44.64 66.998V38.678H48.96V66.998H44.64ZM53.28 66.998V38.678H54.72V66.998H53.28ZM56.16 66.998V38.678H57.6V66.998H56.16ZM44.112 71.174H50.928V72.278H45.264V75.926H49.968V77.078H45.264V81.206H50.88V82.31H44.112V71.174ZM62.6625 66.998V38.678H66.9825V66.998H62.6625ZM68.4225 66.998V38.678H69.8625V66.998H68.4225ZM71.3025 66.998V38.678H75.6225V66.998H71.3025ZM79.9425 66.998V38.678H81.3825V66.998H79.9425ZM82.8225 66.998V38.678H84.2625V66.998H82.8225ZM70.7745 71.174H77.5905V72.278H71.9265V75.926H76.6305V77.078H71.9265V81.206H77.5425V82.31H70.7745V71.174ZM89.325 66.998V38.678H90.765V66.998H89.325ZM92.205 66.998V38.678H96.525V66.998H92.205ZM97.965 66.998V38.678H99.405V66.998H97.965ZM100.845 66.998V38.678H105.165V66.998H100.845ZM109.485 66.998V38.678H110.925V66.998H109.485ZM100.797 82.502C99.357 82.502 98.189 82.022 97.293 81.062L97.965 79.958L98.013 79.814L98.157 79.862C98.157 79.894 98.173 79.958 98.205 80.054C98.205 80.118 98.237 80.198 98.301 80.294C98.333 80.358 98.397 80.422 98.493 80.486C99.165 81.062 99.997 81.35 100.989 81.35C101.629 81.35 102.173 81.174 102.621 80.822C103.069 80.438 103.293 79.99 103.293 79.478C103.293 79.126 103.213 78.822 103.053 78.566C102.925 78.342 102.685 78.118 102.333 77.894C101.981 77.67 101.437 77.398 100.701 77.078C99.613 76.662 98.829 76.182 98.349 75.638C97.901 75.094 97.677 74.486 97.677 73.814C97.677 72.982 97.981 72.31 98.589 71.798C99.197 71.286 100.013 71.03 101.037 71.03C101.645 71.03 102.221 71.158 102.765 71.414C103.277 71.67 103.741 72.006 104.157 72.422L103.341 73.526L103.245 73.43C103.245 73.398 103.229 73.35 103.197 73.286C103.197 73.19 103.165 73.11 103.101 73.046C103.069 72.95 103.005 72.87 102.909 72.806C102.653 72.55 102.349 72.358 101.997 72.23C101.677 72.134 101.293 72.086 100.845 72.086C100.269 72.086 99.821 72.246 99.501 72.566C99.149 72.886 98.973 73.27 98.973 73.718C98.973 74.07 99.037 74.374 99.165 74.63C99.325 74.886 99.597 75.126 99.981 75.35C100.365 75.606 100.941 75.878 101.709 76.166C102.765 76.614 103.501 77.062 103.917 77.51C104.301 77.99 104.493 78.582 104.493 79.286C104.493 79.83 104.365 80.342 104.109 80.822C103.821 81.302 103.405 81.702 102.861 82.022C102.285 82.342 101.597 82.502 100.797 82.502Z"
                    fill="url(#paint0_linear_2109_561)"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2109_561"
                      x="0.687695"
                      y="0.688671"
                      width="171.89"
                      height="104.813"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="9" dy="-5" />
                      <feGaussianBlur stdDeviation="12.6" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.95 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2109_561"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2109_561"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_2109_561"
                      x1="77.7194"
                      y1="27.872"
                      x2="77.7194"
                      y2="96.9318"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#080101" />
                      <stop
                        offset="0.380208"
                        stop-color="#080101"
                        stop-opacity="0.6"
                      />
                      <stop offset="0.578125" stop-color="#080101" />
                      <stop
                        offset="0.729167"
                        stop-color="#080101"
                        stop-opacity="0.641975"
                      />
                      <stop offset="1" stop-color="#080101" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="w-[40%]   h-[10%] ">
                <div className=" ">
                  <p
                    style={{
                      alignItems: "center",
                      font: "Goldman",
                      textAlign: "center",
                      fontSize:"0.9rem"
                    }}
                  >
                    Already have an account?
                  </p>
                </div>
                <div className="loginBtn cursor-pointer  relative w-[100%] h-[40%] ">
                  <Link to="/login">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 174 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_i_2109_568)">
                        <path
                          d="M26.6731 0C25.7928 0 24.957 0.386632 24.387 1.05747L4.19962 24.8159C2.54394 26.7645 3.92881 29.7585 6.48579 29.7585H146.51C147.39 29.7585 148.226 29.3718 148.796 28.701L168.983 4.94253C170.639 2.99397 169.254 0 166.697 0H26.6731Z"
                          fill="#1B1B1E"
                        />
                      </g>
                      <path
                        d="M60.0125 20L60.1725 18.72V10.592H62.2845V18.464H68.9085L69.5485 19.824C69.5485 19.8667 69.4045 19.9093 69.1165 19.952C68.8285 19.984 68.3325 20 67.6285 20H60.0125ZM73.8133 20C73.0986 20 72.5653 19.856 72.2133 19.568C71.8719 19.28 71.7013 18.8107 71.7013 18.16V14.88C71.7013 14.72 71.7119 14.528 71.7333 14.304C71.7653 14.0693 71.8399 13.84 71.9573 13.616C72.0853 13.392 72.2933 13.2053 72.5813 13.056C72.8799 12.9067 73.2906 12.832 73.8133 12.832H78.2293C78.7626 12.832 79.1733 12.9067 79.4613 13.056C79.7493 13.2053 79.9519 13.392 80.0693 13.616C80.1973 13.84 80.2719 14.0693 80.2933 14.304C80.3253 14.528 80.3413 14.72 80.3413 14.88V17.952C80.3413 18.144 80.3253 18.3573 80.2933 18.592C80.2719 18.8267 80.1973 19.0507 80.0693 19.264C79.9413 19.4773 79.7333 19.6533 79.4453 19.792C79.1573 19.9307 78.7519 20 78.2293 20H73.8133ZM74.4213 18.624H77.6213C78.1439 18.624 78.4053 18.4107 78.4053 17.984V14.848C78.4053 14.4213 78.1439 14.208 77.6213 14.208H74.4213C73.9093 14.208 73.6533 14.4213 73.6533 14.848V17.984C73.6533 18.4107 73.9093 18.624 74.4213 18.624ZM88.5596 22.816C87.3863 22.816 86.4316 22.8053 85.6956 22.784C84.9596 22.7627 84.3943 22.7307 83.9996 22.688C83.605 22.6453 83.333 22.592 83.1836 22.528C83.045 22.464 82.9756 22.3947 82.9756 22.32L83.4556 21.12C83.6263 21.1733 83.925 21.2373 84.3516 21.312C84.789 21.3973 85.3436 21.44 86.0156 21.44H88.7516C89.1463 21.44 89.4236 21.3813 89.5836 21.264C89.7543 21.1467 89.8396 20.9387 89.8396 20.64V19.68C89.381 19.7653 88.837 19.84 88.2076 19.904C87.589 19.968 86.8743 20 86.0636 20H85.2636C84.7303 20 84.3196 19.9307 84.0316 19.792C83.7436 19.6533 83.5356 19.4773 83.4076 19.264C83.2903 19.0507 83.2156 18.8267 83.1836 18.592C83.1623 18.3573 83.1516 18.144 83.1516 17.952V14.88C83.1516 14.72 83.1623 14.528 83.1836 14.304C83.2156 14.0693 83.2903 13.84 83.4076 13.616C83.5356 13.392 83.7436 13.2053 84.0316 13.056C84.3303 12.9067 84.741 12.832 85.2636 12.832H86.0796C87.1996 12.832 88.069 12.8533 88.6876 12.896C89.317 12.9387 89.7756 12.9867 90.0636 13.04L90.4796 12.832H91.7916V20.768C91.7916 20.96 91.7596 21.1733 91.6956 21.408C91.6423 21.6427 91.5303 21.8667 91.3596 22.08C91.189 22.2933 90.9436 22.4693 90.6236 22.608C90.3036 22.7467 89.8823 22.816 89.3596 22.816H88.5596ZM85.8716 18.624H89.3436C89.589 18.624 89.733 18.6027 89.7756 18.56C89.8183 18.5173 89.8396 18.3787 89.8396 18.144V14.32C89.477 14.2987 89.0183 14.2773 88.4636 14.256C87.909 14.224 87.317 14.208 86.6876 14.208H85.8716C85.3596 14.208 85.1036 14.4213 85.1036 14.848V17.984C85.093 18.4107 85.349 18.624 85.8716 18.624ZM99.9531 20V10.592H102.065V20H99.9531ZM105.505 20V12.832H106.817L107.457 13.152C107.905 13.0667 108.444 12.992 109.073 12.928C109.702 12.864 110.422 12.832 111.233 12.832H112.033C112.566 12.832 112.977 12.9067 113.265 13.056C113.553 13.2053 113.756 13.392 113.873 13.616C114.001 13.84 114.076 14.0693 114.097 14.304C114.129 14.528 114.145 14.72 114.145 14.88V20H112.193V14.848C112.193 14.4213 111.937 14.208 111.425 14.208H107.937C107.734 14.208 107.601 14.2293 107.537 14.272C107.484 14.304 107.457 14.4 107.457 14.56V20H105.505Z"
                        fill="white"
                      />
                      <defs>
                        <filter
                          id="filter0_i_2109_568"
                          x="-3.52002"
                          y="-7"
                          width="173.223"
                          height="36.7588"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="-7" dy="-7" />
                          <feGaussianBlur stdDeviation="9.4" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_2109_568"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
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
            className="h-[100%]   mb-[20%]  w-[30%] flex flex-col items-center relative justify-between ButtonContainerRightMostDiv "
            style={{}}
          >
            <div className="w-[100%] h-[20%] laptopDesignElement  ">
              <svg
                width="65%"
                height="65%"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 0V20H0" stroke="white" stroke-width="2" />
              </svg>
            </div>
            {/* this svg is the sign up button in laptop view  */}
            <div className="gsignup">
              <GoogleButton
                type="light" // can be light or dark
                onClick={onGoogleLoginSuccess}
              />
            </div>

            <div className="h-[20%] w-full">
              <div className="w-full signup-button-blackDivAlreadyHaveAnAccount">
                Already have an account?
              </div>
              <Link to="/login">
                <button className="w-full h-[70%] cursor-pointer bg-transparent pb-[1.5rem] flex items-center justify-center signup-button-blackDivAlreadyHaveAnAccountButton">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
