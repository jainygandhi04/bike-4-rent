// import React from "react";

// export default function TermsCond() {
//   return (
//     <div className="px-6 py-10 max-w-5xl mx-auto text-[#3D2C1B] font-sans leading-relaxed">
//       <h1 className="text-4xl font-bold mb-6 text-[#B36D4E]">Terms & Conditions</h1>
      
//       <p className="mb-4">
//         Welcome to <strong>Bike4Rent</strong>. By using our platform, you agree to comply with the following terms and conditions.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">1. User Eligibility</h2>
//       <p className="mb-4">
//         Renters must be at least 18 years old and must have a valid driving license at the time of booking.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">2. Vehicle Usage</h2>
//       <p className="mb-4">
//         All vehicles should be used responsibly. Any damage due to negligence will incur additional charges.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">3. Bookings & Payments</h2>
//       <p className="mb-4">
//         Bookings are confirmed only after successful payment. Our system uses secure payment gateways to protect your data.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">4. Cancellation & Refund</h2>
//       <p className="mb-4">
//         Cancellations made at least 24 hours before the rental time are eligible for a full refund. No refunds for late cancellations.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">5. Privacy & Data</h2>
//       <p className="mb-4">
//         Your personal information is stored securely and will not be shared with any third parties without your consent.
//       </p>

//       <h2 className="text-2xl font-semibold mt-8 mb-2">6. Legal</h2>
//       <p className="mb-4">
//         Any misuse of the service or violation of terms may result in suspension of your account or legal action.
//       </p>

//       <p className="mt-10">
//         By continuing to use our platform, you agree to abide by these terms and conditions.
//       </p>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faLock,
  faClock,
  faGasPump,
  faTools,
  faFileContract,
  faCalendarAlt,
  faHelmetSafety,
  faRoad,
  faGavel,
  faShieldAlt,
  faMoneyBillWave,
  faUsers,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const TermsCond = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation after component mounts
  }, []);

  const terms = [
    {
      icon: faUserShield,
      title: "User Eligibility",
      description:
        "Renters must be at least 18 years old and possess a valid driving license and a government-issued ID for verification.",
    },
    {
      icon: faLock,
      title: "Security Deposit",
      description:
        "A refundable security deposit is required before renting. The deposit amount varies based on the type of bike and will be refunded after the bike is returned in its original condition.",
    },
    {
      icon: faClock,
      title: "Rental Duration",
      description:
        "Bikes must be returned on time. Late returns will result in additional charges as per our rental policy.",
    },
    {
      icon: faGasPump,
      title: "Fuel Policy",
      description:
        "Bikes are provided with a minimum fuel level. Renters are responsible for refueling during the rental period.",
    },
    {
      icon: faTools,
      title: "Damage and Repairs",
      description:
        "Renters are responsible for any damages to the bike during the rental period. Repair costs will be deducted from the security deposit.",
    },
    {
      icon: faFileContract,
      title: "Bookings and Payments",
      description:
        "Bookings are confirmed only after successful payment. We use secure payment gateways to protect your data.",
    },
    {
      icon: faCalendarAlt,
      title: "Cancellation and Refund",
      description:
        "Free cancellations are allowed up to 24 hours before the scheduled pickup time. Late cancellations may result in partial or no refunds.",
    },
    {
      icon: faHelmetSafety,
      title: "Helmet Policy",
      description:
        "Wearing a helmet is mandatory for all riders. One helmet is provided free of charge; additional helmets can be rented at an extra cost.",
    },
    {
      icon: faRoad,
      title: "Outstation Travel",
      description:
        "Bikes cannot be taken outside Udaipur without prior approval. Additional charges may apply for outstation travel.",
    },
    {
      icon: faGavel,
      title: "Legal Compliance",
      description:
        "Any misuse of our service or violation of these terms may result in account suspension or legal action.",
    },
    {
      icon: faShieldAlt,
      title: "Privacy Policy",
      description:
        "Your personal information is stored securely and will not be shared with any third parties without your consent.",
    },
    {
      icon: faMoneyBillWave,
      title: "Payment Security",
      description:
        "Our platform uses industry-standard encryption to ensure the safety and security of your payment details.",
    },
    {
      icon: faUsers,
      title: "Customer Support",
      description:
        "We offer 24/7 customer support to address any issues or queries you may have during the rental process.",
    },
  ].map((term) => ({
    ...term,
    animate, // Add the animation state to each term
  }));



  return (

   
    <div className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen0">
      <div
        className={`text-center pt-8 pb-8 transform transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg`}
      >
        {/* Heading */}
        <h2 className="text-4xl font-extrabold tracking-tight text-orange-900">
          <FontAwesomeIcon icon={faHandshake} className="text-orange-800 mr-2" />
          Understand Our Policies
        </h2>
        
        {/* Subtext */}
        <p
          className={`text-[#5a4239] text-lg mt-2 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
            Familiarize Yourself With the Rules
        </p>
      </div>
      <div
          className={`${
            animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          } transform transition-all duration-700 ease-out flex items-center justify-center`}
        >
      <div className="max-w-5xl mx-auto bg-[#F0C8B0] shadow-md rounded-lg p-6 mt-3">
        
        <p className="text-gray-600 text-center mb-8">
          By using our platform, you agree
          to comply with the following terms and conditions.
        </p>
        <div className="space-y-6 ">
          {terms.map((term, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 border rounded-lg bg-[#fff7f0]  hover:shadow-lg transition-shadow duration-300"
            >
              <FontAwesomeIcon
                icon={term.icon}
                className="text-orange-700 text-3xl mt-1"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {term.title}
                </h2>
                <p className="text-gray-600">{term.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">
          By continuing to use our platform, you agree to abide by these terms
          and conditions.
        </p>
      </div>
    </div>
    </div>
  );
};

export default TermsCond;
