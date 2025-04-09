// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import Sidebar from "./sidebar/Sidebar";
// import Dashboardnavbar from "./navbar/Dashboardnavbar";
// import Headerstats from "./components/Headerstats";
// import User from "./sidebar/User/User";
// import Bike from "./sidebar/Bikes/Bike";
// import AddBike from "./sidebar/Bikes/AddBike";
// import DashboardHome from "./DashboardHome";
// import EditBike from "./sidebar/Bikes/EditBike";
// import Order from "./sidebar/Order/Order";
// import Category from "./sidebar/Category/Category";
// import AddCategory from "./sidebar/Category/AddCategory";
// import EditCategory from "./sidebar/Category/EditCategory";

// const Dashboard = () => {
//   const dispatch = useDispatch();

//   return (
//     <div className='bg-[#fae4ca] h-screen'>
//       <div className=''>
//         <Sidebar />
//         <div className='relative md:ml-64 '>
//           <Dashboardnavbar />
//           {/* Header */}
//           <Headerstats />
//           <div className='w-full px-4 mx-auto -m-24 md:px-10 bg-[#fae4ca]'>
//             <Routes>
//               <Route path='/admin' element={<DashboardHome />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard; // original code


// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import DashboardHome from "./DashboardHome";
// import User from "./sidebar/User/User";
// import Bike from "./sidebar/Bikes/Bike";
// import AddBike from "./sidebar/Bikes/AddBike";
// import EditBike from "./sidebar/Bikes/EditBike";
// import Order from "./sidebar/Order/Order";
// import Category from "./sidebar/Category/Category";
// import AddCategory from "./sidebar/Category/AddCategory";
// import EditCategory from "./sidebar/Category/EditCategory";
// //import AdminLayout from "./components/AdminLayout"; // 👈 Use the new layout

// const Dashboard = () => {
//   return (
//     //<AdminLayout>
//       <Routes>
//         <Route path='/admin' element={<DashboardHome />} />
//         <Route path='/admin/users' element={<User />} />
//         <Route path='/admin/bikes' element={<Bike />} />
//         <Route path='/admin/bikes/add' element={<AddBike />} />
//         <Route path='/admin/bikes/edit/:id' element={<EditBike />} />
//         <Route path='/admin/orders' element={<Order />} />
//         <Route path='/admin/category' element={<Category />} />
//         <Route path='/admin/category/add' element={<AddCategory />} />
//         <Route path='/admin/category/edit/:id' element={<EditCategory />} />
//       </Routes>
//    // </AdminLayout>
//   );
// };

// export default Dashboard;



import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Sidebar from "./sidebar/Sidebar";
import Dashboardnavbar from "./navbar/Dashboardnavbar";
import Headerstats from "./components/Headerstats";
import User from "./sidebar/User/User";
import Bike from "./sidebar/Bikes/Bike";
import AddBike from "./sidebar/Bikes/AddBike";
import DashboardHome from "./DashboardHome";
import EditBike from "./sidebar/Bikes/EditBike";
import Order from "./sidebar/Order/Order";
import Category from "./sidebar/Category/Category";
import AddCategory from "./sidebar/Category/AddCategory";
import EditCategory from "./sidebar/Category/EditCategory";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex bg-[#e6f6f6] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Dashboardnavbar />

        {/* Stats Header */}
        <Headerstats />

        {/* Routing Area */}
        <div className="flex-1 px-4 py-6 md:px-10">
          <Routes>
            <Route path="/admin" element={<DashboardHome />} />
            <Route path="/admin/users" element={<User />} />
            <Route path="/admin/bikes" element={<Bike />} />
            <Route path="/admin/add-bike" element={<AddBike />} />
            <Route path="/admin/edit-bike/:id" element={<EditBike />} />
            <Route path="/admin/orders" element={<Order />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/add-category" element={<AddCategory />} />
            <Route path="/admin/edit-category/:id" element={<EditCategory />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
