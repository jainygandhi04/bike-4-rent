// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
// } from "@heroicons/react/24/outline";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";
// export default function Contact() {
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_zis0xqq",
//         "template_aqbhj68",
//         e.target,
//         "rKJvlPIG0AD4GKbDI"
//       )
//       .then(
//         (result) => {
//           toast.success("Message sent successfully");
//         },
//         (error) => {
//           toast.error("Somthing went wrong !!");
//         }
//       );
//     e.target.reset();
//   };

//   return (
//     <div id='contact' className='mt-10'>
//       <div className="text-center pt-8 pb-8 font-['Open_Sans']">
//         <h2
//           className='text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900'
//           data-aos='zoom-in'
//           data-aos-duration='1000'
//         >
//           {" "}
//           Let's give a try
//         </h2>
//       </div>
//       <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
//         <div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8'>
//           <div>
//             <h2
//               className='text-2xl font-extrabold sm:text-3xl'
//               data-aos='fade-right'
//               data-aos-duration='1000'
//             >
//               Get in touch
//             </h2>

//             <div className='mt-9'>
//               <div className='flex'>
//                 <div className='flex-shrink-0'>
//                   <PhoneIcon
//                     className='w-8 h-8 text-orange'
//                     aria-hidden='true'
//                   />
//                 </div>
//                 <div className='ml-3 text-base'>
//                   <p className='text-2xl font-extrabold'>Phone no</p>
//                   <p>
//                     <a href='tel:9829244434'>9829244434</a>
//                   </p>
//                 </div>
//               </div>
//               <div className='flex mt-6'>
//                 <div className='flex-shrink-0'>
//                   <EnvelopeIcon
//                     className='w-8 h-8 text-orange'
//                     aria-hidden='true'
//                   />
//                 </div>
//                 <div className='ml-3 text-base'>
//                   <p className='text-2xl font-extrabold'>Email</p>
//                   <p className='mt-2'>
//                     <a href='mailto:udaipurtaxihire@gmail.com'>
//                     udaipurtaxihire@gmail.com
//                     </a>
//                   </p>
//                 </div>
//               </div>
//               <div className='flex mt-6'>
//                 <div className='flex-shrink-0'>
//                   <MapPinIcon
//                     className='w-8 h-8 text-orange'
//                     aria-hidden='true'
//                   />
//                 </div>
//                 <div className='ml-3 text-base'>
//                   <p className='text-2xl font-extrabold'>Location</p>
//                   <div className='text-base'>
//                     <p className='mt-1'>Udaipur, Rajasthan</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='mt-12 sm:mt-16 md:mt-0'>
//             <div className='text-center'>
//               <h2
//                 className='pb-12 text-3xl font-extrabold tracking-tight sm:text-4xl'
//                 data-aos='fade-left'
//                 data-aos-duration='1000'
//               >
//                 {" "}
//                 Message us
//               </h2>
//             </div>
//             <form
//               onSubmit={sendEmail}
//               className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 align-right'
//             >
//               <div>
//                 <label
//                   htmlFor='user_firstname'
//                   className='block text-sm font-medium'
//                 >
//                   First name
//                 </label>
//                 <div className='mt-1'>
//                   <input
//                     type='text'
//                     name='user_firstname'
//                     id='user_firstname'
//                     autoComplete='given_name'
//                     required
//                     className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor='user_lastname'
//                   className='block text-sm font-medium'
//                 >
//                   Last name
//                 </label>
//                 <div className='mt-1'>
//                   <input
//                     type='text'
//                     name='user_lastname'
//                     id='lastname'
//                     required
//                     autoComplete='family_name'
//                     className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
//                   />
//                 </div>
//               </div>
//               <div className='sm:col-span-2'>
//                 <label htmlFor='email' className='block text-sm font-medium'>
//                   Email
//                 </label>
//                 <div className='mt-1'>
//                   <input
//                     id='email'
//                     name='user_email'
//                     type='email'
//                     autoComplete='email'
//                     required
//                     className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
//                   />
//                 </div>
//               </div>

