import React from "react";
import { useState, useEffect } from "react";
import Background from "./background";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { useFormik } from "formik";
import { basicSchema2 } from "../schemas";
import './resetpassword.css';
import { getElementError } from "@testing-library/react";
import axios from "axios";
import queryString from 'query-string'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  // const [email, setEmail] = useState("");
  // const [otp, setOtp] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [cnfPassword, setCnfPassword] = useState("");
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handleOtpChange = (event) => {
  //   setOtp(event.target.value);
  // };
  // const handleCPswdChange = (event) => {
  //   setCnfPassword(event.target.value);
  // };
  // const handleNPswdChange = (event) => {
  //   setNewPassword(event.target.value);
  // };

  let navigate = useNavigate();

  // const onSubmit = async (values, actions) => {
  //   console.log(values);

  // };
  
  const onSubmit = async (values) => {
    const details = {
      'email' : values.email,
      'otp' : values.otpvarification,
      'password1' : values.password,
      'password2' : values.confirmPassword
    }
    console.log(details);
    const formData = queryString.stringify(details)
    try {
      const res = await axios.post('https://api.eesiitbhu.co.in/api/user/change-password/', formData)
      console.log(res)
      if(res.status == 200) {
        navigate('/login')
        toast.success("Password updated successfully !", {
          position: "bottom-right"
        });
      }
      else{
        toast.error("Something went wrong !", {
          position: "bottom-right"
        });
      }
    } catch (err) {
      toast.error("Something went wrong !", {
        position: "bottom-right"
      });
      console.error(err)
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
      password: "",
      confirmPassword: "",
      otpvarification: 0,
    },
    validationSchema:basicSchema2 ,
    onSubmit,
  });

  console.log(errors);

  return (
    <>
      <Background />
      <form onSubmit={handleSubmit} className="font-golman">
        <div class="forgot-password-container " >
          <h1 className="font-goldman ">Password Reset</h1>
          <h2 class="information-text-fp" className="font-goldman mt-[10px]">Enter your new password.</h2>
          <h3 class="information-text-fp-success" id="fp-success" className="font-goldman mt-[10px]">
            Password has been updated successfully.
          </h3>
          <div class="form-group-fp">
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
                    color:'white',
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "1.2px",
                    borderBottom: "1px solid #FFF",
                  }}
                />
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
            <p>
              <label for="username" className="font-goldman">Email</label>
            </p>
            <input
              type="number"
              name="otpvarification"
              id="otpvarification"
              placeholder="OTP"
              value={values.otpvarification}
              onChange={handleChange}
              className={errors.otpvarification && touched.otpvarification ? "input-error" : ""}
                onBlur={handleBlur}
                style={{
                    fontFamily: "Goldman",
                    fontSize: "18px",
                    fontStyle: "normal",
                    color:'white',
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "1.2px",
                    borderBottom: "1px solid #FFF",
                  }}
            />
            {errors.otpvarification && touched.otpvarification && (
                  <p className="error">{errors.otpvarification}</p>
                )}
            <p>
              <label for="otp" className="font-goldman">OTP</label>
            </p>
            <input
                  id="password"
                  type="password"
                  placeholder="Password"
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
                    color:'white',
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "1.2px",
                    borderBottom: "1px solid #FFF",
                  }}
                />
                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
            <p>
              <label for="new_password" className="font-goldman">New Password</label>
            </p>
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
                    color:'white',
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "1.2px",
                    borderBottom: "1px solid #FFF",
                  }}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
            <p>
              <label for="cnf_password" className="font-goldman">Confirm Password</label>
            </p>
            <button type="submit" className="font-goldman hover:bg-white">
              Update Password
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default ResetPassword;
