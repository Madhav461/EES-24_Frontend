import React from "react";
import { useState, useEffect } from "react";
import Background from "./background";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { useFormik } from "formik";
import { advancedSchema } from "../schemas";
import axios from "axios";
import queryString from 'query-string'
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


  

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  let navigate = useNavigate();

  const onSubmit = async () => {
    console.log(values);
    const details = {
      "email" : values.email
    }
    const formData = queryString.stringify(details)
    try {
      const res = await axios.post('https://api.eesiitbhu.co.in/api/user/forgot-password/', formData)
      console.log(res);
      if(res.status === 200) {
        navigate('/resetpassword')
        toast.info ("Enter the 4-digit otp sent to your registered mail id !", {
          position: "bottom-right"
        });

      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong _forgot!", {
        position: "bottom-right"
      });
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
    },
    validationSchema:advancedSchema ,
    onSubmit,
  });

  console.log(errors);
  return (
    <>
      <Background />
      <form onSubmit={handleSubmit} className="">
        <div class="forgot-password-container">
          <h1 className="font-goldman">Forgot Password</h1>
          <h2 class="information-text-fp" className="mt-[10px] font-goldman" >
            Enter your registered email to reset your password.
          </h2>
          <div class="form-group-fp">
            <input
              value={values.email}
               onChange={handleChange}
               id="email"
               placeholder="EMAIL"
               type="email"
               className={errors.email && touched.email ? "input-error font-goldman" : "font-goldman"}
               onBlur={handleBlur}
              style={{color:'white',}}
            />
             {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
            <p>
              
            </p>
            <button type="submit" className="font-goldman">
              Reset Password
            </button>
          </div>
          <div class="footer-fp">
            {/* <h5>New here? <a href="signup">Sign Up.</a></h5>
                    <h5>Already have an account? <a href="signin">Sign In.</a></h5> */}
            <h5 className="font-goldman" onClick={() => navigate('/signup')}>
              New here? <span>Sign Up</span>{" "}
            </h5>
            <h5 className="font-goldman" onClick={() => navigate('/login')}>
              Already have an account? <span>Log In</span>{" "}
            </h5>
          </div>
        </div>
      </form>
    </>
  );
};
export default ForgotPassword;
