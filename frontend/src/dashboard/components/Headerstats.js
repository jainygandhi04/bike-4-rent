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

import React, { useEffect } from "react";
import { Card, Col, Row, Statistic, Typography } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  UserOutlined,
  ShoppingOutlined,
  AppstoreOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { BikeAll } from "../../redux/features/Bikes/bikeAction";
import { userAll } from "../../redux/features/User/authAction";

const { Title, Text } = Typography;

const Headerstats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BikeAll());
    dispatch(userAll());
  }, [dispatch]);

  const { bikes } = useSelector((state) => state.bike);
  const { users } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.category);

  let totalBikes = bikes ? bikes.length : 0;
  let totalUsers = users ? users.length : 0;
  let totalCategory = categories ? categories.length : 0;
  let rentedBikes = 3; // placeholder

  return (
    <div
      style={{
        backgroundColor: "#e0f2f1",
        minHeight: "100vh",
        padding: "2rem",
        paddingLeft: "calc(220px + 2rem)", // Adjust if sidebar width changes
        transition: "all 0.3s",
      }}
    >
      <Title level={3} style={{ marginBottom: "2rem", color: "#004d40" }}>
        Dashboard Overview
      </Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={6}>
          <Card
            bordered={false}
            style={{ borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
          >
            <Statistic
              title={<Text strong>Total Users</Text>}
              value={totalUsers}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#3f8600" }}
              suffix={<ArrowUpOutlined />}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>
              Since last month
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card
            bordered={false}
            style={{ borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
          >
            <Statistic
              title={<Text strong>Total Bikes</Text>}
              value={totalBikes}
              prefix={<ShoppingOutlined />}
              valueStyle={{ color: "#cf1322" }}
              suffix={<ArrowDownOutlined />}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>
              Since last week
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card
            bordered={false}
            style={{ borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
          >
            <Statistic
              title={<Text strong>Bike Categories</Text>}
              value={totalCategory}
              prefix={<AppstoreOutlined />}
              valueStyle={{ color: "#fa8c16" }}
              suffix={<ArrowDownOutlined />}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>
              Since yesterday
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card
            bordered={false}
            style={{ borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
          >
            <Statistic
              title={<Text strong>Rented Bikes</Text>}
              value={rentedBikes}
              prefix={<PercentageOutlined />}
              valueStyle={{ color: "#3f8600" }}
              suffix={<ArrowUpOutlined />}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>
              Since last month
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Headerstats;


