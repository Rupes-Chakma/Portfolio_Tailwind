import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import Menu from "../../utils/Menu";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  let [openMenu, setOpenMenu] = useState(false);
  let toggler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="shadow-lg lg:shadow-none">
      {/* NAV START */}

      <nav className="container flex justify-between items-center py-4">
        {/* LOGO OPTION */}
        <Link to="/">
          <img className='"max-w-[150px]"' src="/logo.svg" alt="logo" />
        </Link>
        {/* MENU OPTION--- */}
        <div className="hidden lg:block">
          <Menu />
        </div>
        {/* BUTTON OPTION */}
        <div className="hidden lg:block dot-content">
          <span className="dot"></span>
          <Button
            style={`font-inter font-medium text-[16px] text-black leading-[145%] cursor-pointer rounded-md outline-1 outline-[#0052CC] py-3 px-6 shadow-md hover:bg-[#0052CC] hover:text-[white]`}
            title="Download CV"
          />
        </div>
        {/* ICON */}
        <div
          onClick={toggler}
          className="lg:hidden text-2xl text-[#0052CC] font-bold outline-1 p-2 rounded cursor-pointer hover:bg-[#0052CC] hover:text-[white]"
        >
          <CgMenuRightAlt />
        </div>
      </nav>

      {/* RESPONSIVE MOBILE DEVICE */}

      <div
        className={`w-full h-screen z-55 bg-black/50 absolute top-0 left-0 lg:hidden -translate-x-[100%] ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-200 ease-in-out`}
      >
        <div className="w-[80%] bg-white 'max-w-[300px]' h-full relative">
          <Menu menuData={openMenu} togglerData={toggler} />
          <span
            onClick={toggler}
            className="absolute top-5 right-5 text-xl text-[#0052CC] outline p-2 rounded hover:bg-[#0052CC] hover:text-white"
          >
            <MdOutlineClose />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
