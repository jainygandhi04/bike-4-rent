import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Main = () => {
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
        <h3 className="text-5xl sm:text-7xl font-extrabold text-orange drop-shadow-lg">Welcome!</h3>
        <div className="flex items-center gap-4">
          <Link
            className="px-6 py-3 text-white rounded bg-slate-900 font-semibold hover:bg-orange transition"
            to="/bikerentsection"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
