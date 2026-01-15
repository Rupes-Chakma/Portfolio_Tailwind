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
          <h3 className="heading font-inter font-medium text-[20px] leading-[140%] text-[#0DB720] mb-4">
            Welcome
          </h3>
          <h1 className="font-inter font-semibold text-[35px] lg:text-[58px] leading-[120%] text-[#000]">
            I have <span className="text-[#0DB720]">Creative Design </span>
            Experience
          </h1>
          <p className=" mt-2 justify-start font-normal text-[#323433]  font-Inter leading-6">
            I’m Tanvir, a creative Product Designer. I’ve been helping
            businesses to solve their problems with my design for 2 years.
          </p>

          <div className="flex gap-4 mt-6">
            <Button
              style={`font-inter font-medium text-[16px] text-white leading-[145%] cursor-pointer rounded-md outline bg-[#0DB720] hover:outline-[#0DB760] py-4 px-6 shadow-md hover:bg-transparent hover:text-[#0DB720]`}
              title="Contact Me"
            />
            <Button
              style={`font-inter font-medium text-[16px] py-4 px-6 hover:bg-transparent hover:text-[#0DB720]`}
              title=" View Portfolio"
              arrow={<RxArrowTopRight />}
            />
          </div>
        </div>

        <div className="relative  lg:flex justify-end space-x-10">
          <div className="flex justify-center lg:justify-end mt-5 lg:mt-0">
            <img src="/hero_man.png" alt="hero" />
          </div>
          <div className="lg:absolute lg:top-0 lg:-right-30 h-full ">
            <div className="flex justify-start gap-4 lg:rotate-90 mt-5 lg:mt-[100%] items-center  text-[#0DB720] ">
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
