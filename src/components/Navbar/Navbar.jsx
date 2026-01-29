import React from "react";

import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="w-full px-20 py-6 flex justify-between fixed top-0 z-50 ">
      <div className="flex text-[14px]  items-center gap-5">
        <img className="w-30" src={logo} alt="" />
        <ul className="flex gap-4 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>
      </div>
      <div className="flex items-center gap-4 ">
        <img src={search_icon} alt="" className="w-5 cursor-pointer" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="w-5 cursor-pointer" />
        <div className="flex items-center gap-5 cursor-pointer relative group ">
          <img src={profile_img} alt="" className="rounded-sm w-9" />
          <img src={caret_icon} alt="" />
          <div className="absolute top-10 right-0 z-50 w-max px-4 py-3 underline bg-[#191919] opacity-0 group-hover:opacity-100 transition-opacity ">
            <p className="text-sm cursor-pointer">sign out of netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
