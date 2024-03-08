import "./OtpVerification.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema4 } from "../schemas";
import Background from "./background";
// import Background from "./background";
import AuthContext from "../context/AuthContext";

const OtpVerification = (props) => {
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
  // const emailtosendotp={props.email};
  const emailtosendotp="mailid@gmail.com";
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
      otpverification:0,
        },
    validationSchema: basicSchema4,
    onSubmit,
  });

  console.log(errors);

  return (
    <div>
      <Background></Background>
    <div className="otp-verification-container z-0 m-auto">
      <div className="email-otp font-goldman " style={{fontSize:"30px"}}>An email has been sent to {emailtosendotp} .</div>

      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <label className="otp-label font-goldman " style={{fontSize:"30px"}}>Enter OTP: </label>
          <input
          style={{width:'auto'}}
             type="number"
             name="otpverification"
             id="otpverification"
             placeholder="OTP"
             value={values.otpverification}
               onChange={handleChange}
             className={errors.otpverification && touched.otpverification ? "input-error" : ""}
               onBlur={handleBlur}
            />
            {errors.otpverification && touched.otpverification && (
                  <p className="error">{errors.otpverification}</p>
                )}
        
          <button type="submit" className="w-[100%]" style={{
            width:'100%',
            justifyContent: 'center',
             fontFamily: "Goldman",
             fontSize: "26px",
             fontStyle: "normal",
             fontWeight: 400,
             borderRadius: 2,
             lineHeight: "normal",
             letterSpacing: "1.2px",
             borderBottom: "1.5px solid #FFF",
          }}>Verify OTP</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default OtpVerification;
