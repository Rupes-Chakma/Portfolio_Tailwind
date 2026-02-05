import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./Slider.css";
import Button from "./../../utils/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Slider = () => {
  return (
    <div id="slider">
      <div className="container">
        <div className="lg:grid lg:grid-cols-3 gap-10">
          <div className=" col-span-1 flex flex-col gap-4 justify-center mb-5">
            <span className="text-[#0052CC] font-semibold">Portfolio</span>

            <h2 className="text-[40px] font-semibold leading-[135%] font-inter text-[#000]">
              My Cretive Works Latest{" "}
              <span className="text-[#0052CC]">Project</span>
            </h2>
            <p className="">
              I heave selected and mentioned here some of my last project share
              with you
            </p>
            <Button
              style={`font-inter font-medium text-[16px] text-white cursor-pointer rounded-md bg-[#0052CC] hover:bg-[#0052CC] py-3 px-8 shadow-md transition-all`}
              title="Show More"
            />
          </div>

          <div className="lg:col-span-2 relative">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              navigation={{
                nextEl: ".rightArrow",
                prevEl: ".leftArrow",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="./img1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img2.png" alt="" />
              </SwiperSlide>
            </Swiper>

            <div className="z-99 absolute  lg:bottom-0 lg:right-10 flex gap-10 lg:text-2xl text-[#0052CC] cursor-pointer">
              <span className=" leftArrow bg-[#fff] p-2 rounded-full shadow">
                <GoArrowLeft />
              </span>
              <span className=" rightArrow bg-[#fff] p-2 rounded-full shadow">
                <GoArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
