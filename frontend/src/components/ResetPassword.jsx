import React from "react";
import { useState, useEffect } from "react";
import Background from "./background";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

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

    const handleBtnClick = (id) => {
        const targetDiv = document.getElementById(id);
        targetDiv.style.display = "block";
    };

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = `/dashboard`;
        navigate(path);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Background />
            <form onSubmit={handleFormSubmit} className="">
        <div class="forgot-password-container">
          <h1 style={{fontFamily: 'goldman'}}>Password Reset</h1>
          <h2 class="information-text-fp" style={{fontFamily: 'goldman'}}>Enter your new password.</h2>
          <h3 class="information-text-fp-success" id="fp-success" style={{fontFamily: 'goldman'}}>
            Password has been updated successfully.
          </h3>
          <div class="form-group-fp">
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="input"
              value={email}
              onChange={handleEmailChange}
              style={{fontFamily: 'goldman'}}
            />
            <p>
              <label for="username" style={{fontFamily: 'goldman'}}>Email</label>
            </p>
            <input
              type="text"
              name="otp"
              id="otp"
              className="input"
              value={otp}
              onChange={handleOtpChange}
              style={{fontFamily: 'goldman'}}
            />
            <p>
              <label for="otp" style={{fontFamily: 'goldman'}}>OTP</label>
            </p>
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="input"
              value={newPassword}
              onChange={handleNPswdChange}
              style={{fontFamily: 'goldman'}}
            />
            <p>
              <label for="new_password" style={{fontFamily: 'goldman'}}>Old Password</label>
            </p>
            <input
              type="password"
              name="cnf_password"
              id="cnf_password"
              className="input"
              value={cnfPassword}
              onChange={handleCPswdChange}
              style={{fontFamily: 'goldman'}}
            />
            <p>
              <label for="cnf_password" style={{fontFamily: 'goldman'}}>New Password</label>
            </p>
            <button style={{fontFamily: 'goldman'}} onClick={() => handleBtnClick("fp-success")}>
              Update Password
            </button>
          </div>
        </div>
      </form>
    
        </>
    );
};
export default ResetPassword;
