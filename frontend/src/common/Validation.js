import * as Yup from "yup";
export const ValidateUser = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Za-z]+(?:\s[A-Za-z]+){0,1}$/,
      "Username can only contain alphabetical characters with one whitespace."
    )
    .min(3, "Username must be at least 3 characters long.")
    .max(15, "Username cannot be longer than 15 characters.")
    .required("*Name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long.")
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
      "Password must contain at least one number and one special character."
    )
    .required("*Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("*Confirm password required"),
  email: Yup.string()
    .email("*Must be in email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must have '@' followed by '.com'."
    )
    .required("Email is required."),
  
    phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid Indian phone number")
    .required("Phone number is required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Select a valid gender")
    .required("Gender is required"),
});

export const ValidateForgotPassword = Yup.object().shape({
  email: Yup.string()
    .email("*Must be in email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must have '@' followed by '.com'."
    )
    .required("Email is required."),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters long.")
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
      "Password must contain at least one number and one special character."
    )
    .required("*Password is required"),
  answer: Yup.string().required("*Security answer is required"),
});

export const ValidateBikeAdd = Yup.object().shape({
  name: Yup.string().required("*BikeName is required"),
  number: Yup.string().required("*Bike number is required"),
  price: Yup.number().required("*Price is required"),
  description: Yup.string().required("*Description is required"),
  category: Yup.string().required("*Category is required"),
  photo: Yup.mixed().required("Image selection is required"),
});

export const ValidateCategoryAdd = Yup.object().shape({
  name: Yup.string()
    .required("Category name is required")
    .min(3, "Category name must be at least 3 characters long.")
    .max(15, "Category name cannot be longer than 15 characters."),
    //photo: Yup.mixed().required("Image selection is required"),
});
