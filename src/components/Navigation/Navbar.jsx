import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../utils/Button';
import Menu from '../../utils/Menu';
import { CgMenuRightAlt } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {
  return (
    <div className='shadow-lg lg:shadow-none'>

      {/* NAV START */}

      <nav className='container flex justify-between items-center py-4'>

        {/* LOGO OPTION */}
        <Link to='/'>
          <img className='max-w-[150px]' src="/Logo.png" alt="" />
        </Link>

        {/* MENU OPTION--- */}
        <div className='hidden lg:block'>
          <Menu />
        </div>

        {/* BUTTON OPTION */}
        <div className='hidden lg:block'>
          <Button style={`font-inter font-medium text-[16px] text-black leading-[145%] cursor-pointer rounded-md outline-1 outline-[#0DB760] py-4 px-6 shadow-md hover:bg-[#0DB760] hover:text-[white]`} title="Download CV" />
        </div>
        {/* ICON */}
        <div className='lg:hidden text-2xl text-[#0DB720] font-bold outline-1 p-2 rounded cursor-pointer hover:bg-[#00B720] hover:text-[white]'>
          <CgMenuRightAlt />
        </div>
      </nav>

      {/* RESPONSIVE MOBILE DEVICE */}

      <div className='w-full h-screen bg-black/50 absolute top-0 left-0 lg:hidden'>
        <div className='w-[80%] bg-white max-w-[300px] h-full relative'>

          <Menu />
          <span className='absolute top-5 right-5 text-xl text-[#00B270] outline p-2 rounded'>
            <MdOutlineClose />
          </span>
        </div>
      </div>
    </div>
  )

}
export default Navbar