//               <div className='sm:col-span-2'>
//                 <label htmlFor='message' className='block text-sm font-medium'>
//                   Message
//                 </label>
//                 <div className='mt-1'>
//                   <textarea
//                     id='message'
//                     name='message'
//                     rows={4}
//                     required
//                     className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
//                     defaultValue={""}
//                   />
//                 </div>
//               </div>
//               <div className='sm:col-span-2'>
//                 <button
//                   type='submit'
//                   className='inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-orange hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//                   formTarget='_blank'
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
// } from "@heroicons/react/24/outline";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

// export default function Contact() {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_zis0xqq",
//         "template_aqbhj68",
//         e.target,
//         "rKJvlPIG0AD4GKbDI"
//       )
//       .then(
//         () => toast.success("Message sent successfully"),
//         () => toast.error("Something went wrong!")
//       );
//     e.target.reset();
//   };

//   return (
//     <div id="contact" className="mt-10">
//       <div
//         className={`text-center pt-8 pb-8 font-['Open_Sans'] transform transition-all duration-700 ${
//           animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
//           Get in Touch with Us
//         </h2>
//         <p className="text-gray-600 mt-2">
//           We’d love to hear from you! Reach out with any questions.
//         </p>
//       </div>

//       <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div
//             className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-700 ${
//               animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <h3 className="text-2xl font-bold text-gray-800">Contact Info</h3>
//             <p className="text-gray-600 mt-2">
//               Have questions? We're here to help!
//             </p>
//             <div className="mt-6 space-y-6">
//               {/* Phone */}
//               <div className="flex items-center">
//                 <FontAwesomeIcon
//                   icon={faPhone}
//                   className="text-orange-500 w-8 h-8 mr-4 hover:text-black transition-all duration-300"
//                 />
//                 <div>
//                   <h4 className="text-lg font-semibold">Phone</h4>
//                   <a
//                     href="tel:9829244434"
//                     className="text-gray-600 hover:text-orange-500"
//                   >
//                     +91 98292 44434
//                   </a>
//                 </div>
//               </div>
//               {/* Email */}
//               <div className="flex items-center">
//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="text-orange-500 w-8 h-8 mr-4 hover:text-black transition-all duration-300"
//                 />
//                 <div>
//                   <h4 className="text-lg font-semibold">Email</h4>
//                   <a
//                     href="mailto:udaipurtaxihire@gmail.com"
//                     className="text-gray-600 hover:text-orange-500"
//                   >
//                     udaipurtaxihire@gmail.com
//                   </a>
//                 </div>
//               </div>
//               {/* Location */}
//               <div className="flex items-center">
//                 <FontAwesomeIcon
//                   icon={faLocationDot}
//                   className="text-orange-500 w-8 h-8 mr-4 hover:text-black transition-all duration-300"
//                 />
//                 <div>
//                   <h4 className="text-lg font-semibold">Location</h4>
//                   <p className="text-gray-600">Udaipur, Rajasthan</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div
//             className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-700 ${
//               animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//             }`}
//           >
//             <h3 className="text-2xl font-bold text-gray-800 text-center">
//               Message Us
//             </h3>
//             <form
//               onSubmit={sendEmail}
//               className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
//             >
//               {/* Form Fields */}
//               <div>
//                 <label
//                   htmlFor="user_firstname"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="user_firstname"
//                   id="user_firstname"
//                   autoComplete="given-name"
//                   required
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="user_lastname"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="user_lastname"
//                   id="user_lastname"
//                   autoComplete="family-name"
//                   required
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
//                 />
//               </div>
//               {/* Email Field */}
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="user_email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="user_email"
//                   id="user_email"
//                   autoComplete="email"
//                   required
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
//                 />
//               </div>
//               {/* Message Field */}
//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows="4"
//                   required
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
//                 ></textarea>
//               </div>
//               {/* Submit Button */}
//               <div className="sm:col-span-2">
//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3 text-white bg-orange-500 hover:bg-black rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zis0xqq",
        "template_aqbhj68",
        e.target,
        "rKJvlPIG0AD4GKbDI"
      )
      .then(
        () => toast.success("Message sent successfully"),
        () => toast.error("Something went wrong!")
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen"
    >
      {/* Header */}
      {/* <div
        className={`text-center pt-8 pb-8  transform transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-extrabold tracking-tight text- text-orange-900">
          Get in Touch with Us
        </h2>
        <p className="text-[#5a4239] mt-2">
          We’d love to hear from you! Reach out with any questions.
        </p>
      </div> */}
      <div
        className={`text-center pt-8 pb-8 transform transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg`}
      >
        {/* Heading */}
        
        <h2 className="text-4xl font-extrabold tracking-tight text-orange-900">
        <FontAwesomeIcon icon={faPhoneVolume} className="text-orange-800 mr-3" />
        Get in Touch with Us
        </h2>
        
        {/* Subtext */}
        <p
          className={`text-[#5a4239] text-lg mt-2 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We’d love to hear from you! Reach out with any questions.
        </p>
      </div>
        {/* <div
        className={`${
          animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } transform transition-all duration-700 ease-out flex flex-col items-center justify-center p-6 rounded-lg shadow-lg`}
      >
        <h1
          className={`text-4xl md:text-5xl font-extrabold text-orange-900 text-center transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0 scale-110" : "opacity-0 translate-y-10 scale-90"
          }`}
        >
          //<FontAwesomeIcon icon={faLocationDot} className="text-orange-800 mr-2" />
          Nearby Attractions
        </h1>
        <p
          className={`text-lg md:text-xl text-gray-700 text-center mt-2 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block">Explore the best tourist spots in Udaipur!</span> 
        </p>
      </div> */}

      {/* Content */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`bg-[#F9E2CF] p-8 rounded-lg shadow-lg transform transition-all duration-700 hover:bg-[#fde9dc] hover:shadow-xl ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-[#733F30]">Contact Info</h3>
            <p className="text-[#5a4239] mt-2">
              Have questions? We're here to help!
            </p>
            <div className="mt-6 space-y-6">
              {/* Phone */}
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-orange-800 w-8 h-8 mr-4 hover:text-[#A15E48] transition-all duration-300"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#733F30]">Phone</h4>
                  <a
                    href="tel:9829244434"
                    className="text-[#5a4239] hover:text-[#A15E48]"
                  >
                    +91 98292 44434
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-orange-800 w-8 h-8 mr-4 hover:text-[#A15E48] transition-all duration-300"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#733F30]">Email</h4>
                  <a
                    href="mailto:udaipurtaxihire@gmail.com"
                    className="text-[#5a4239] hover:text-[#A15E48]"
                  >
                    udaipurtaxihire@gmail.com
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-orange-800 w-8 h-8 mr-4 hover:text-[#A15E48] transition-all duration-300"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#733F30]">
                    Location
                  </h4>
                  <p className="text-[#5a4239]">Udaipur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-[#F9E2CF] p-8 rounded-lg shadow-lg transform transition-all duration-700 hover:bg-[#fde9dc] hover:shadow-xl ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-[#733F30] text-center">
              Message Us
            </h3>
            <form
              onSubmit={sendEmail}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Form Fields */}
              <div>
                <label
                  htmlFor="user_firstname"
                  className="block text-sm font-medium text-[#733F30]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="user_firstname"
                  id="user_firstname"
                  autoComplete="given-name"
                  required
                  className="mt-1 block w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
                />
              </div>
              <div>
                <label
                  htmlFor="user_lastname"
                  className="block text-sm font-medium text-[#733F30]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="user_lastname"
                  id="user_lastname"
                  autoComplete="family-name"
                  required
                  className="mt-1 block w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
                />
              </div>
              {/* Email Field */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-[#733F30]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
                />
              </div>
              {/* Message Field */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#733F30]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white bg-[#8B4D3A] hover:bg-[#8B4D3A] rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-800 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
