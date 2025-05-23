import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";




const attractions = [
  {
    name: "Fatehsagar Lake",
    image: "/images/fatehsagarlake.jpg",
    description: "A beautiful lake known for its scenic views and boat rides.",
    link: "https://en.wikipedia.org/wiki/Fateh_Sagar_Lake",
  },
  {
    name: "City Palace",
    image: "/images/cp.jpg",
  
    description: "A magnificent palace offering a glimpse into royal heritage.",
    link: "https://en.wikipedia.org/wiki/City_Palace,_Udaipur",
  },
  {
    name: "Sajjangarh Fort",
    image: "/images/sajjan.jpg",
    description: "Also called Monsoon Palace, known for breathtaking sunset views.",
    link: "https://en.wikipedia.org/wiki/Sajjangarh",
  },
  {
    name: "Lake Pichola",
    image: "/images/lakep.jpeg",
    description: "An artificial lake offering boat rides and scenic beauty.",
    link: "https://en.wikipedia.org/wiki/Lake_Pichola",
  },
  {
    name: "Jagdish Temple",
    image: "/images/jt.jpg",
    description: "A historic Hindu temple dedicated to Lord Vishnu.",
    link: "https://en.wikipedia.org/wiki/Jagdish_Temple",
  },
  {
    name: "Saheliyon Ki Bari",
    image: "/images/sb.jpeg",
    description: "A beautiful garden with fountains, lotus pools, and marble pavilions.",
    link: "https://en.wikipedia.org/wiki/Saheliyon-ki-Bari",
  },
  {
    name: "Jag Mandir",
    image: "/images/jm.jpeg",
    description: "An island palace in Lake Pichola, known for its architecture.",
    link: "https://en.wikipedia.org/wiki/Jag_Mandir",
  },
  {
    name: "Bagore Ki Haveli",
    image: "/images/bh.jpeg",
    description: "A historic haveli displaying royal artifacts and cultural performances.",
    link: "https://en.wikipedia.org/wiki/Bagore-ki-Haveli",
  },
];

const Attractions = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen">
      {/* <div
        className={`${
          animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } transform transition-all duration-700 ease-out flex items-center justify-center space-x-4 p-6 rounded-lg shadow-lg `}
      >
      <h1 className={`text-4xl md:text-5xl font-extrabold text-orange-900 text-center transition-all duration-700 ${animate ? "opacity-100 translate-y-0 scale-110" : "opacity-0 translate-y-10 scale-90"}`}>
      <FontAwesomeIcon icon={faLocationDot} className="text-orange-800 mr-2" />
        Nearby Attractions
      </h1>
      <span className="block">
      <p className={`text-lg md:text-xl text-gray-700 text-center mt-2 transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      Explore the best tourist spots in Udaipur!
      </p>
      </span>
      </div> */}
      {/* <div
  className={`${
    animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
  } transform transition-all duration-700 ease-out flex flex-col items-center justify-center p-6 rounded-lg shadow-lg`}
>
  <h1
    className={`text-4xl  font-extrabold text-orange-900 text-center transition-all duration-700 ${
      animate ? "opacity-100 translate-y-0 scale-110" : "opacity-0 translate-y-10 scale-90"
    }`}
  >
    <FontAwesomeIcon icon={faLocationDot} className="text-orange-800 mr-2" />
    Nearby Attractions
  </h1>
  <p
    className={`text-lg  text-gray-700 text-center mt-2 transition-all duration-700 ${
      animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <span className="block">Explore the best tourist spots in Udaipur!</span> 
  </p>
</div> */}


{/* 
<div
        className={`text-center pt-8 pb-8  transform transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }transform transition-all duration-700 ease-out flex items-center justify-center space-x-4 p-6 rounded-lg shadow-lg `}
      >
        
        <h2 className="text-4xl font-extrabold tracking-tight text- text-orange-900">
        <FontAwesomeIcon icon={faLocationDot} className="text-orange-800 mr-2" />
        Nearby Attractions
        </h2>

        <p className={`text-[#5a4239] mt-2 transition-all duration-700 ${
      animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
       <span className="block">Explore the best tourist spots in Udaipur!</span>
        </p>
      </div> */}
      <div
  className={`text-center pt-8 pb-8 transform transition-all duration-700 ${
    animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  } flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg`}
>
  {/* Heading */}
  <h2 className="text-4xl font-extrabold tracking-tight text-orange-900">
    <FontAwesomeIcon icon={faLocationDot} className="text-orange-800 mr-2" />
    Nearby Attractions
  </h2>
  
  {/* Subtext */}
  <p
    className={`text-[#5a4239] text-lg mt-2 transition-all duration-700 ${
      animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    Explore the best tourist spots in Udaipur!
  </p>
</div>


      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {attractions.map((place, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-700 ease-in-out hover:scale-110 hover:bg-[#cc8f76]  hover:shadow-2xl hover:rotate-1 hover:text-white ${animate ? `opacity-100 scale-100 translate-y-0 translate-x-0` : `opacity-0 scale-90 translate-y-${index % 2 === 0 ? '16' : '-16'} translate-x-${index % 2 === 0 ? '-16' : '16'}`}`}
          >
            <img src={place.image} alt={place.name} className="w-full h-52 object-cover rounded-xl transition-all duration-700 hover:scale-110 hover:rotate-2" />
            <h2 className="text-2xl font-semibold text-orange-900 mt-4 transition-all duration-700 hover:text-white hover:scale-110">
              {place.name}
            </h2>
            <p className="text-gray-600 mt-2 transition-all duration-500 hover:text-white">
              {place.description}
            </p>
            <a href={place.link} target="_blank" rel="noopener noreferrer" className="text-orange-700 font-semibold mt-2 inline-block hover:underline hover:text-white hover:scale-110">
              Learn More
            </a>
          </div>
        ))}
      </div>
      <div className="mt-16 flex flex-col items-center">
        <h2 className={`text-3xl font-bold text-orange-900 text-center transition-all duration-700 ${animate ? "opacity-100 translate-y-0 scale-110" : "opacity-0 translate-y-10 scale-90"}`}>
        <FontAwesomeIcon icon={faMapLocationDot} className="text-orange-800 mr-2" />

          Explore Udaipur
        </h2>
        <div className={`w-full md:w-3/4 lg:w-2/3 h-80 mt-6 rounded-xl overflow-hidden shadow-xl transition-all duration-700 hover:scale-105 hover:shadow-2xl ${animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <iframe
            title="Udaipur Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.521134731287!2d73.67711637493562!3d24.57127075716095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5bff1df48c9%3A0x9910c2fcb172b20f!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1712101234567"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
