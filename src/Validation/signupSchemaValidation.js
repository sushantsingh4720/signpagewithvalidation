import * as Yup from "yup";

const signupSchemaValidation = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .min(3)
    .max(40)
    .required("Please enter your name"),
  email: Yup.string()
    .email()
    .matches(
      /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/,
      "Please enter valid email"
    )
    .required("Please enter your email"),
  password: Yup.string()
    .min(6)
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+]{6,20}$/,
      "Please enter valid password"
    )
    .required("Please enter your password"),
});

export default signupSchemaValidation;
