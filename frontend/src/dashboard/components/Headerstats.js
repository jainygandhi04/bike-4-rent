// // import React, { useEffect } from "react";
// // import CardStats from "./CardStats";
// // import { useDispatch, useSelector } from "react-redux";
// // import { BikeAll } from "../../redux/features/Bikes/bikeAction";
// // import { userAll } from "../../redux/features/User/authAction";
// // const Headerstats = () => {
// //   const dispatch = useDispatch();
// //   useEffect(() => {
// //     dispatch(BikeAll());
// //   }, []);
// //   useEffect(() => {
// //     dispatch(userAll());
// //   }, []);
// //   const { bikes } = useSelector((state) => state.bike);
// //   const { users } = useSelector((state) => state.auth);
// //   const { categories } = useSelector((state) => state.category);
// //   let totalbikes = bikes ? bikes.length : `No bikes available`;
// //   let totalUsers = users ? users.length : `No users currently`;
// //   let totalCategory = categories
// //     ? categories.length
// //     : `No categories of bike available`;

// //   return (
// //     <>
// //       {/* Header */}
// //       <div className='relative pt-12 pb-32 bg-orange md:pt-32'>
// //         <div className='w-full px-4 mx-auto md:px-10'>
// //           <div>
// //             {/* Card stats */}
// //             <div className='flex flex-wrap'>
// //               <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
// //                 <CardStats
// //                   statSubtitle='Users'
// //                   statTitle={totalUsers}
// //                   statArrow='up'
// //                   statPercent='3.48'
// //                   statPercentColor='text-emerald-500'
// //                   statDescripiron='Since last month'
// //                   statIconName='far fa-chart-bar'
// //                   statIconColor='bg-red-500'
// //                 />
// //               </div>
// //               <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
// //                 <CardStats
// //                   statSubtitle='Total Bikes'
// //                   statTitle={totalbikes}
// //                   statArrow='down'
// //                   statPercent='3.48'
// //                   statPercentColor='text-red-500'
// //                   statDescripiron='Since last week'
// //                   statIconName='fas fa-chart-pie'
// //                   statIconColor='bg-cyan-900'
// //                 />
// //               </div>
// //               <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
// //                 <CardStats
// //                   statSubtitle='Bikes Category'
// //                   statTitle={totalCategory}
// //                   statArrow='down'
// //                   statPercent='1.10'
// //                   statPercentColor='text-orange-500'
// //                   statDescripiron='Since yesterday'
// //                   statIconName='fas fa-users'
// //                   statIconColor='bg-pink-500'
// //                 />
// //               </div>
// //               <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
// //                 <CardStats
// //                   statSubtitle='Rented Bikes'
// //                   statTitle='3'
// //                   statArrow='up'
// //                   statPercent='12'
// //                   statPercentColor='text-emerald-500'
// //                   statDescripiron='Since last month'
// //                   statIconName='fas fa-percent'
// //                   statIconColor='bg-teal-400'
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Headerstats;


// import React, { useEffect } from "react";
// import { Card, Col, Row, Statistic } from "antd";
// import { ArrowUpOutlined, ArrowDownOutlined, UserOutlined, ShoppingOutlined, AppstoreOutlined, PercentageOutlined } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import { BikeAll } from "../../redux/features/Bikes/bikeAction";
// import { userAll } from "../../redux/features/User/authAction";

// const Headerstats = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(BikeAll());
//     dispatch(userAll());
//   }, [dispatch]);

//   const { bikes } = useSelector((state) => state.bike);
//   const { users } = useSelector((state) => state.auth);
//   const { categories } = useSelector((state) => state.category);

//   let totalBikes = bikes ? bikes.length : 0;
//   let totalUsers = users ? users.length : 0;
//   let totalCategory = categories ? categories.length : 0;
//   let rentedBikes = 3; // replace with actual logic when ready

