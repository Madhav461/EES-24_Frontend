import React from "react";
import { useState, useEffect } from "react";
import Background from "./background";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleBtnClick = (id) => {
        const targetDiv = document.getElementById(id);
        targetDiv.style.display = "block";
        // console.log(id);
        // if (targetDiv.style.display !== "none") {
        //     targetDiv.style.display = "none";
        // } else {
        //     targetDiv.style.display = "block";
        // }
    };

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = `/${route}`;
        navigate(path);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            {/* <Background /> */}
        <form onSubmit={handleFormSubmit} className="">
            <div class="forgot-password-container">
                <h1>Forgot Password</h1>
                <h2 class="information-text-fp">Enter your registered email to reset your password.</h2>
                <h3 class="information-text-fp-success" id="fp-success">An Email has been sent to you.</h3>
                <div class="form-group-fp">
                    <input type="email" name="user_email" id="user_email" className="input" value={email} onChange={handleEmailChange} />
                    <p><label for="username">Email</label></p>
                    <button onClick={() => handleBtnClick("fp-success")}>Reset Password</button>
                </div>
                <div class="footer-fp">
                    {/* <h5>New here? <a href="signup">Sign Up.</a></h5>
                    <h5>Already have an account? <a href="signin">Sign In.</a></h5> */}
                    <h5 onClick={() => routeChange("signup")}>New here?  <span>Sign Up</span> </h5>
                    <h5 onClick={() => routeChange("login")}>Already have an account?  <span>Log In</span> </h5>
                </div>
            </div>
        </form>
        </>
    );
};
export default ForgotPassword;
