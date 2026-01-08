import React from 'react'
import { NavLink } from 'react-router-dom';

let menus = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Aboute', path: '/aboute' },
  { id: 3, title: 'Skills', path: '/skills' },
  { id: 4, title: 'Portfolio', path: '/portfolio' },
  { id: 5, title: 'Testimonial', path: '/testimonial' }
];

const Menu = () => {
  return (
    <div className='h-full'>
      <ul className='flex flex-col lg:flex-row gap-6 items-center justify-center h-full'>
        {
          menus.map((menu, index) => {
            return (
              <li key={index} className="font-inter font-medium text-[16px] text-black leading-[145%] hover:text-[#00B760]">

                <NavLink className={({ isActive }) => (isActive ? 'text-[#00b760]' : 'text-black')} to={menu.path} > {menu.title}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Menu