//   return (
//     <div style={{ background: "#ffe7ba", padding: "40px 20px" }}>
//       <Row gutter={[16, 16]}>
//         <Col xs={24} sm={12} md={12} lg={6}>
//           <Card>
//             <Statistic
//               title="Total Users"
//               value={totalUsers}
//               prefix={<UserOutlined />}
//               valueStyle={{ color: "#3f8600" }}
//               suffix={<ArrowUpOutlined />}
//             />
//             <div style={{ marginTop: 8, fontSize: 12 }}>Since last month</div>
//           </Card>
//         </Col>

//         <Col xs={24} sm={12} md={12} lg={6}>
//           <Card>
//             <Statistic
//               title="Total Bikes"
//               value={totalBikes}
//               prefix={<ShoppingOutlined />}
//               valueStyle={{ color: "#cf1322" }}
//               suffix={<ArrowDownOutlined />}
//             />
//             <div style={{ marginTop: 8, fontSize: 12 }}>Since last week</div>
//           </Card>
//         </Col>

//         <Col xs={24} sm={12} md={12} lg={6}>
//           <Card>
//             <Statistic
//               title="Bike Categories"
//               value={totalCategory}
//               prefix={<AppstoreOutlined />}
//               valueStyle={{ color: "#fa8c16" }}
//               suffix={<ArrowDownOutlined />}
//             />
//             <div style={{ marginTop: 8, fontSize: 12 }}>Since yesterday</div>
//           </Card>
//         </Col>

//         <Col xs={24} sm={12} md={12} lg={6}>
//           <Card>
//             <Statistic
//               title="Rented Bikes"
//               value={rentedBikes}
//               prefix={<PercentageOutlined />}
//               valueStyle={{ color: "#3f8600" }}
//               suffix={<ArrowUpOutlined />}
//             />
//             <div style={{ marginTop: 8, fontSize: 12 }}>Since last month</div>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Headerstats; //good code

// import React, { useEffect } from "react";
// import { Card, Col, Row, Statistic, Typography } from "antd";
// import {
//   ArrowUpOutlined,
//   ArrowDownOutlined,
//   UserOutlined,
//   ShoppingOutlined,
//   AppstoreOutlined,
//   PercentageOutlined,
// } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import { BikeAll } from "../../redux/features/Bikes/bikeAction";
// import { userAll } from "../../redux/features/User/authAction";

// const { Title, Text } = Typography;

// const Headerstats = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(BikeAll());
//     dispatch(userAll());
//   }, [dispatch]);

//   const { bikes } = useSelector((state) => state.bike);
//   const { users } = useSelector((state) => state.auth);
//   const { categories } = useSelector((state) => state.category);

//   let totalBikes = bikes ? bikes.length : 0;
//   let totalUsers = users ? users.length : 0;
//   let totalCategory = categories ? categories.length : 0;
//   let rentedBikes = 3; // placeholder

//   return (
//     <div
//       style={{
//         backgroundColor: "#e0f2f1",
//         minHeight: "100vh",
//         padding: "2rem",
//         paddingLeft: "calc(220px + 2rem)", // Adjust if sidebar width changes
//         transition: "all 0.3s",
//       }}
//     >
//       <Title level={3} style={{ marginBottom: "2rem", color: "#004d40" }}>
//         Dashboard Overview
//       </Title>

//       <Row gutter={[24, 24]}>
//         <Col xs={24} sm={12} lg={6}>
//           <Card
//             bordered={false}
//             style={{ borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
//           >
//             <Statistic
//               title={<Text strong>Total Users</Text>}
//               value={totalUsers}
//               prefix={<UserOutlined />}
//               valueStyle={{ color: "#3f8600" }}
//               suffix={<ArrowUpOutlined />}
//             />
//             <Text type="secondary" style={{ fontSize: 12 }}>
//               Since last month
//             </Text>
//           </Card>
//         </Col>

//         <Col xs={24} sm={12} lg={6}>
//           <Card
//             bordered={false}
//             style={{ borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
//           >
//             <Statistic
//               title={<Text strong>Total Bikes</Text>}
//               value={totalBikes}
//               prefix={<ShoppingOutlined />}
//               valueStyle={{ color: "#cf1322" }}
//               suffix={<ArrowDownOutlined />}
//             />
//             <Text type="secondary" style={{ fontSize: 12 }}>
//               Since last week
//             </Text>
//           </Card>
//         </Col>

