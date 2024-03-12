import "./OtpVerification.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema4 } from "../schemas";
import Background from "./background";
// import Background from "./background";
import AuthContext from "../context/AuthContext";
import queryString from "query-string"
import Spinner from "./Spinner";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../context/AuthContext";

const OtpVerification = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { authTokens, setPageLoading, pageloading, user } = useContext(AuthContext)

  const onSubmit = async (values) => {
    // console.log(values);
    console.log(values);
    setPageLoading(true)
    const data = {
      "otp" : values.otpverification.toString()
    }
    const formdata = queryString.stringify(data);
    console.log(formdata);
    try {
      const otpVerificationResponse = await axiosInstance.post(
        "https://api.eesiitbhu.co.in/api/user/verify/", formdata ,
        {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );

      console.log("OTP verification response:", otpVerificationResponse.data);

      // Handle success or redirect the user as needed
      navigate("/dashboard");
      toast.success("opt verified succesfully !", {
        position: "bottom-right"
      });

    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Something went wrong _otp!", {
        position: "bottom-right"
      });
      // Handle failure, show an error message, etc.
    }
    setPageLoading(false);
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

  return ( pageloading ? <Spinner /> :
    <div>
      <Background></Background>
    <div className="otp-verification-container z-0 m-auto">
      <div className="email-otp font-goldman " style={{fontSize:"30px"}}>An email has been sent to {emailtosendotp} .</div>

      <div className="search-bar">
        <form onSubmit={handleSubmit}>
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
        
          <button type="button" className="w-[100%]"
          onClick={handleSubmit}
           style={{
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
