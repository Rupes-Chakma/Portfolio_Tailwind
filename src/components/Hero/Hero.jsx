import React from "react";
import "./Hero.css";
import Button from "../../utils/Button";
import { RxArrowTopRight } from "react-icons/rx";
const Hero = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h3 className="heading font-inter font-medium text-[20px] leading-[140%] text-[#0DB720] mb-4">
            Welcome
          </h3>
          <h1 className="font-inter font-semibold text-[58px] leading-[120%] text-[#000]">
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

        <div>
          <img src="/hero_man.png" alt="hero" />
          <p>i am rupes</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
