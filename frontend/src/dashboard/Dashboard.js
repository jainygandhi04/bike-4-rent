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
    <div className='bg-[#fae4ca] h-screen'>
      <div className=''>
        <Sidebar />
        <div className='relative md:ml-64 '>
          <Dashboardnavbar />
          {/* Header */}
          <Headerstats />
          <div className='w-full px-4 mx-auto -m-24 md:px-10 bg-[#fae4ca]'>
            <Routes>
              <Route path='/admin' element={<DashboardHome />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
