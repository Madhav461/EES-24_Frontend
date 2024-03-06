import "./OtpVerification.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema4 } from "../schemas";
const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Retrieve the access token from local storage
      const authToken = localStorage.getItem("accessToken");

      // Make a POST request to verify OTP
      const otpVerificationResponse = await axios.post(
        "http://localhost:8000/api/user/verify",
        { otp },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("OTP verification response:", otpVerificationResponse.data);

      // Handle success or redirect the user as needed
      navigate("/dashboard");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle failure, show an error message, etc.
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
      otpvarification:0,
        },
    validationSchema: basicSchema4,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className="otp-verification-container z-0 m-auto">
      <div className="email-otp">An email has been sent .</div>

      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <label className="otp-label">Enter OTP: </label>
          <input
          style={{width:'auto'}}
             type="number"
             name="otpvarification"
             id="otpvarification"
             placeholder="OTP"
             value={values.otpvarification}
               onChange={handleChange}
             className={errors.otpvarification && touched.otpvarification ? "input-error" : ""}
               onBlur={handleBlur}
            />
            {errors.otpvarification && touched.otpvarification && (
                  <p className="error">{errors.otpvarification}</p>
                )}
        
          <button type="submit" style={{
            width:'100%',
             fontFamily: "Goldman",
             fontSize: "15px",
             fontStyle: "normal",
             fontWeight: 400,
             lineHeight: "normal",
             letterSpacing: "1.2px",
             borderBottom: "1px solid #FFF",
          }}>Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