//         <Col xs={24} sm={12} lg={6}>
//           <Card
//             bordered={false}
//             style={{ borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
//           >
//             <Statistic
//               title={<Text strong>Bike Categories</Text>}
//               value={totalCategory}
//               prefix={<AppstoreOutlined />}
//               valueStyle={{ color: "#fa8c16" }}
//               suffix={<ArrowDownOutlined />}
//             />
//             <Text type="secondary" style={{ fontSize: 12 }}>
//               Since yesterday
//             </Text>
//           </Card>
//         </Col>

//         <Col xs={24} sm={12} lg={6}>
//           <Card
//             bordered={false}
//             style={{ borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
//           >
//             <Statistic
//               title={<Text strong>Rented Bikes</Text>}
//               value={rentedBikes}
//               prefix={<PercentageOutlined />}
//               valueStyle={{ color: "#3f8600" }}
//               suffix={<ArrowUpOutlined />}
//             />
//             <Text type="secondary" style={{ fontSize: 12 }}>
//               Since last month
//             </Text>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Headerstats;


// import React, { useEffect } from "react";
// import { Card, Col, Row, Typography } from "antd";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faUsers, 
//   faBicycle, 
//   faTags, 
//   faCalendarCheck,
//   faArrowUp,
//   faArrowDown
// } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from "react-redux";
// import { BikeAll } from "../../redux/features/Bikes/bikeAction";
// import { userAll } from "../../redux/features/User/authAction";

// const { Title, Text } = Typography;

// const Headerstats = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(BikeAll());
//     dispatch(userAll());
//   }, [dispatch]);

//   const { bikes } = useSelector((state) => state.bike);
//   const { users } = useSelector((state) => state.auth);
//   const { categories } = useSelector((state) => state.category);

//   const totalBikes = bikes?.length || 0;
//   const totalUsers = users?.length || 0;
//   const totalCategory = categories?.length || 0;
//   const rentedBikes = 3;
//   const rentalPercentage = totalBikes > 0 ? Math.round((rentedBikes / totalBikes) * 100) : 0;

//   const stats = [
//     {
//       title: "Total Users",
//       value: totalUsers,
//       icon: faUsers,
//       color: "text-blue-500",
//       bgColor: "bg-blue-50",
//       trend: "up",
//       change: "12%"
//     },
//     {
//       title: "Total Bikes",
//       value: totalBikes,
//       icon: faBicycle,
//       color: "text-purple-500",
//       bgColor: "bg-purple-50",
//       trend: "down",
//       change: "5%"
//     },
//     {
//       title: "Categories",
//       value: totalCategory,
//       icon: faTags,
//       color: "text-amber-500",
//       bgColor: "bg-amber-50",
//       trend: "down",
//       change: "2%"
//     },
//     {
//       title: "Rented Bikes",
//       value: `${rentalPercentage}%`,
//       icon: faCalendarCheck,
//       color: "text-green-500",
//       bgColor: "bg-green-50",
//       trend: "up",
//       change: "8%"
//     }
//   ];

//   return (
//     <div className="min-h-screen p-6 pl-[240px] bg-gray-50">
//       <div className="mb-8">
//         <Title level={3} className="!text-gray-800 !mb-1 !font-medium">
//           Dashboard Overview
//         </Title>
//         <Text className="text-gray-500 text-sm">
//           Current system metrics and statistics
//         </Text>
//       </div>

