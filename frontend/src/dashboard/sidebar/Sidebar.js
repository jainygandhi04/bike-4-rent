// /*eslint-disable*/
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// // import NotificationDropdown from "../../Components/Dropdowns/NotificationDropdown.js";
// // import UserDropdown from "../../Components/Dropdowns/UserDropdown.js";
// // import Spinner from "../../Helper/Spinner.js";

// export default function Sidebar() {
//   const [collapseShow, setCollapseShow] = React.useState("hidden");
//   const { userInfo } = useSelector((state) => state.auth);
//   //   if (userInfo) {
//   return (
//     <>
//       <nav className='flex-wrap items-center justify-between px-6 py-4 text-[#000839] shadow-xl relativeflex bg-teal-200 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64'>
//         <div className='flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap'>
//           {/* Toggler */}
//           <button
//             className='px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden'
//             type='button'
//             onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
//           >
//             <i className='fas fa-bars'></i>
//           </button>
//           {/* Brand */}
//           <Link
//             className='inline-block p-4 px-0 mr-0 text-2xl font-extrabold text-center uppercase shadow md:block md:pb-2 whitespace-nowrap'
//             to='/'
//           >
//             Bike-4-Rent
//           </Link>
//           <div
//             className={
//               "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative  md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
//               collapseShow
//             }
//           >
//             {/* Collapse header */}
//             <div className='block pb-2 mb-2 border-solid md:min-w-full md:hidden'>
//               <div className='flex flex-wrap'>
//                 <div className='w-6/12'>
//                   <Link
//                     className='inline-block px-0 mr-0 text-sm font-bold text-left uppercase md:block whitespace-nowrap'
//                     to='/'
//                   >
//                     Bike-4-Rent
//                   </Link>
//                 </div>
//                 <div className='flex justify-end w-6/12'>
//                   <button
//                     type='button'
//                     className='px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden'
//                     onClick={() => setCollapseShow("hidden")}
//                   >
//                     <i className='fas fa-times'></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* Form */}
//             <form className='mt-6 mb-4 md:hidden'>
//               <div className='pt-0 mb-3'>
//                 <input
//                   type='text'
//                   placeholder='Search'
//                   className='w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none'
//                 />
//               </div>
//             </form>

//             {/* Divider */}
//             <hr className='my-4 md:min-w-full' />
//             {/* Heading */}
//             <h6 className='block pt-1 pb-4 text-base font-bold text-gray-900 no-underline uppercase md:min-w-full'>
//               All datas
//             </h6>
//             {/* Navigation */}

//             <ul className='flex flex-col pt-1 list-none md:flex-col md:min-w-full md:mb-4'>
//               <li className='items-center'>
//                 <Link
//                   className='flex items-center text-sm font-bold uppercase '
//                   to='/users'
//                 >
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     strokeWidth={1.5}
//                     stroke='currentColor'
//                     className='w-6 h-6 mr-2'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
//                     />
//                   </svg>
//                   Users
//                 </Link>
//               </li>
//             </ul>

//             <ul className='flex flex-col pt-1 list-none md:flex-col md:min-w-full md:mb-4'>
//               <li className='items-center'>
//                 <Link
//                   className='flex items-center text-sm font-bold uppercase '
//                   to='/category'
//                 >
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     strokeWidth={1.5}
//                     stroke='currentColor'
//                     className='w-6 h-6 mr-2'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z'
//                     />
//                   </svg>
//                   Category
//                 </Link>
//               </li>
//             </ul>
//             <ul className='flex flex-col pt-1 list-none md:flex-col md:min-w-full md:mb-4'>
//               <li className='items-center'>
//                 <Link
//                   className='flex items-center text-sm font-bold uppercase'
//                   to='/bikes'
//                 >
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     strokeWidth={1.5}
//                     stroke='currentColor'
//                     className='w-6 h-6 mr-2'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       d='M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
//                     />
//                   </svg>
//                   Bikes
//                 </Link>
//               </li>
//             </ul>
//             <ul className='flex flex-col pt-1 list-none md:flex-col md:min-w-full md:mb-4'>
//               <li className='items-center'>
//                 <Link
//                   className='flex items-center text-sm font-bold uppercase '
//                   to='/userorders'
//                 >
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     strokeWidth={1.5}
//                     stroke='currentColor'
//                     className='w-6 h-6 mr-2'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
//                     />
//                   </svg>
//                   Bike Orders
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
//   //   } else {
//   //     <Spinner />;
//   //   }
// } good code


/* eslint-disable */


// import React, { useState } from "react";
// import { Layout, Menu } from "antd";
// import {
//   UserOutlined,
//   AppstoreOutlined,
//   CarOutlined,
//   ShoppingCartOutlined,
//   DownloadOutlined,
//   EnvironmentOutlined,
//   MailOutlined 
// } from "@ant-design/icons";



// import { Link } from "react-router-dom";

// const { Sider } = Layout;

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <Sider
//       collapsible
//       collapsed={collapsed}
//       onCollapse={toggleCollapsed}
//       width={220}
//       className="h-screen shadow-lg bg-[#5a4239]"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         overflow: "auto",
//         zIndex: 1000,
//       }}
//     >
//       <div className="flex items-center justify-center p-4">
//         <img
//           src="/images/BikeForRentFinalLogo.png" // replace this with the actual bike-only logo path
//           alt="Bike Logo"
//           style={{
//             height: collapsed ? "40px" : "70px",
//             transition: "all 0.3s ease-in-out",
//             cursor: "default",
//           }}
//         />
//       </div>



