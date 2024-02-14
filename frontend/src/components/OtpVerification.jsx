import "./OtpVerification.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const OtpVerification = () => {
   const navigate = useNavigate();
    const [otp, setOtp] = useState('');

    const handleChange = (event) => {
        setOtp(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            // Retrieve the access token from local storage
            const authToken = localStorage.getItem('accessToken');

            // Make a POST request to verify OTP
            const otpVerificationResponse = await axios.post('http://localhost:8000/api/user/verify', { otp }, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });

            console.log('OTP verification response:', otpVerificationResponse.data);

            // Handle success or redirect the user as needed
            navigate('/dashboard');

        } catch (error) {
            console.error('Error verifying OTP:', error);
            // Handle failure, show an error message, etc.
        }
    };

    return (
        <div className="otp-verification-container z-0 m-auto">
            <div className="email-otp">
                An email has been sent .
            </div>

            <div className="search-bar">
                <form onSubmit={handleFormSubmit}>
                    <label className="otp-label">Enter OTP: </label>
                    <input value={otp} onChange={handleChange} />
                    <button type="submit">Verify OTP</button>
                </form>
            </div>

        </div>
    );
};

export default OtpVerification;