//       {/* Stats Cards */}
//       <Row gutter={[16, 16]} className="mb-6">
//         {stats.map((stat, index) => (
//           <Col key={index} xs={24} sm={12} md={6}>
//             <Card
//               bordered={false}
//               className="!rounded-lg !shadow-sm hover:!shadow-md transition-all h-full"
//               bodyStyle={{ padding: '16px' }}
//             >
//               <div className="flex items-start">
//                 <div className={`p-3 rounded-lg ${stat.bgColor} mr-4`}>
//                   <FontAwesomeIcon 
//                     icon={stat.icon} 
//                     className={`${stat.color} text-lg`} 
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <Text className="text-gray-500 text-sm block mb-1">{stat.title}</Text>
//                   <div className="flex items-baseline justify-between">
//                     <Text className="text-2xl font-semibold text-gray-800">
//                       {stat.value}
//                     </Text>
//                     <div className={`flex items-center text-xs ${
//                       stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
//                     }`}>
//                       <FontAwesomeIcon 
//                         icon={stat.trend === 'up' ? faArrowUp : faArrowDown} 
//                         className="mr-1" 
//                       />
//                       <span>{stat.change}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Summary Card - Clean Version */}
//       <Card 
//         bordered={false} 
//         className="!rounded-lg !shadow-sm"
//         bodyStyle={{ padding: '16px' }}
//       >
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div>
//             <Text className="text-gray-500 text-sm block">Available Bikes</Text>
//             <Text className="text-lg font-semibold text-gray-800">
//               {totalBikes - rentedBikes}
//             </Text>
//           </div>
//           <div>
//             <Text className="text-gray-500 text-sm block">Active Rentals</Text>
//             <Text className="text-lg font-semibold text-gray-800">
//               {rentedBikes}
//             </Text>
//           </div>
//           <div>
//             <Text className="text-gray-500 text-sm block">User Growth</Text>
//             <Text className="text-lg font-semibold text-green-500">
//               +12%
//             </Text>
//           </div>
//           <div>
//             <Text className="text-gray-500 text-sm block">Rental Rate</Text>
//             <Text className="text-lg font-semibold text-gray-800">
//               {rentalPercentage}%
//             </Text>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default Headerstats;
import React, { useEffect } from "react";
import { Card, Row, Col, Typography } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faBicycle, 
  faTags, 
  faCalendarCheck,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';

const { Title, Text } = Typography;

const DashboardOverview = () => {
  return (
    <div className="min-h-screen p-8 pl-[240px] bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <Title level={3} className="!mb-2 !text-gray-800">Dashboard Overview</Title>
        <Text className="text-gray-500">System metrics and statistics</Text>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Users */}
        <Card className="border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-50 mr-4">
              <FontAwesomeIcon icon={faUsers} className="text-blue-600 text-lg" />
            </div>
            <div>
              <Text className="text-gray-500 block">Total Users</Text>
              <div className="flex items-baseline">
                <Text className="text-xl font-semibold mr-2">11</Text>
                <Text className="text-green-600 text-sm">
                  <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                  +1%
                </Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Total Bikes */}
        <Card className="border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-50 mr-4">
              <FontAwesomeIcon icon={faBicycle} className="text-purple-600 text-lg" />
            </div>
            <div>
              <Text className="text-gray-500 block">Total Bikes</Text>
              <div className="flex items-baseline">
                <Text className="text-xl font-semibold mr-2">2</Text>
                <Text className="text-green-600 text-sm">
                  <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                  +1%
                </Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Categories */}
        <Card className="border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-amber-50 mr-4">
              <FontAwesomeIcon icon={faTags} className="text-amber-600 text-lg" />
            </div>
            <div>
              <Text className="text-gray-500 block">Categories</Text>
              <div className="flex items-baseline">
                <Text className="text-xl font-semibold mr-2">0</Text>
                <Text className="text-green-600 text-sm">
                  <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                  +2%
                </Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Rented Bikes */}
        <Card className="border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-50 mr-4">
              <FontAwesomeIcon icon={faCalendarCheck} className="text-green-600 text-lg" />
            </div>
            <div>
              <Text className="text-gray-500 block">Rented Bikes</Text>
              <div className="flex items-baseline">
                <Text className="text-xl font-semibold mr-2">150%</Text>
                <Text className="text-green-600 text-sm">
                  <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                  +4%
                </Text>
              </div>
            </div>
          </div>
        </Card>
      </div>

      
    </div>
  );
};

export default DashboardOverview;