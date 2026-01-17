// import React from "react";
// import "./contact.css";
// import Button from "../../utils/Button";
// import { IoCallOutline } from "react-icons/io5";
// const Contact = () => {
//   return (
//     <div className="container">
//       {/* HEADER SECTION */}
//       <div className="text-center mt-10">
//         <p className="contact text-[#0db620] font-inter font-medium text-[20px] leading-[150%] mb-2">
//           Contact
//         </p>
//         <h3 className="text-[40px] leading-[135%] text-[#0b0c0c] font-semibold">
//           Let’s Discuss Your <span className="text-[#0db620]">Project</span>{" "}
//         </h3>
//         <p className="font-normal text-[16px] leading-[145%] text-[#434343] mt-4 mb-10">
//           Let’s make something new, different and more meaningful or make thing
//           more visual or conceptual
//         </p>
//       </div>

//       {/* FORM SECTION */}
//       <div className="grid lg:grid-cols-3  mb-20">
//         <div className="grid-cols-1 mr-10 ">
//           <div className="flex flex-row gap-5 items-center p-2 rounded-md mb-8 justify-start">
//             <div className="relative">
//               <Button
//                 style={`cursor-pointer rounded-md  py-6 px-6 bg-[#0DB760]`}
//                 title=" "
//               />
//               <IoCallOutline className="cursor-pointer text-[24px]  text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//             </div>

//             <div>
//               <p className="text-[16px] text-[#92929d] leading-[88%] font-normal mb-4">
//                 Call Me
//               </p>
//               <p className="font-medium text-[16px] leading-[133%] text-[#11142d]">
//                 +8801613968687
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-row gap-5 items-center p-2 rounded-md mb-8 justify-start">
//             <div className="relative">
//               <Button
//                 style={`cursor-pointer rounded-md  py-6 px-6 bg-[#0DB760]`}
//                 title=" "
//               />
//               <IoCallOutline className="cursor-pointer text-[24px]  text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//             </div>

//             <div>
//               <p className="text-[16px] text-[#92929d] leading-[88%] font-normal mb-4">
//                 Call Me
//               </p>
//               <p className="font-medium text-[16px] leading-[133%] text-[#11142d]">
//                 +8801613968687
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-row gap-5 items-center p-2 rounded-md mb-8 justify-start">
//             <div className="relative">
//               <Button
//                 style={`cursor-pointer rounded-md  py-6 px-6 bg-[#0DB760]`}
//                 title=" "
//               />
//               <IoCallOutline className="cursor-pointer text-[24px]  text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//             </div>

//             <div>
//               <p className="text-[16px] text-[#92929d] leading-[88%] font-normal mb-4">
//                 Call Me
//               </p>
//               <p className="font-medium text-[16px] leading-[133%] text-[#11142d]">
//                 +8801613968687
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className=" grid col-span-2 items-center">
//           <div className="cols-span-2 grid lg:grid-cols-2 gap-4">
//             <div className="grid-cols-1">
//               <input
//                 className="border p-3 w-full"
//                 type="text"
//                 placeholder="Full Name"
//               />
//             </div>
//             <div className="grid-cols-1 w-full">
//               <input
//                 className="border p-3 w-full"
//                 type="email"
//                 placeholder="Email Address"
//               />
//             </div>
//             <div className="grid-cols-1 w-full">
//               <input
//                 className="border p-3 w-full"
//                 type="text"
//                 placeholder="Phone No"
//               />
//             </div>
//             <div className="grid-cols-1 w-full">
//               <input
//                 className="border p-3 w-full"
//                 type="text"
//                 placeholder="Budget"
//               />
//             </div>
//           </div>
//           <textarea
//             className="border p-2 w-full"
//             placeholder="message"
//           ></textarea>

