import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const array = [
    {
      name: "Activa",
      images: "/images/activanew.jpg", // fixed path
      href: "/bikerentsection",
    },
    {
      name: "Sport bikes",
      images: "/images/sports/sport2.png",
      href: "/bikerentsection",
    },
    {
      name: "Jupiter",
      images: "/images/scooter/vespaa.png",
      href: "/bikerentsection",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto md:py-20 py-15">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="h-1 overflow-hidden bg-gray-200 rounded w-24 mb-4">
            <div className="w-full h-full bg-indigo-500"></div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 title-font mb-2">
            Our Fleet
          </h1>
        </div>

        <div className="flex flex-wrap -mt-4 -mb-10 sm:-m-4">
          {array.map((item, index) => {
            return (
              <div
                className="p-2 mb-6 border-2 border-gray-200 rounded-md md:w-1/3 sm:mb-0"
                key={index}
              >
                <div className="h-64 overflow-hidden rounded-lg">
                  <LazyLoadImage
                    alt="content"
                    className="object-cover object-center w-full h-full img-lazy"
                    src={item.images}
                    placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
                    effect="blur"
                  />
                </div>
                <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
                  {item.name}
                </h2>
                <Link
                  className="inline-flex items-center mt-1 text-orange"
                  to={item.href}
                >
                  Enquire Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
