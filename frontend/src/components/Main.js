// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import { Link } from "react-router-dom";
// import { DatePicker } from "antd";
// import enUS from 'antd/es/locale/en_US'; // ✅ added locale import

// const Main = () => {
//   const { RangePicker } = DatePicker;
//   return (
//     <section className="py-6 text-center bg-teal-50 min-h-screen flex flex-col items-center justify-center">
//       {/* <h3 className="mb-4 text-2xl antialiased font-semibold sm:font-extrabold sm:text-6xl text-orange">
//         Rent a Bike
//       </h3> */}
//       {/* <LazyLoadImage
//         src="../images/udaipurimg.jpg"
//         alt="Bike Rental"
//         className="w-full max-w-5xl h-auto img-lazy mb-6"
//         placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
//         effect="blur"
//         style={{ opacity: 0.7}}
//       />
//       <div className="flex flex-col sm:flex-row items-center gap-4">
//         <Link
//           className="px-4 py-2 text-white rounded bg-slate-900 sm:font-semibold hover:bg-orange transition"
//           to="/bikerentsection"
//         >
//           Book Now
//         </Link>
//         <RangePicker locale={enUS} />
//       </div> */
//       <div className="relative w-full">
//   <LazyLoadImage
//     src="../images/udaipurimg.jpg"
//     alt="Bike Rental"
//     className="w-full h-[80vh] object-cover opacity-10"
//     placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
//     effect="blur"
//     style={{ opacity: 0.7 }}
//   />
  
//   {/* Buttons & Heading overlay */}
//   <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
//     <h3 className="text-4xl sm:text-6xl font-extrabold text-orange drop-shadow-lg">Rent a Bike</h3>
//     <div className="flex flex-col sm:flex-row items-center gap-4">
//       <Link
//         className="px-6 py-3 text-white rounded bg-slate-900 font-semibold hover:bg-orange transition"
//         to="/bikerentsection"
//       >
//         Book Now
//       </Link>
//       <RangePicker locale={enUS} />
//     </div>
//   </div>
// </div>

//       }
//     </section>
//   );
// };

// export default Main;

// import React, { useState, useEffect } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import { Link } from "react-router-dom";
// import { DatePicker } from "antd";
// import enUS from "antd/es/locale/en_US";

// const Main = () => {
//   const { RangePicker } = DatePicker;

//   // Image array with your provided images
//   const images = [
//     "../images/udaipurimg.jpg",
//     "../images/udaipurimg5.jpg",
   
//     "../images/udaipurimg4.jpg",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="py-6 text-center bg-teal-50 min-h-screen flex flex-col items-center justify-center">
//       <div className="relative w-full">
//         <LazyLoadImage
//           src={images[currentImage]}
//           alt="Bike Rental"
//           className="w-full h-[80vh] object-cover opacity-60 transition-all duration-700 ease-in-out"
//           placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
//           effect="blur"
//           style={{ opacity: 0.7}}
//         />

//         <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 space-y-4">
//           <h3 className="text-4xl sm:text-6xl font-extrabold text-orange drop-shadow-lg mb-4">
//             Rent a Bike
//           </h3>
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <Link
//               className="px-6 py-3 text-white rounded bg-slate-900 font-semibold hover:bg-orange transition"
//               to="/bikerentsection"
//             >
//               Book Now
//             </Link>
//             <RangePicker locale={enUS} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main;
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import enUS from "antd/es/locale/en_US";

const Main = () => {
  const { RangePicker } = DatePicker;

  const images = [
    "../images/udaipurimg8.jpg",
    "../images/udaipurimg5.jpg",
    "../images/udaipurimg4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <LazyLoadImage
        src={images[currentImage]}
        alt="Bike Rental"
        className="w-full h-screen object-cover transition-all duration-700 ease-in-out"
        placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
        effect="blur"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center space-y-6">
        <h3 className="text-5xl sm:text-7xl font-extrabold text-orange drop-shadow-lg">Rent a Bike</h3>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            className="px-6 py-3 text-white rounded bg-slate-900 font-semibold hover:bg-orange transition"
            to="/bikerentsection"
          >
            Book Now
          </Link>
          <RangePicker locale={enUS} />
        </div>
      </div>
    </section>
  );
};

export default Main;
