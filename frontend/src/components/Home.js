import React, { useEffect } from "react";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Main from "./Main";
import Layout from "./Layout";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout className='bg-slate-50'>
      <Main />
      <Categories />
      <Testimonial />
    </Layout>
  );
};

export default Home;
