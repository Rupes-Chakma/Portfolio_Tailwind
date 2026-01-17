// import React from "react";
// import "./skills.css";
// import Button from "../../utils/Button";
// import { IoDiamondOutline } from "react-icons/io5";
// import { IoPulseOutline } from "react-icons/io5";
// import { IoSchoolOutline } from "react-icons/io5";

// const Myskills = () => {
//   return (
//     <div className="container">
//       <div className="mt-20">
//         <div className="grid lg:grid-cols-2">
//           <div className="grid-cols-1">
//             <h2 className="skills font-medium text-[20px] text-[#00b270]">
//               My Skills
//             </h2>
//             <h1 className="font-inter mt-2 font-semibold text-[35px] lg:text-[40px] leading-[135%] text-[#000]">
//               Why Hire Me For Your Next Project?{" "}
//               <span className="text-[#0DB720]">Project? </span>
//             </h1>
//             <p className="mt-5">
//               I’m specialist in UI/UX Designe. My passion is designing & solving
//               problems through user experience and research.
//             </p>

//             <Button
//               style={` mt-5 font-inter font-medium text-[16px] text-white leading-[145%] cursor-pointer rounded-md outline bg-[#0DB720] hover:outline-[#0DB760] py-3 px-6 shadow-md hover:bg-transparent hover:text-[#0DB720]`}
//               title="Hire Me"
//             />
//           </div>

//           <div className=" grid mt-4 lg:grid-cols-2 gap-6">
//             <div className="">
//               <IoDiamondOutline className="text-[#0Db760] text-[24px] font-bold" />
//               <h2 className="text-[20px] mt-2 font-inter font-semibold">
//                 Visual Design
//               </h2>
//               <p className="mt-2 font-inter">
//                 Create user interface design with unique & modern ideas
//               </p>
//             </div>
//             <div className="">
//               <IoPulseOutline className="text-[#0Db760] text-[24px] font-bold" />
//               <h2 className="text-[20px] mt-2 font-semibold font-inter">
//                 Design Prototype
//               </h2>
//               <p className="mt-2 font-inter">
//                 Create advance design prototype with Figma apps.
//               </p>
//             </div>
//             <div className="">
//               <IoSchoolOutline className="text-[#0Db760] text-[24px] font-bold" />
//               <h2 className="text-[20px] mt-2 font-inter font-semibold">
//                 {" "}
//                 UX Research
//               </h2>
//               <p className="mt-2 font-inter">
//                 Create digital user products with updated ideas
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Myskills;
import React from "react";
import Button from "../../utils/Button";
import {
  IoDiamondOutline,
  IoPulseOutline,
  IoSchoolOutline,
  IoColorPaletteOutline,
} from "react-icons/io5";

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
          <h2 className="skills font-medium text-[20px] text-[#00b270] mb-2">
            My Skills
          </h2>
          <h1 className="font-inter font-semibold text-[35px] lg:text-[45px] leading-[1.2] text-[#0b0c0c]">
            Why Hire Me For Your Next{" "}
            <span className="text-[#0DB720]">Project?</span>
          </h1>
          <p className="mt-6 text-[#434343] text-[16px] leading-[1.6] max-w-md">
            I’m a specialist in UI/UX Design. My passion is designing & solving
            problems through user experience and research.
          </p>

          <div className="mt-8">
            <Button
              style={`font-inter font-medium text-[16px] text-white cursor-pointer rounded-md bg-[#0DB720] hover:bg-[#099119] py-3 px-8 shadow-md transition-all`}
              title="Hire Me"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0DB720]/30 transition-all duration-300 group"
            >
              <div className="text-[#0Db760] text-[32px] mb-4 group-hover:scale-110 transition-transform duration-300">
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
