import React from "react";
import "./Hero.css";
import Button from "../../utils/Button";
import { RxArrowTopRight } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="container py-4 lg:py-0">
      <div className="lg:grid grid-cols-2 items-center">
        <div className="">
          <h3 className="heading font-inter font-medium text-[20px] leading-[140%] text-[#0052CC] mb-4">
            Welcome
          </h3>
          <h1 className="font-inter font-semibold text-[35px] lg:text-[58px] leading-[120%] text-[#000]">
            I have <span className="text-[#0052CC]">Creative Design </span>
            Experience
          </h1>
          <p className=" mt-2 justify-start font-normal text-[#323433]  font-Inter leading-6">
            I specialize in building elegant, responsive, and useraplications
            web using using the latest technologies and best practices. My goal
            is to create seamless digital experiences that leave a lasting
            impact on users.
          </p>

          <div className="flex gap-4 mt-6">
            <Button
              style={`font-inter font-medium text-[16px] text-white leading-[145%] cursor-pointer rounded-md outline bg-[#0052CC] hover:outline-[#0052CC] py-4 px-6 shadow-md hover:bg-transparent hover:text-[#0052CC]`}
              title="Contact Me"
            />
            <Button
              style={`font-inter font-medium text-[16px] py-4 px-6 hover:bg-transparent hover:text-[#0052CC] cursor-pointer`}
              title=" View Portfolio"
              arrow={<RxArrowTopRight />}
            />
          </div>
        </div>

        <div className="relative  lg:flex justify-end space-x-10">
          <div className="flex justify-center lg:justify-end mt-5 lg:mt-0">
            <img src="/Mask.svg" alt="hero" />
          </div>
          <div className="lg:absolute lg:top-0 lg:-right-30 h-full ">
            <div className="flex justify-start gap-4 lg:rotate-90 mt-5 lg:mt-[100%] items-center  text-[#0052CC] ">
              <p className="text-[18px]">Follow me on :</p>
              <div className="flex gap-4 text-[20px]">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaLinkedin />
                <FaGithubSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
