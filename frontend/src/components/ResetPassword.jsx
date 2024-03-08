import React from "react";
import { useState, useEffect } from "react";
import Background from "./background";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { useFormik } from "formik";
import { basicSchema2 } from "../schemas";
import './resetpassword.css';
import { getElementError } from "@testing-library/react";
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };
  const handleCPswdChange = (event) => {
    setCnfPassword(event.target.value);
  };
  const handleNPswdChange = (event) => {
    setNewPassword(event.target.value);
  };

  let navigate = useNavigate();
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
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
      {/* <Background /> */}
      <form onSubmit={handleFormSubmit} className="">
        <div class="forgot-password-container">
          <h1>Password Reset</h1>
          <h2 class="information-text-fp">Enter your new password.</h2>
          <h3 class="information-text-fp-success" id="fp-success">
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
              <label for="username">Email</label>
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
              <label for="otp">OTP</label>
            </p>
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
              <label for="new_password">New Password</label>
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
              <label for="cnf_password">Confirm Password</label>
            </p>
            <button type="submit">
              Update Password
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default ResetPassword;
