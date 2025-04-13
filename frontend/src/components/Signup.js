// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { userRegister } from "../redux/features/User/authAction";
// import { Link } from "react-router-dom";
// import { Formik, ErrorMessage } from "formik";
// import { ValidateUser } from "../common/Validation";
// import { clearFields } from "../redux/features/User/authSlice";
// import Error from "../Helper/Error";
// import Layout from "./Layout";

// const Signup = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { success } = useSelector((state) => state.auth);
//   const [errors, setErrors] = useState("");
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);
//   useEffect(() => {
//     if (success) {
//       dispatch(clearFields());
//       navigate("/login");
//     }
//   }, [success]);

//   return (
//     <Layout title={"Bike-4-Rent : Signup"}>
//       <div className='flex flex-col justify-center h-screen px-6 lg:px-8 bg-slate-50'>
//         <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
//           <Link to='/'>
//             <img
//               className='w-auto h-10 mx-auto'
//               src='../images/BikeForRentFinalLogo.png'
//               alt='Your Company'
//             />
//           </Link>
//           <h2 className='mt-5 text-2xl font-bold leading-9 tracking-tight text-center text-slate-900'>
//             Sign up for your account
//           </h2>
//         </div>
//         <Formik
//           initialValues={{
//             name: "",
//             email: "",
//             password: "",
//             confirmPassword: "",
//             answer: "",
//           }}
//           validationSchema={ValidateUser}
//           onSubmit={async (values, actions) => {
//             const data = await dispatch(userRegister(values));
//             if (data.error) {
//               setErrors(data.payload);
//               dispatch(clearFields());
//             }
//           }}
//         >
//           {(props) => (
//             <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
//               <form className='space-y-3' onSubmit={props.handleSubmit}>
//                 <div className='flex flex-col'>
//                   <div className='flex'></div>
//                   <div className='flex'></div>
//                 </div>
//                 <div>
//                   <label
//                     for='userName'
//                     className='block text-sm font-medium leading-6 text-gray-900'
//                   >
//                     Username
//                   </label>
//                   <div className='mt-2'>
//                     <input
//                       id='name'
//                       name='name'
//                       type='text'
//                       autoComplete='name'
//                       onChange={props.handleChange}
//                       onBlur={props.handleBlur}
//                       value={props.values.name || ""}
//                       required
//                       className='block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
//                     />
//                   </div>
//                   <span className='text-red-500 error'>
//                     <ErrorMessage name='name' />
//                   </span>
//                 </div>
//                 <div>
//                   <label
//                     for='email'
//                     className='block text-sm font-medium leading-6 text-gray-900'
//                   >
//                     Email address
//                   </label>
//                   <div className='mt-2'>
//                     <input
//                       id='email'
//                       name='email'
//                       type='email'
//                       autoComplete='email'
//                       required
//                       className='block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
//                       onChange={props.handleChange}
//                       onBlur={props.handleBlur}
//                       value={props.values.email || ""}
//                     />
//                   </div>
//                   <span className='text-red-500 error'>
//                     <ErrorMessage name='email' />
//                   </span>
//                 </div>

