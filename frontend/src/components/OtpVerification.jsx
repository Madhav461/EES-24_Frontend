import "./OtpVerification.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema4 } from "../schemas";
import Background from "./background";
import AuthContext from "../context/AuthContext";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { authTokens } = useContext(AuthContext)

  const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const otpVerificationResponse = await axios.post(
        "https://api.eesiitbhu.co.in/api/user/verify/",
        { otp },
        {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
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
            justifyContent: 'center',
             fontFamily: "Goldman",
             fontSize: "15px",
             fontStyle: "normal",
             fontWeight: 400,
             borderRadius: 2,
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