//       <Menu
//         theme="light"
//         mode="inline"
//         defaultSelectedKeys={["/users"]}
//         className="bg-teal-200"
//       >
//         <Menu.Item key="/users" icon={<UserOutlined />}>
//           <Link to="/users">Users</Link>
//         </Menu.Item>

//         <Menu.Item key="/category" icon={<AppstoreOutlined />}>
//           <Link to="/category">Category</Link>
//         </Menu.Item>

//         <Menu.Item key="/bikes" icon={<CarOutlined />}>
//           <Link to="/bikes">Bikes</Link>
//         </Menu.Item>

//         <Menu.Item key="/userorders" icon={<ShoppingCartOutlined />}>
//           <Link to="/userorders">Bike Orders</Link>
//         </Menu.Item>

//         <Menu.Item key="/downloadreports" icon={<DownloadOutlined />}>
//           <Link
//             to="https://docs.google.com/spreadsheets/d/1P_US4lNRlt6R1XfVw94XxaxfsMGpf_X1DbRmVtZZ8Kc/edit?usp=sharing"
//             target="_blank"
//           >
//             Download Reports
//           </Link>
//         </Menu.Item>

//         <Menu.Item key="/gpstracking" icon={<EnvironmentOutlined />}>
//           <Link
//             to="https://mvts11.millitrack.com/modern/#/"
//             target="_blank"
//           >
//             GPS Tracking
//           </Link>
//         </Menu.Item>

//         <Menu.Item key="contact" icon={<MailOutlined />}>
//           <Link to="/AdminMessages">Messages</Link>
//         </Menu.Item>




//       </Menu>
//     </Sider>
//   );
// }
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  CarOutlined,
  ShoppingCartOutlined,
  DownloadOutlined,
  EnvironmentOutlined,
  MailOutlined 
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      width={220}
      className="h-screen shadow-lg bg-[#C4A484]" // Lightened primary color
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "auto",
        zIndex: 1000,
      }}
    >
      {/* Logo Container */}
      <div 
        className="flex items-center justify-center p-6 transition-all duration-300"
        style={{
          minHeight: collapsed ? "80px" : "120px",
          backgroundColor: "#C4A484", // Slightly darker accent for logo area
        }}
      >
        <img
          src="/images/BikeForRentFinalLogo.png"
          alt="Bike Logo"
          style={{
            height: collapsed ? "50px" : "90px",
            transition: "all 0.3s ease-in-out",
            cursor: "default",
            filter: "brightness(0.9)" // Lighten logo slightly
          }}
        />
      </div>

      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["/users"]}
        className="bg-[#C4A484]"
        // Remove Ant Design's default selection styles
        style={{ borderRight: 0 }}
        selectedKeys={[]}
      >
        <Menu.Item 
          key="/users" 
          icon={<UserOutlined className="text-[#5D4037]" />}
          className="hover:bg-[#D1B79F] text-[#5D4037] font-medium"
        >
          <Link to="/users" className="text-[#5D4037] hover:text-[#3E2723]">Users</Link>
        </Menu.Item>

        <Menu.Item 
          key="/category" 
          icon={<AppstoreOutlined className="text-[#5D4037]" />}
          className="hover:bg-[#D1B79F] text-[#5D4037] font-medium"
        >
          <Link to="/category" className="text-[#5D4037] hover:text-[#3E2723]">Category</Link>
        </Menu.Item>

        <Menu.Item 
          key="/bikes" 
          icon={<CarOutlined className="text-[#5D4037]" />}
          className="hover:bg-[#D1B79F] text-[#5D4037] font-medium"
        >
          <Link to="/bikes" className="text-[#5D4037] hover:text-[#3E2723]">Bikes</Link>
        </Menu.Item>

        <Menu.Item 
          key="/userorders" 
          icon={<ShoppingCartOutlined className="text-[#5D4037]" />}
          className="hover:bg-[#D1B79F] text-[#5D4037] font-medium"
        >
          <Link to="/userorders" className="text-[#5D4037] hover:text-[#3E2723]">Bike Orders</Link>
        </Menu.Item>

        <Menu.Item 
          key="/downloadreports" 
          icon={<DownloadOutlined className="text-[#5D4037]" />}
          className="hover:bg-[#D1B79F] text-[#5D4037] font-medium"
        >
          <Link
            to="https://docs.google.com/spreadsheets/d/1P_US4lNRlt6R1XfVw94XxaxfsMGpf_X1DbRmVtZZ8Kc/edit?usp=sharing"
            target="_blank"
            className="text-[#5D4037] hover:text-[#3E2723]"
          >
            Download Reports
          </Link>
        </Menu.Item>

        <Menu.Item 
          key="/gpstracking" 
          icon={<EnvironmentOutlined className="text-[#5D4037]" />}
          className="hover:bg-[#D1B79F] text-[#5D4037] font-medium"
        >
          <Link
            to="https://mvts11.millitrack.com/modern/#/"
            target="_blank"
            className="text-[#5D4037] hover:text-[#3E2723]"
          >
            GPS Tracking
          </Link>
        </Menu.Item>

        <Menu.Item 
          key="contact" 
          icon={<MailOutlined className="text-[#5D4037]" />}
          className="hover:bg-[#D1B79F] text-[#5D4037] font-medium"
        >
          <Link to="/AdminMessages" className="text-[#5D4037] hover:text-[#3E2723]">Messages</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}