import React from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./reviews.css";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Amir Uddin",
      role: "UX Designer",
      image: "https://i.pravatar.cc/150?u=1",
      review:
        "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
    },
    {
      id: 2,
      name: "Salim Ahmed",
      role: "UI Designer",
      image: "https://i.pravatar.cc/150?u=2",
      review:
        "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
    },
    {
      id: 3,
      name: "Guy Hawkins",
      role: "UX Designer",
      image: "https://i.pravatar.cc/150?u=3",
      review:
        "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
    },
    {
      id: 4,
      name: "Rupes",
      role: "UX Designer",
      image: "https://i.pravatar.cc/150?u=4",
      review:
        "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
    },
  ];

  return (
    <section className="container mx-auto mt-12 px-4 py-20 font-poppins">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <span className="reviews border-[#0052CC] text-[#0052CC] px-4 py-1  text-sm font-medium">
            Reviews
          </span>

          <h2 className="text-[32px] md:text-[45px] font-bold text-[#11142d] mt-4 leading-tight">
            Our Customer Say <br />
            Something <span className="text-[#0052CC]">About Us</span>
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <button className="review-prev p-3 border border-gray-200 rounded-full hover:bg-[#0052CC] hover:text-white transition-all text-gray-400">
            <FaArrowLeft />
          </button>
          <button className="review-next p-3 border border-gray-200 rounded-full hover:bg-[#0052CC] hover:text-white transition-all text-gray-400">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".review-prev",
          nextEl: ".review-next",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviewsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="p-8 rounded-3xl bg-white border border-[#0052CC] shadow-sm hover:shadow-lg transition-shadow h-full">
              {/* Stars */}
              <div className="flex gap-1 text-[#FF8A71] mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#434343] leading-[1.6] mb-8 italic">
                "{item.review}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#11142d]">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