//                 <div>
//                   <label
//                     for='password'
//                     className='block text-sm font-medium leading-6 text-gray-900'
//                   >
//                     Password
//                   </label>
//                   <div className='mt-2'>
//                     <input
//                       id='password'
//                       name='password'
//                       type='password'
//                       autoComplete='password'
//                       onChange={props.handleChange}
//                       onBlur={props.handleBlur}
//                       value={props.values.password || ""}
//                       required
//                       className='block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
//                     />
//                   </div>
//                   <span className='text-red-500 error'>
//                     <ErrorMessage name='password' />
//                   </span>
//                 </div>
//                 <div>
//                   <label
//                     for='confirmPassword'
//                     className='block text-sm font-medium leading-6 text-gray-900'
//                   >
//                     Confirm Password
//                   </label>
//                   <div className='mt-2'>
//                     <input
//                       id='confirmPassword'
//                       name='confirmPassword'
//                       type='password'
//                       autoComplete='confirmPassword'
//                       onChange={props.handleChange}
//                       onBlur={props.handleBlur}
//                       value={props.values.confirmPassword || ""}
//                       required
//                       className='block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
//                     />
//                   </div>
//                   <span className='text-red-500 error'>
//                     <ErrorMessage name='confirmPassword' />
//                   </span>
//                 </div>
//                 <div>
//                   <label
//                     for='email'
//                     className='flex flex-col text-sm font-medium leading-6 text-gray-900'
//                   >
//                     <span className='underline text-start text-bold text-orange'>
//                       Security Question
//                     </span>
//                     What's your favourite Bikename ?
//                   </label>
//                   <div className='mt-2'>
//                     <input
//                       id='answer'
//                       name='answer'
//                       type='text'
//                       autoComplete='answer'
//                       required
//                       className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
//                       onChange={props.handleChange}
//                       onBlur={props.handleBlur}
//                       value={props.values.answer || ""}
//                     />
//                   </div>
//                   <span className='text-red-500 error'>
//                     <ErrorMessage name='answer' />
//                   </span>
//                 </div>
//                 {errors && <Error>{errors}</Error>}
//                 <div>
//                   <button
//                     type='submit'
//                     className='flex w-full justify-center rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//                   >
//                     Sign in
//                   </button>
//                 </div>
//               </form>

//               <p class='mt-3 text-center text-sm text-gray-500'>
//                 <Link
//                   to='/login'
//                   className='font-semibold leading-6 text-slate-900 '
//                 >
//                   Have an account ? <span className='text-orange'>Login</span>
//                 </Link>
//               </p>
//             </div>
//           )}
//         </Formik>
//       </div>
//     </Layout>
//   );
// };

// export default Signup;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { userRegister } from "../redux/features/User/authAction";
import { Formik, ErrorMessage } from "formik";
import { ValidateUser } from "../common/Validation";
import { clearFields } from "../redux/features/User/authSlice";
import Error from "../Helper/Error";
import Layout from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (success) {
      dispatch(clearFields());
      navigate("/login");
    }
  }, [success]);

  return (
    <Layout title={"Bike-4-Rent : Signup"}>
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#fff7f0] via-[#fde9dc] to-[#f8d9c6] py-8 px-4">
        {/* Card container with proper spacing */}
        <div className="w-full max-w-md p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
          
          {/* Logo with top spacing */}
          <div className="flex flex-col items-center mb-6">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img
                src="../images/BikeForRentFinalLogo.png"
                alt="Bike-4-Rent Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-bold text-center text-[#5a4239] mb-6">
            Sign up for your account
          </h2>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              answer: "",
            }}
            validationSchema={ValidateUser}
            onSubmit={async (values, actions) => {
              const data = await dispatch(userRegister(values));
              if (data.error) {
                setErrors(data.payload);
                dispatch(clearFields());
              }
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit} className="space-y-4">
                {/* Username Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Username
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="name" />
                  </span>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Email address
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="email" />
                  </span>
                </div>

                {/* Password Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faKey}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.password || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="password" />
                  </span>
                </div>

                {/* Confirm Password Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faKey}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.confirmPassword || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="confirmPassword" />
                  </span>
                </div>

                {/* Security Question */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    <span className="text-[#8B4D3A]">Security Question:</span> What's your favorite bike name?
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="answer"
                      name="answer"
                      type="text"
                      autoComplete="off"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.answer || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="answer" />
                  </span>
                </div>

                {errors && <Error>{errors}</Error>}

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 mt-5 bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] text-white rounded-lg hover:from-[#733F30] hover:to-[#8B4D3A] focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Signing up..." : "Sign up"}
                </button>
              </form>
            )}
          </Formik>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#5a4239]/80">
              Already have an account?{" "}
              <Link to="/login" className="text-[#8B4D3A] hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;