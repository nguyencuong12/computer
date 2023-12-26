"use client";
import React, { useState } from "react";
import { navLinks } from "@/constants";
import { logo, menu, close, shopping } from "@/assets";
import { SearchForm } from "@/components";

const NavbarComponent = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo.src} alt="Log 123" className="w-[120px] h-[32px]"></img>
      <SearchForm />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {/* {navLinks.map((nav,index))} */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] sm:text-[14px] ${active === nav.title ? "text-white" : "text-dimWhite"}
          ${index === navLinks.length - 1 ? "mr-0" : "mr-4"}
          `}
          >
            <a href={`${nav.id}`}> {nav.title} </a>
          </li>
        ))}
      </ul>
      <div className="ml-4 relative border-2 hidden md:block">
        <span className="dot absolute left-4 bottom-4">2</span>
        <a href="#">
          <img src={shopping.src} className="max-w-[25px]"></img>
        </a>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close.src : menu.src}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        ></img>
      </div>
      <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[300px] rounded-xl sidebar z-50`}>
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${
                index === navLinks.length - 1 ? "mb-0" : "mb-4"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <div className="relative mt-4 ">
            <span className="dot absolute left-4 bottom-4">2</span>
            <a href="#">
              <img src={shopping.src} className="max-w-[25px]"></img>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
