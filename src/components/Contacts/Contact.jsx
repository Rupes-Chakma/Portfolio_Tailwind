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
              <div className="rounded-md py-4 px-4 bg-[#0DB760] flex items-center justify-center ">
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
