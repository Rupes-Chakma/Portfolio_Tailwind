import React from "react";
import "./skills.css";
import Button from "../../utils/Button";
import { IoDiamondOutline } from "react-icons/io5";
import { IoPulseOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";

const Myskills = () => {
  return (
    <div className="container">
      <div className="mt-20">
        <div className="grid lg:grid-cols-2">
          <div className="grid-cols-1">
            <h2 className="skills text-[#00b270]">My Skills</h2>
            <h1 className="font-inter mt-2 font-semibold text-[35px] lg:text-[40px] leading-[135%] text-[#000]">
              Why Hire Me For Your Next Project?{" "}
              <span className="text-[#0DB720]">Project? </span>
            </h1>
            <p className="mt-5">
              I’m specialist in UI/UX Designe. My passion is designing & solving
              problems through user experience and research.
            </p>

            <Button
              style={` mt-5 font-inter font-medium text-[16px] text-white leading-[145%] cursor-pointer rounded-md outline bg-[#0DB720] hover:outline-[#0DB760] py-3 px-6 shadow-md hover:bg-transparent hover:text-[#0DB720]`}
              title="Hire Me"
            />
          </div>

          <div className=" grid mt-4 lg:grid-cols-2 gap-6">
            <div className="">
              <IoDiamondOutline className="text-[#0Db760] text-[24px] font-bold" />
              <h2 className="text-[20px] mt-2 font-inter font-semibold">
                Visual Design
              </h2>
              <p className="mt-2 font-inter">
                Create user interface design with unique & modern ideas
              </p>
            </div>
            <div className="">
              <IoPulseOutline className="text-[#0Db760] text-[24px] font-bold" />
              <h2 className="text-[20px] mt-2 font-semibold font-inter">
                Design Prototype
              </h2>
              <p className="mt-2 font-inter">
                Create advance design prototype with Figma apps.
              </p>
            </div>
            <div className="">
              <IoSchoolOutline className="text-[#0Db760] text-[24px] font-bold" />
              <h2 className="text-[20px] mt-2 font-inter font-semibold">
                {" "}
                UX Research
              </h2>
              <p className="mt-2 font-inter">
                Create digital user products with updated ideas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskills;
