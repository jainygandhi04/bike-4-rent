import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Loading";
import Dashboard from "../dashboard/Dashboard";
import User from "../dashboard/sidebar/User/User";
import Category from "../dashboard/sidebar/Category/Category";
import AddCategory from "../dashboard/sidebar/Category/AddCategory";
import EditCategory from "../dashboard/sidebar/Category/EditCategory";
import Bike from "../dashboard/sidebar/Bikes/Bike";
import AddBike from "../dashboard/sidebar/Bikes/AddBike";
import EditBike from "../dashboard/sidebar/Bikes/EditBike";
import Ordertable from "../dashboard/sidebar/Order/Ordertable";

// Lazy Load Components
const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Signup = lazy(() => import("./Signup"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const Cart = lazy(() => import("./Cart"));
const Order = lazy(() => import("./Order"));
const Categories = lazy(() => import("./Categories"));
const Contact = lazy(() => import("./Contact"));
const OrderDropdown = lazy(() => import("./OrderDropdown"));
const BikeRentSection = lazy(() => import("./BikeRentSection"));
const Testimonial = lazy(() => import("./Testimonial"));

// Static Pages
const AboutUs = lazy(() => import("./AboutUs"));
const Faqs = lazy(() => import("./FAQs"));
const Terms = lazy(() => import("./Terms"));
const Payment = lazy(() => import("./Payment"));

// Error Handling
const Unauthorized = lazy(() => import("../Helper/Unauthorized"));

const App1 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar scrolled={scrolled} />
        <div className="mt-16 bg-slate-50 min-h-screen">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/bikecategory" element={<Categories />} />
            <Route path="/bikerentsection" element={<BikeRentSection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orderdropdown" element={<OrderDropdown />} />
            <Route path="/reviews" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order/:slug" element={<Order />} />

             {/* Admin Routes */}
          <Route path= '/admin' element = {<Dashboard/>}/>
          <Route path='/users' element={<User />} />
              <Route path='/category' element={<Category/>} />
              <Route path='/category/add' element={<AddCategory />} />
              <Route path='/category/edit/:id' element={<EditCategory />} />
              <Route path='/bikes' element={<Bike />} />
              <Route path='/bikes/add' element={<AddBike />} />
              <Route path='/bikes/edit/:id' element={<EditBike />} />
              <Route path='/userorders' element={<Ordertable />} />

            {/* Static Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/payment" element={<Payment />} />

            {/* Catch-All Route */}
            <Route path="*" element={<Unauthorized />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default App1;
