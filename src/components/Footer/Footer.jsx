import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      {/* <hr /> */}
      <div className="mt-20 grid lg:grid-cols-3 ">
        <div className="grid-cols-1">
          <p className=" text-[#000] ">@ 2022. All Rights Reserved </p>
        </div>
        <div className="grid-cols-1">
          <p className=" text-[#000] ">
            Designed by{" "}
            <span className="text-[#0db760] font-semibold">Rupes Chakma</span>
          </p>
        </div>
        <div className="grid-cols-1">
          <div className="flex gap-4 text-[20px] text-[#0db760]">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaLinkedin />
            <FaGithubSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
