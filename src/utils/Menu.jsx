import React from "react";
import { NavLink } from "react-router-dom";

let menus = [
  { id: 1, title: "Aboute", path: "/" },
  { id: 2, title: "Skills", path: "/Skills" },
  { id: 3, title: "Project", path: "/Project" },
  { id: 4, title: "Experience", path: "/Experience" },
  { id: 5, title: "Contact", path: "/Contact" },
];

const Menu = ({ menuData, togglerData }) => {
  return (
    <div className="h-full">
      <ul className="flex flex-col lg:flex-row gap-6 items-center justify-center h-full">
        {menus.map((menu, index) => (
          <li
            onClick={() => togglerData(!menuData)}
            key={index}
            className={`font-inter font-medium text-[16px] text-black leading-[145%] hover:text-[#00B760]`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#0052CC]" : "text-black"
              }
              to={menu.path}
            >
              {" "}
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