//           <Button
//             style={` font-inter font-medium text-[16px] text-white leading-[145%] cursor-pointer rounded-md outline bg-[#0DB720] hover:outline-[#0DB760] py-4 px-6 shadow-md hover:bg-transparent hover:text-[#0DB720]`}
//             title="Submit Message"
//           />
//         </div>
//         {/* <div className="bg-red-700 cols-span-2 ml-10">
//           <form className="" action="">
//             <div className="cols-span-2 grid lg:grid-cols-2 gap-4">
//               <div className="grid-cols-1">
//                 <input
//                   className="border p-3"
//                   type="text"
//                   placeholder="Full Name"
//                 />
//               </div>
//               <div className="grid-cols-1">
//                 <input
//                   className="border p-3"
//                   type="email"
//                   placeholder="Email Address"
//                 />
//               </div>
//               <div className="grid-cols-1">
//                 <input
//                   className="border p-3"
//                   type="text"
//                   placeholder="Phone No"
//                 />
//               </div>
//               <div className="grid-cols-1">
//                 <input
//                   className="border p-3"
//                   type="text"
//                   placeholder="Budget"
//                 />
//               </div>
//             </div>
//             <textarea
//               className="border p-2 w-[90%] mt-4"
//               placeholder="message"
//             ></textarea>
//           </form>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import "./contact.css";
import Button from "../../utils/Button";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5"; // আইকনগুলো ইমপোর্ট করে নিন

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      {" "}
      {/* mx-auto দেওয়া হয়েছে যাতে মাঝখানে থাকে */}
      {/* HEADER SECTION */}
      <div className="text-center mt-10">
        <p className="text-[#0db620] contact font-inter font-medium text-[20px] leading-[150%] mb-2">
          Contact
        </p>
        <h3 className="text-[40px] leading-[135%] text-[#0b0c0c] font-semibold">
          Let’s Discuss Your <span className="text-[#0db620]">Project</span>
        </h3>
        <p className="font-normal text-[16px] leading-[145%] text-[#434343] mt-4 mb-10 max-w-2xl mx-auto">
          Let’s make something new, different and more meaningful or make thing
          more visual or conceptual
        </p>
      </div>
      {/* MAIN CONTENT SECTION */}
      <div className="grid lg:grid-cols-3 gap-10 mb-20">
        {/* বাম পাশ: Contact Info */}
        <div className="space-y-6">
          {/* Call Me */}
          <div className="flex flex-row gap-5 items-center p-2">
            <div className="relative">
              <div className="rounded-md py-4 px-4 bg-[#0DB760] flex items-center justify-center">
                <IoCallOutline className="text-[24px] text-[#fff]" />
              </div>
            </div>
            <div>
              <p className="text-[16px] text-[#92929d] font-normal">Call Me</p>
              <p className="font-medium text-[16px] text-[#11142d]">
                +8801613968687
              </p>
            </div>
          </div>

          {/* Email Me */}
          <div className="flex flex-row gap-5 items-center p-2">
            <div className="relative">
              <div className="rounded-md py-4 px-4 bg-[#0DB760] flex items-center justify-center">
                <IoMailOutline className="text-[24px] text-[#fff]" />
              </div>
            </div>
            <div>
              <p className="text-[16px] text-[#92929d] font-normal">Email Me</p>
              <p className="font-medium text-[16px] text-[#11142d]">
                ahmedtanvir8687@gmail.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-row gap-5 items-center p-2">
            <div className="relative">
              <div className="rounded-md py-4 px-4 bg-[#0DB760] flex items-center justify-center">
                <IoLocationOutline className="text-[24px] text-[#fff]" />
              </div>
            </div>
            <div>
              <p className="text-[16px] text-[#92929d] font-normal">Address</p>
              <p className="font-medium text-[16px] text-[#11142d]">
                Zakigonj, Sylhet, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* ডান পাশ: Form Section */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border border-gray-200 rounded-lg p-4 w-full outline-none focus:border-[#0DB720] transition-all"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="border border-gray-200 rounded-lg p-4 w-full outline-none focus:border-[#0DB720] transition-all"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="border border-gray-200 rounded-lg p-4 w-full outline-none focus:border-[#0DB720] transition-all"
              type="text"
              placeholder="Phone No"
            />
            <input
              className="border border-gray-200 rounded-lg p-4 w-full outline-none focus:border-[#0DB720] transition-all"
              type="text"
              placeholder="Budget"
            />
          </div>

          {/* Message Area */}
          <textarea
            className="border border-gray-200 rounded-lg p-4 w-full min-h-[150px] outline-none focus:border-[#0DB720] transition-all"
            placeholder="Message"
          ></textarea>

          {/* Submit Button - Align Right */}
          <div className="flex justify-end mt-2">
            <Button
              style={`font-inter font-medium text-[16px] text-white leading-[145%] cursor-pointer rounded-md bg-[#0DB720] hover:bg-[#099119] py-4 px-10 shadow-md transition-all`}
              title="Submit Message"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
