import React from "react";
import Button from "../../utils/Button";
import {
  IoDiamondOutline,
  IoPulseOutline,
  IoSchoolOutline,
  IoColorPaletteOutline,
} from "react-icons/io5";
import "./skills.css";

const Myskills = () => {
  // ডাটাগুলোকে একটি Array-তে রাখলে কোড ক্লিন থাকে
  const skills = [
    {
      icon: <IoDiamondOutline />,
      title: "Visual Design",
      desc: "Create user interface design with unique & modern ideas",
    },
    {
      icon: <IoPulseOutline />,
      title: "Design Prototype",
      desc: "Create advance design prototype with Figma apps.",
    },
    {
      icon: <IoSchoolOutline />,
      title: "UX Research",
      desc: "Create digital user products with updated ideas",
    },
    {
      icon: <IoColorPaletteOutline />, // চতুর্থ একটি স্কিল যোগ করলাম গ্রিড পূর্ণ করার জন্য
      title: "Art Direction",
      desc: "Developing the visual style and images for projects.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: Content */}
        <div>
          <h2 className="skills font-medium text-[20px] text-[#0052CC] mb-2">
            My Skills
          </h2>
          <h1 className="font-inter font-semibold text-[35px] lg:text-[45px] leading-[1.2] text-[#0b0c0c]">
            Why Hire Me For Your Next{" "}
            <span className="text-[#0052CC]">Project?</span>
          </h1>
          <p className="mt-6 text-[#434343] text-[16px] leading-[1.6] max-w-md">
            I’m a specialist in UI/UX Design. My passion is designing & solving
            problems through user experience and research.
          </p>

          <div className="mt-8">
            <Button
              style={`font-inter font-medium text-[16px] text-white cursor-pointer rounded-md bg-[#0052CC] hover:bg-[#0052CC] py-3 px-8 shadow-md transition-all`}
              title="Hire Me"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0052CC]/30 transition-all duration-300 group"
            >
              <div className="text-[#0052CC] text-[32px] mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h2 className="text-[20px] font-semibold font-inter text-[#11142d] mb-2">
                {skill.title}
              </h2>
              <p className="text-[#92929d] text-[14px] leading-[1.5]">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myskills;
