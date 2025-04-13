
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
//   const [animateRightDiv, setAnimateRightDiv] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//       setCurrentVehicle((prevVehicle) => (prevVehicle + 1) % vehicleImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length, vehicleImages.length]);

//   useEffect(() => {
//     setAnimateRightDiv(true);
//   }, []);

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
//       <div
//         className={`absolute top-[50%] right-10 transform -translate-y-1/2 w-[35%] z-20 p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl flex flex-col items-center text-center transition-transform duration-1000 ${animateRightDiv ? "translate-x-0" : "translate-x-full"}`}
//       >
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

  const [currentImage, setCurrentImage] = useState(0);
  const [weather, setWeather] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    const fetchWeather = async () => {
      try {
        const city = "Udaipur";
        const response = await fetch(`https://wttr.in/${city}?format=%C+%t`);
        const weatherData = await response.text();
        setWeather(weatherData);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchWeather();
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 100);


    return () => {
      clearInterval(imageInterval);
    };
  }, [images.length]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-gradient-to-r from-[#fff7f0] to-[#fde9dc]">
      
      {/* Left Section: Image Slider */}
      <div className="lg:w-1/2 w-full h-1/2 lg:h-full relative overflow-hidden">
    

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#6c5049]/70 to-[#6c5049]/20"></div>

        <div className="absolute bottom-4 sm:bottom-8 left-2 sm:left-4 bg-black/60 text-white p-2 sm:p-3 rounded-lg shadow-md max-w-[90%] sm:max-w-[260px]">
          <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">City Weather</h3>
          <p className="text-xs sm:text-sm">{weather || "Fetching weather..."}</p>
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col items-center justify-center px-6 sm:px-10 relative">
        <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <h2
            className="text-lg sm:text-xl font-semibold flex items-center justify-center text-[#fff7f0]"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            <img src="/images/p2.png" alt="Welcome Hand Icon" className="w-6 sm:w-8 h-6 sm:h-8 mx-1 sm:mx-2" />
            <span className="text-xl sm:text-2xl font-extrabold text-orange-900">पधारो सा</span>
            <img src="/images/p2.png" alt="Welcome Hand Icon" className="w-6 sm:w-8 h-6 sm:h-8 mx-1 sm:mx-2" />
          </h2>
        </div>
        <div
          className={`${
            animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          } transform transition-all duration-700 ease-out flex items-center justify-center`}
        >
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-orange-900 mb-4 sm:mb-8 leading-tight">
            Explore the Majesty of Udaipur
          </h1>

          <p className="text-sm sm:text-lg text-[#5a4239] leading-relaxed max-w-full lg:max-w-xl mb-4 sm:mb-8">
            Discover Udaipur with ease by renting our reliable two-wheelers. Navigate the city's
            vibrant streets, serene lakes, and iconic landmarks with freedom and convenience.
          </p>
          <p className="text-xs sm:text-lg text-[#5a4239] leading-relaxed max-w-full lg:max-w-xl mb-6 sm:mb-16">
            Your journey, Our wheels.
          </p>

          <Link
            to="/bikerentsection"
            className="bg-orange-900 text-[#FFD9A0] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:bg-[#B36D4E] hover:text-white hover:shadow-lg"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Book Now
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
