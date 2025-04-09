import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "antd";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("/api/v1/review/all");
        if (res.data.success) {
          setReviews(res.data.reviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto'>
        <h2 className='text-center mb-8 text-xl font-medium tracking-tight sm:text-3xl text-slate-900'>
          Our Testimonials
        </h2>
        <Carousel autoplay className='mx-auto w-[20rem] sm:w-[26rem]'>
          {reviews.map((review, index) => (
            <div
              className='px-3 py-6 mb-6 border-2 rounded-md'
              key={index}
            >
              <div className='flex flex-col items-center justify-center text-center'>
                <img
                  alt='testimonial'
                  className='w-20 h-20 mb-6 rounded-full object-cover border-2 border-gray-200 bg-gray-100'
                  src='/images/testimonials/avatar.jpg'
                />
                <p className='leading-relaxed italic'>" {review.message} "</p>
                <div className='flex mt-4'>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-500 text-lg ${
                        i < review.rating ? "fas fa-star" : "far fa-star"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h2 className='mt-4 text-sm font-medium tracking-wider text-gray-900 title-font'>
                  - {review.name}
                </h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
