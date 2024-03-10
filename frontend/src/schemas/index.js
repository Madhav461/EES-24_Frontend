import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password with min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit." })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  CollegeName: yup
    .string()
    .required("Required"),
});

export const advancedSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
});


export const basicSchema2 = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password with min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit." })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  otpvarification: yup
    .number()
    .typeError("Please enter a 4-digit number")
    .integer("please enter valid number")
    .required("Required")
    .min(1000, "Please enter a 4-digit number")
    .max(9999, "Please enter a 4-digit number"),
});

export const advancedSchema3 = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password with min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit." })
    .required("Required"),
});

export const basicSchema3 = yup.object().shape({
  // email: yup.string().email("Please enter a valid email").required("Required"),
  CollegeName: yup
    .string()
    .required("Required"),
});


export const basicSchema4 = yup.object().shape({
  otpverification: yup
  .number()
  .typeError("Please enter a 4-digit number")
  .integer("please enter valid number")
  .required("Required")
  .min(1000, "Please enter a 4-digit number")
  .max(9999, "Please enter a 4-digit number"),
});
