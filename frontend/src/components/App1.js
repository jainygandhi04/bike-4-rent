import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Order from "./Order";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Unauthorized from "../Helper/Unauthorized";
import Categories from "./Categories";
import Contact from "./Contact";
import ForgotPassword from "./ForgotPassword";
import OrderDropdown from "./OrderDropdown";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BikeRentSection from "./BikeRentSection";
import Testimonial from "./Testimonial";

// Static pages
import AboutUs from "./AboutUs";
import Faqs from "./FAQs";
import Terms from "./Terms";

const App1 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <div className='mt-16 bg-slate-50'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/bikecategory' element={<Categories />} />
          <Route path='/bikerentsection' element={<BikeRentSection />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orderdropdown' element={<OrderDropdown />} />
          <Route path='/reviews' element={<Testimonial />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/order/:slug' element={<Order />} />

          {/* New pages */}
          <Route path='/about' element={<AboutUs />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/terms' element={<Terms />} />

          {/* Catch-all */}
          <Route path='*' element={<Unauthorized />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App1;
