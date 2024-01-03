"use client";
import React, { useState } from "react";
import { navLinks, categories } from "@/constants";
import { logo_tokyo, menu, close, shopping } from "@/assets";
import { DropdownBtn, SearchForm } from "@/components";

import Link from "next/link";
const NavbarComponent = () => {
  const [active, setActive] = useState("Trang chủ");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <div className="flex-1">
        <SearchForm />
      </div>
      <Link href="/" className="">
        <img src={logo_tokyo.src} alt="Log 123" className="w-[120px] h-[100px] object-contain"></img>
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-poppins font-semibold cursor-pointer text-[16px] sm:text-[14px] ${active === nav.title ? "text-red" : "text-[#00000]"}
          ${index === navLinks.length - 1 ? "mr-0" : "mr-4"}
          `}
          >
            <a href={`${nav.id}`}> {nav.title} </a>
          </li>
        ))}
      </ul>
      <div className="ml-4 relative  hidden md:block">
        <span className="dot absolute left-4 bottom-4">2</span>
        <Link href="gio-hang">
          <img src={shopping.src} className="max-w-[25px]"></img>
        </Link>
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
      <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-white z-10 absolute top-32 left-0 right-0 my-2 min-w-full  h-auto sidebar z-50`}>
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`t font-poppins font-semibold cursor-pointer text-[16px] ${active === nav.title ? "text-red" : "ext-[#000000]"} p-2 `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {categories.map((cate, index) => {
            return (
              <li
                key={cate.id}
                className={`text-white font-poppins font-medium cursor-pointer text-[16px] ${
                  active === cate.title ? "text-white" : "text-dimWhite"
                } p-2`}
              >
                <DropdownBtn id={cate.id} title={cate.title} link={cate.link} subMenu={cate.subMenuList[index].subMenuCol}></DropdownBtn>
              </li>
            );
          })}

          <div className="relative mt-4 ">
            <span className="dot absolute left-4 bottom-4">2</span>
            <Link href="gio-hang">
              <img src={shopping.src} className="max-w-[25px]"></img>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
