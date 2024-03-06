import "./OtpVerification.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Background from "./background";

const OtpVerification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const handleOtpChange = (event) => {
    setOtp(event.target.value);
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
          <h1 style={{fontFamily: 'goldman'}}>OTP Verification</h1>
          <h2 class="information-text-fp" style={{fontFamily: 'goldman'}}>OTP has been sent to your email</h2>
          <div class="form-group-fp">
            <input
              type="otp"
              name="user_otp"
              id="user_otp"
              className="input"
              value={otp}
              onChange={handleOtpChange}
              style={{fontFamily: 'goldman'}}
              required
            />
            <p>
              <label for="username" style={{fontFamily: 'goldman'}}>OTP</label>
            </p>
            <button style={{fontFamily: 'goldman'}} onClick={() => handleBtnClick("fp-success")}>
              Verify OTP
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default OtpVerification;
