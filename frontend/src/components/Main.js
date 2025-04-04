// import React, { useState, useEffect } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import { Link } from "react-router-dom";

// const Main = () => {
//   const images = [
//     "../images/udaipurimg8.jpg",
//     "../images/udaipurimg5.jpg",
//     "../images/udaipurimg4.jpg",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="relative w-full min-h-screen">
//       {/* Background Image with Lazy Loading */}
//       <LazyLoadImage
//         src={images[currentImage]}
//         alt={`Slide ${currentImage}`}
//         className="w-full h-screen object-cover transition-transform duration-700 ease-in-out scale-110 hover:scale-100"
//         placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
//         effect="blur"
//       />

//       {/* Overlay Content */}
//       <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center space-y-6">
//         <h3 className="text-5xl sm:text-7xl font-extrabold text-orange drop-shadow-lg">
//           Welcome!
//         </h3>
//         <div className="flex items-center gap-4">
//           <Link
//             className="px-6 py-3 text-white rounded bg-slate-900 font-semibold hover:bg-orange transition"
//             to="/bikerentsection"
//           >
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ImageSlider = () => {
//   const images = [
//     "/images/udi3.jpg",
//     "/images/udi4.jpg",
//     "/images/udi5.jpg",
//     "/images/udi6.jpg",
//     "/images/udaipurimg.jpg",
  
//     "/images/udaipurimg5.jpg",
//     "/images/udaipurimg4.jpg",
//     "/images/udi2.jpg",
//     "/images/udi1.jpg",
  
   
//   ]; // Ensure these paths are correct and point to your public folder.

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Images */}
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           style={{
//             opacity: index === currentImage ? 0.85 : 0, // Increase opacity for active image
//           }}
//           className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
//             index === currentImage ? "animate-zoom" : ""
//           }`}
//         />
//       ))}

//       {/* Dark Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

//       {/* Overlay Content */}
//       <div className="absolute top-1/3 transform -translate-y-1/2 w-full text-center z-20">
//         <h1 className="text-5xl font-bold text-[#F3F4F6] drop-shadow-lg">
//           Welcome to Udaipur Rentals
//         </h1>
//       </div>

//       {/* Book Now Button */}
//       <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-4 flex flex-col items-center space-y-4 z-20">
//         <Link
//           to="/bikerentsection"
//           className="bg-[#3A6351] text-[#F3F4F6] px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#2C4A3A] transition"
//         >
//           Book Now
//         </Link>
//       </div>

//       {/* CSS for Zoom Effect */}
//       <style>{`
//         @keyframes zoomInOut {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.1);
//           }
//         }

//         .animate-zoom {
//           animation: zoomInOut 5s infinite; /* Zoom in/out effect over 5 seconds */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImageSlider;





// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ImageSlider = () => {
//   const images = [
//     "/images/udi3.jpg",
//     "/images/udi4.jpg",
//     "/images/udi5.jpg",
//     "/images/udi6.jpg",
//     "/images/udaipurimg.jpg",
//     "/images/udaipurimg5.jpg",
//     "/images/udaipurimg4.jpg",
//     "/images/udi2.jpg",
//     "/images/udi1.jpg",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Images */}
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           style={{
//             opacity: index === currentImage ? 0.85 : 0,
//           }}
//           className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
//             index === currentImage ? "animate-zoom" : ""
//           }`}
//         />
//       ))}

//       {/* Dark Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-black/60 z-10"></div>

//       {/* Traditional Welcome Text */}
//       <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 text-center">
//         <h2
//           className="text-lg font-bold tracking-widest flex items-center justify-center drop-shadow-md"
//           style={{
//             fontFamily: "'Lohit Devanagari', serif",
//             letterSpacing: "2px",
//             color: "#FFC107", // Golden saffron shade
//           }}
//         >
//           {/* PNG Icon for Welcome Hands */}
//           <img
//             src="/images/p2.png"
//             alt="Welcome Hand Icon"
//             className="w-8 h-8 mx-2"
//           />
//           <span className="text-xl">पधारो सा</span>
//           <img
//             src="/images/p2.png"
//             alt="Welcome Hand Icon"
//             className="w-8 h-8 mx-2"
//           />
//         </h2>
//       </div>

//       {/* Overlay Content (Left-Aligned) */}
//       <div className="absolute top-[50%] left-6 transform -translate-y-1/2 w-[40%] text-left z-20 px-6">
//         <h1
//           className="text-4xl font-semibold text-[#FAF3E0] drop-shadow-lg mb-8 leading-relaxed"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           Explore the Majesty of Udaipur
//         </h1>
//         <p
//           className="text-xl text-[#FAF3E0] leading-relaxed max-w-xl mb-8"
//           style={{ fontFamily: "'Merriweather', serif" }}
//         >
//           Discover Udaipur with ease by renting our reliable two-wheelers.
//           Navigate the city's vibrant streets, serene lakes, and iconic
//           landmarks with freedom and convenience.
//         </p>
//         <p
//           className="text-lg text-[#FAF3E0] leading-relaxed max-w-xl mb-20"
//           style={{ fontFamily: "'Merriweather', serif" }}
//         >
//           Your journey, our wheels.
//         </p>

//         {/* Book Now Button */}
//         <Link
//   to="/bikerentsection"
//   className="mt-13 inline-block bg-gradient-to-r from-[#FFB347] to-[#B9651D] text-[#FAF3E0] px-6 py-3 text-lg font-medium rounded-md hover:bg-gradient-to-l hover:from-[#FFAA33] hover:to-[#8A470D] hover:shadow-md transition duration-200"
//   style={{ fontFamily: "'Merriweather', serif" }}
// >
//   Book Now
// </Link>

//       </div>

//       {/* CSS for Zoom Effect */}
//       <style>{`
//         @keyframes zoomInOut {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.1);
//           }
//         }

//         .animate-zoom {
//           animation: zoomInOut 5s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImageSlider;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ImageSlider = () => {
//   const images = [
//     "/images/udi3.jpg",
//     "/images/udi4.jpg",
//     "/images/udi5.jpg",
//     "/images/udi6.jpg",
//     "/images/udaipurimg.jpg",
//     "/images/udaipurimg5.jpg",
//     "/images/udaipurimg4.jpg",
//     "/images/udi2.jpg",
//     "/images/udi1.jpg",
//   ];

//   const vehicleImages = [
//     "/images/bikemain1.png",
//     "/images/bikemain2.png",
//     "/images/bikemain3.png",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);
//   const [currentVehicle, setCurrentVehicle] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//       setCurrentVehicle((prevVehicle) => (prevVehicle + 1) % vehicleImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length, vehicleImages.length]);

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Images */}
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           style={{
//             opacity: index === currentImage ? 0.85 : 0,
//           }}
//           className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
//             index === currentImage ? "animate-zoom" : ""
//           }`}
//         />
//       ))}

//       {/* Dark Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-black/60 z-10"></div>

//       {/* Traditional Welcome Text */}
//       <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 text-center">
//         <h2
//           className="text-lg font-bold tracking-widest flex items-center justify-center drop-shadow-md"
//           style={{
//             fontFamily: "'Lohit Devanagari', serif",
//             letterSpacing: "2px",
//             color: "#FFC107",
//           }}
//         >
//           <img
//             src="/images/p2.png"
//             alt="Welcome Hand Icon"
//             className="w-8 h-8 mx-2"
//           />
//           <span className="text-xl">पधारो सा</span>
//           <img
//             src="/images/p2.png"
//             alt="Welcome Hand Icon"
//             className="w-8 h-8 mx-2"
//           />
//         </h2>
//       </div>

//       {/* Overlay Content (Left-Aligned) */}
//       <div className="absolute top-[50%] left-6 transform -translate-y-1/2 w-[40%] text-left z-20 px-6">
//         <h1
//           className="text-4xl font-semibold text-[#FAF3E0] drop-shadow-lg mb-8 leading-relaxed"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           Explore the Majesty of Udaipur
//         </h1>
//         <p
//           className="text-xl text-[#FAF3E0] leading-relaxed max-w-xl mb-8"
//           style={{ fontFamily: "'Merriweather', serif" }}
//         >
//           Discover Udaipur with ease by renting our reliable two-wheelers.
//           Navigate the city's vibrant streets, serene lakes, and iconic
//           landmarks with freedom and convenience.
//         </p>
//         <p
//           className="text-lg text-[#FAF3E0] leading-relaxed max-w-xl mb-20"
//           style={{ fontFamily: "'Merriweather', serif" }}
//         >
//           Your journey, our wheels.
//         </p>

//         {/* Book Now Button */}
//         <Link
//           to="/bikerentsection"
//           className="mt-13 inline-block bg-gradient-to-r from-[#FFB347] to-[#B9651D] text-[#FAF3E0] px-6 py-3 text-lg font-medium rounded-md hover:bg-gradient-to-l hover:from-[#FFAA33] hover:to-[#8A470D] hover:shadow-md transition duration-200"
//           style={{ fontFamily: "'Merriweather', serif" }}
//         >
//           Book Now
//         </Link>
//       </div>

//       {/* Overlay Content (Right-Aligned) */}
//       <div className="absolute top-[50%] right-10 transform -translate-y-1/2 w-[35%] z-20 p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl flex flex-col items-center text-center">
//         <h2 className="text-3xl font-semibold text-[#FAF3E0] drop-shadow-lg mb-4">
//           Why Ride With Us?
//         </h2>
        
//         {/* Vehicle Image */}
//         <img
//           src={vehicleImages[currentVehicle]}
//           alt="Bike"
//           className="w-64 h-auto drop-shadow-md border border-[#FFC107] rounded-md p-2"
//         />
        
//         {/* Ratings & Trust Badge */}
//         <div className="flex flex-col items-center space-y-3 mt-6 text-[#FAF3E0]">
//           <span className="text-2xl font-bold">⭐ 4.8/5</span>
//           <span className="text-lg">Trusted by 10,000+ Riders</span>
//           <span className="text-lg">Easy Booking, Affordable Rates</span>
//         </div>
//       </div>

//       {/* CSS for Zoom Effect */}
//       <style>{`
//         @keyframes zoomInOut {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.1);
//           }
//         }
//         .animate-zoom {
//           animation: zoomInOut 5s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImageSlider;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const images = [
    "/images/udi3.jpg",
    "/images/udi4.jpg",
    "/images/udi5.jpg",
    "/images/udi6.jpg",
    "/images/udaipurimg.jpg",
    "/images/udaipurimg5.jpg",
    "/images/udaipurimg4.jpg",
    "/images/udi2.jpg",
    "/images/udi1.jpg",
  ];

  const vehicleImages = [
    "/images/bikemain1.png",
    "/images/bikemain2.png",
    "/images/bikemain3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentVehicle, setCurrentVehicle] = useState(0);
  const [animateRightDiv, setAnimateRightDiv] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setCurrentVehicle((prevVehicle) => (prevVehicle + 1) % vehicleImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, vehicleImages.length]);

  useEffect(() => {
    setAnimateRightDiv(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{
            opacity: index === currentImage ? 0.85 : 0,
          }}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "animate-zoom" : ""
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-black/60 z-10"></div>

      {/* Traditional Welcome Text */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h2
          className="text-lg font-bold tracking-widest flex items-center justify-center drop-shadow-md"
          style={{
            fontFamily: "'Lohit Devanagari', serif",
            letterSpacing: "2px",
            color: "#FFC107",
          }}
        >
          <img
            src="/images/p2.png"
            alt="Welcome Hand Icon"
            className="w-8 h-8 mx-2"
          />
          <span className="text-xl">पधारो सा</span>
          <img
            src="/images/p2.png"
            alt="Welcome Hand Icon"
            className="w-8 h-8 mx-2"
          />
        </h2>
      </div>

      {/* Overlay Content (Left-Aligned) */}
      <div className="absolute top-[50%] left-6 transform -translate-y-1/2 w-[40%] text-left z-20 px-6">
        <h1
          className="text-4xl font-semibold text-[#FAF3E0] drop-shadow-lg mb-8 leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Explore the Majesty of Udaipur
        </h1>
        <p
          className="text-xl text-[#FAF3E0] leading-relaxed max-w-xl mb-8"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Discover Udaipur with ease by renting our reliable two-wheelers.
          Navigate the city's vibrant streets, serene lakes, and iconic
          landmarks with freedom and convenience.
        </p>
        <p
          className="text-lg text-[#FAF3E0] leading-relaxed max-w-xl mb-20"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Your journey, our wheels.
        </p>

        {/* Book Now Button */}
        <Link
          to="/bikerentsection"
          className="mt-13 inline-block bg-gradient-to-r from-[#FFB347] to-[#B9651D] text-[#FAF3E0] px-6 py-3 text-lg font-medium rounded-md hover:bg-gradient-to-l hover:from-[#FFAA33] hover:to-[#8A470D] hover:shadow-md transition duration-200"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Book Now
        </Link>
      </div>

      {/* Overlay Content (Right-Aligned) */}
      <div
        className={`absolute top-[50%] right-10 transform -translate-y-1/2 w-[35%] z-20 p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl flex flex-col items-center text-center transition-transform duration-1000 ${animateRightDiv ? "translate-x-0" : "translate-x-full"}`}
      >
        <h2 className="text-3xl font-semibold text-[#FAF3E0] drop-shadow-lg mb-4">
          Why Ride With Us?
        </h2>
        
        {/* Vehicle Image */}
        <img
          src={vehicleImages[currentVehicle]}
          alt="Bike"
          className="w-64 h-auto drop-shadow-md border border-[#FFC107] rounded-md p-2"
        />
        
        {/* Ratings & Trust Badge */}
        <div className="flex flex-col items-center space-y-3 mt-6 text-[#FAF3E0]">
          <span className="text-2xl font-bold">⭐ 4.8/5</span>
          <span className="text-lg">Trusted by 10,000+ Riders</span>
          <span className="text-lg">Easy Booking, Affordable Rates</span>
        </div>
      </div>

      {/* CSS for Zoom Effect */}
      <style>{`
        @keyframes zoomInOut {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-zoom {
          animation: zoomInOut 5s infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;