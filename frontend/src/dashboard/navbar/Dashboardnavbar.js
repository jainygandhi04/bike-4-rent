// import React, { useEffect } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { useNavigate } from "react-router-dom";
// import { Fragment } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { logout } from "../../redux/features/User/authSlice";

// const Dashboardnavbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, userInfo, error } = useSelector((state) => state.auth);
//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };
//   return (
//     <>
//       {/* Navbar */}
//       <nav className='absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent md:flex-row md:flex-nowrap md:justify-start'>
//         <div className='flex flex-wrap items-center justify-between w-full px-4 mx-autp md:flex-nowrap md:px-10'>
//           {/* Brand */}
//           <a
//             className='hidden text-base font-bold text-white uppercase lg:inline-block'
//             href='#pablo'
//             onClick={(e) => e.preventDefault()}
//           >
//             Dashboard
//           </a>
//           {/* Form */}
//           <form className='flex-row flex-wrap items-center hidden mr-3 md:flex lg:ml-auto'>
//             <div className='relative flex flex-wrap items-stretch w-full'>
//               <span className='absolute z-10 items-center justify-center w-8 h-full py-3 pl-3 text-base font-normal leading-snug text-center bg-transparent rounded text-blueGray-300'>
//                 <i className='fas fa-search'></i>
//               </span>
//               <div className='flex'>
//                 <div>
//                   <input
//                     type='text'
//                     placeholder='Search here...'
//                     className='relative w-full px-3 py-3 pl-10 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
//                   />
//                 </div>
//                 <img
//                   src='../avatar.jpg'
//                   alt=''
//                   className='w-10 h-10 ml-3 mr-1 rounded-full'
//                 />
//                 <Menu as='div' className='text-left '>
//                   <div>
//                     <Menu.Button className='inline-flex justify-center w-full py-2 text-base font-medium rounded-md text-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
//                       {userInfo.name}
//                       <ChevronDownIcon
//                         className='w-5 h-5 ml-2 -mr-1 text-gray-200'
//                         aria-hidden='true'
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter='transition ease-out duration-100'
//                     enterFrom='transform opacity-0 scale-95'
//                     enterTo='transform opacity-100 scale-100'
//                     leave='transition ease-in duration-75'
//                     leaveFrom='transform opacity-100 scale-100'
//                     leaveTo='transform opacity-0 scale-95'
//                   >
//                     <Menu.Items className='absolute right-0 z-10 w-48 mt-2 origin-top-right divide-y divide-gray-300 rounded-md shadow-lg bg-gray-50 ring-1 ring-black ring-opacity-5 focus:outline-none'>
//                       <div className='px-1 py-1 rounded hover:bg-black hover:text-white'>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <button
//                               onClick={handleLogout}
//                               className={`${
//                                 active ? "bg-black text-white" : "text-gray-900"
//                               } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                             >
//                               Logout
//                             </button>
//                           )}
//                         </Menu.Item>
//                       </div>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </form>
//         </div>
//       </nav>
//       {/* End Navbar */}
//     </>
//   );
// };

// export default Dashboardnavbar;


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../../redux/features/User/authSlice";
// import {
//   Layout,
//   Menu,
//   Dropdown,
//   Avatar,
//   Row,
//   Col,
//   Typography,
//   Space,
//   Button,
// } from "antd";
// import {
//   DownOutlined,
//   LogoutOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

// const { Header } = Layout;
// const { Title } = Typography;

// const DashboardNavbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userInfo } = useSelector((state) => state.auth);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };

//   const menu = (
//     <Menu
//       items={[
//         {
//           key: "logout",
//           icon: <LogoutOutlined />,
//           label: <span onClick={handleLogout}>Logout</span>,
//         },
//       ]}
//       style={{
//         borderRadius: "8px",
//         overflow: "hidden",
//       }}
//     />
//   );

//   return (
//     <Header
//       style={{
//         position: "fixed",
//         top: 0,
//         zIndex: 1000,
//         width: "100%",
//         background: "#1f2f98",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//         padding: "0 24px",
//       }}
//     >
//       <Row justify="space-between" align="middle" style={{ height: "64px" }}>
//         <Col>
//           <Title
//             level={4}
//             style={{
//               color: "#fff",
//               margin: 0,
//               fontWeight: "600",
//               letterSpacing: "1px",
//             }}
//           >
//             Dashboard
//           </Title>
//         </Col>
//         <Col>
//           <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
//             <Button
//               type="text"
//               style={{ color: "white", display: "flex", alignItems: "center" }}
//             >
//               <Avatar
//                 src="/avatar.jpg"
//                 icon={<UserOutlined />}
//                 style={{ marginRight: 8 }}
//               />
//               <Space>
//                 {userInfo?.name || "User"}
//                 <DownOutlined />
//               </Space>
//             </Button>
//           </Dropdown>
//         </Col>
//       </Row>
//     </Header>
//   );
// };

// export default DashboardNavbar; good


// import React from 'react';
// import { Dropdown, Menu, Avatar } from 'antd';
// import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';

// const Dashboardnavbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // clear localStorage / tokens etc.
//     localStorage.clear();
//     navigate('/login');
//   };

//   const menu = (
//     <Menu>
//       <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
//         Logout
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div className="flex justify-end items-center p-4 bg-[#1E3A8A] text-white shadow-md">
//       <Dropdown overlay={menu} placement="bottomRight">
//         <Avatar
//           size="large"
//           icon={<UserOutlined />}
//           className="cursor-pointer"
//         />
//       </Dropdown>
//     </div>
//   );
// };

// export default Dashboardnavbar;

import React from 'react';
import { Dropdown, Menu, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Dashboardnavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const menu = (
    <Menu className="min-w-[120px] rounded-md shadow-lg border border-amber-100">
      <Menu.Item 
        key="logout" 
        icon={<LogoutOutlined className="text-amber-700" />} 
        onClick={handleLogout}
        className="hover:!bg-amber-50"
      >
        <span className="text-amber-700">Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex justify-end items-center p-3 sm:p-4 bg-amber-800 shadow-sm">
      <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
        <div className="flex items-center cursor-pointer hover:bg-amber-700 px-2 sm:px-3 py-1 rounded-lg transition-colors">
          <Avatar
            size="default"
            icon={<UserOutlined />}
            className="bg-amber-600 mr-2"
          />
          <span className="text-white font-medium mr-1 hidden sm:inline">Admin</span>
          <DownOutlined className="text-amber-200 text-xs" />
        </div>
      </Dropdown>
    </div>
  );
};

export default Dashboardnavbar;