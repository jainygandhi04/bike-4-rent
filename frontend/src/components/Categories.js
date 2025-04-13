// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import { Link } from "react-router-dom";

// const Categories = () => {
//   const array = [
//     {
//       name: "Activa",
//       images: "/images/activanew.jpg", // fixed path
//       href: "/bikerentsection",
//     },
//     {
//       name: "Sport bikes",
//       images: "/images/sports/sport2.png",
//       href: "/bikerentsection",
//     },
//     {
//       name: "Jupiter",
//       images: "/images/scooter/vespaa.png",
//       href: "/bikerentsection",
//     },
//   ];
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 mx-auto md:py-20 py-15">
//         <div className="flex flex-col items-center text-center mb-12">
//           <div className="h-1 overflow-hidden bg-gray-200 rounded w-24 mb-4">
//             <div className="w-full h-full bg-indigo-500"></div>
//           </div>
//           <h1 className="text-2xl font-bold text-gray-900 title-font mb-2">
//             Our Fleet
//           </h1>
//         </div>

//         <div className="flex flex-wrap -mt-4 -mb-10 sm:-m-4">
//           {array.map((item, index) => {
//             return (
//               <div
//                 className="p-2 mb-6 border-2 border-gray-200 rounded-md md:w-1/3 sm:mb-0"
//                 key={index}
//               >
//                 <div className="h-64 overflow-hidden rounded-lg">
//                   <LazyLoadImage
//                     alt="content"
//                     className="object-cover object-center w-full h-full img-lazy"
//                     src={item.images}
//                     placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
//                     effect="blur"
//                   />
//                 </div>
//                 <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
//                   {item.name}
//                 </h2>
//                 <Link
//                   className="inline-flex items-center mt-1 text-orange"
//                   to={item.href}
//                 >
//                   Enquire Now
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 ml-2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;




// import { Card, Row, Col, Divider, Typography, Button } from 'antd';
// import { ArrowRightOutlined } from '@ant-design/icons';
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import { Link } from "react-router-dom";

// const { Title, Text } = Typography;

// const Categories = () => {
//   const array = [
//     {
//       name: "Activa",
//       images: "/images/activanew.jpg",
//       href: "/bikerentsection",
//     },
//     {
//       name: "Sport bikes",
//       images: "/images/sports/sport2.png",
//       href: "/bikerentsection",
//     },
//     {
//       name: "Jupiter",
//       images: "/images/scooter/vespaa.png",
//       href: "/bikerentsection",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <Divider className="!h-1 !w-24 !min-w-0 !mx-auto !my-0 !mb-4 bg-gradient-to-r from-amber-400 to-amber-600" />
//           <Title className="!text-4xl !font-bold !text-white !font-serif !mb-2">
//             Our Fleet
//           </Title>
//           <Text className="!text-xl !text-amber-100 block">
//             Explore our premium range of bikes and scooters
//           </Text>
//         </div>

//         <Row gutter={[24, 24]}>
//           {array.map((item, index) => (
//             <Col xs={24} md={8} key={index}>
//               <Card
//                 hoverable
//                 className="!rounded-xl !overflow-hidden !bg-white/10 !backdrop-blur-sm !border !border-white/20 hover:!bg-white/20 hover:!shadow-2xl hover:!-translate-y-1 transition-all duration-300"
//                 bodyStyle={{ padding: 24 }}
//                 cover={
//                   <div className="h-72 overflow-hidden relative group">
//                     <LazyLoadImage
//                       alt={item.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                       src={item.images}
//                       placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
//                       effect="blur"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                 }
//               >
//                 <Title 
//                   level={4} 
//                   className="!text-2xl !font-bold !text-white !font-serif !mb-0 group-hover:!text-amber-400 transition-colors duration-300"
//                 >
//                   {item.name}
//                 </Title>
//                 <Link to={item.href}>
//                   <Button 
//                     type="primary" 
//                     shape="round" 
//                     icon={<ArrowRightOutlined />}
//                     className="!bg-amber-500 !border-amber-500 hover:!bg-amber-600 hover:!border-amber-600 !mt-6 !h-10 !px-6 transition-all duration-300 hover:!translate-x-1"
//                   >
//                     Enquire Now
//                   </Button>
//                 </Link>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Categories;


import { Card, Row, Col, Divider, Typography, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";

const { Title, Text } = Typography;

const Categories = () => {
  const array = [
    {
      name: "Activa",
      images:  "/images/b1fleet.jpg",
      
      href: "/bikerentsection",
    },
    {
      name: "Sport bikes",
      images: "/images/b2fleet.jpg",
      href: "/bikerentsection",
    },
    {
      name: "Jupiter",
      images: "/images/b3fleet.jpg",
      href: "/bikerentsection",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff7f0] to-[#fde9dc] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Divider className="!h-1 !w-24 !min-w-0 !mx-auto !my-0 !mb-4 bg-gradient-to-r from-[#5a4239] to-orange-900" />
          <Title className="!text-4xl !font-bold !text-orange-900 flex items-center justify-center gap-3 !mb-2">
          <FontAwesomeIcon icon={faPersonBiking} className="text-orange-900 "  />
            Our Fleet
          </Title>
          <Text className="!text-xl !text-[#5a4239] font-[Roboto] block">
            Explore our premium range of bikes and scooters
          </Text>
        </div>

        {/* Fleet Cards */}
        <Row gutter={[24, 24]}>
          {array.map((item, index) => (
            <Col xs={24} md={8} key={index}>
              <Card
                hoverable
                className=" !bg-[#8B4D3A] !text-[#FFD9A0] !rounded-xl !overflow-hidden !bg-[#ffffff1a]  hover:!bg-[#733F30] !backdrop-blur-md !border !border-white/20 !border-orange-700 hover:!border-[#f59e0b]  hover:!bg-[#ffffff33] hover:!shadow-2xl hover:!-translate-y-1 transition-all duration-300"
                bodyStyle={{ padding: 24 }}
                cover={
                  <div className="h-60 w-full overflow-hidden relative group">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={item.images}
                      placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
                      effect="blur"
                      
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#6c5049]/70 to-[#6c5049]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                }
              >
                <Title
                  level={4}
                  className="!text-2xl   !font-bold !text-[#FFD9A0]   group-hover:!text-orange-900 transition-colors duration-300"
                >
                  {item.name}
                </Title>
                <Link to={item.href}>
                  <Button
                    type="primary"
                    //shape="round"
                    icon={<ArrowRightOutlined />}
                    className="!bg-[#FFD9A0] !text-orange-900 font-[Roboto] hover:!bg-[#B36D4E] hover:!text-white !mt-6 !h-10 !px-6 transition-all duration-300 hover:!translate-x-1"
                  >
                    Enquire Now
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Categories;
