"use client";
import React, { useState, useEffect } from "react";
import { navLinks, categories, wide_nav } from "@/constants";
import { logo_tokyo, menu, close, shopping } from "@/assets";
import { DropdownBtn, SearchForm } from "@/components";
import { FcCollaboration, FcMenu } from "react-icons/fc";
import { FaWindowClose } from "react-icons/fa";
import Link from "next/link";
const NavbarComponent = () => {
  const [active, setActive] = useState("Trang chủ");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 767 && toggle == true) {
        setToggle(false);
      }
    });
  }, [toggle]);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <div className="flex-1 hidden sm:flex">
        <SearchForm />
      </div>

      <div className="sm:hidden flex  items-center justify-center bg-red rounded-2xl w-8 h-8 text-center  ">
        <FcMenu size={20} className="cursor-pointer " onClick={() => setToggle(!toggle)} />
      </div>
      <Link href="/" className="">
        <img src={logo_tokyo.src} alt="Log 123" className="w-[120px] h-[100px] object-contain"></img>
      </Link>
      <div className="ml-4 relative block  sm:hidden ">
        <span className="dot absolute left-4 bottom-4 ">2</span>
        <Link href="gio-hang">
          <img src={shopping.src} className="max-w-[25px]"></img>
        </Link>
      </div>
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
        <li className="ml-4 relative  ">
          <span className="dot absolute left-4 bottom-4">2</span>
          <Link href="gio-hang">
            <img src={shopping.src} className="max-w-[25px]"></img>
          </Link>
        </li>
      </ul>

      <div
        className={`${
          !toggle ? "left-[-100%]" : "left-0"
        } transition-[left]    ease-in-out delay-100  p-6 bg-white z-10 absolute top-0  right-0 my-2 w-[300px] h-screen overflow-y-scroll sidebar z-50`}
      >
        <ul className="list-none flex items-center flex-1 flex-col ">
          <div className="flex justify-between items-center  w-full">
            <Link href="/" className="">
              <img src={logo_tokyo.src} alt="Log 123" className="w-[80px] h-[100px] object-contain"></img>
            </Link>
            <FaWindowClose size={25} className="cursor-pointer  hover:animate-spin" onClick={() => setToggle(!toggle)} />
          </div>
          <li>
            <SearchForm />
          </li>

          {wide_nav.map((wideItem, index) => {
            return (
              <li key={wideItem.id} className={``}>
                <DropdownBtn subMenu={wideItem.subMenu} id={wideItem.id} title={wideItem.title} link={wideItem.link}></DropdownBtn>
              </li>
            );
          })}
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`bg-white w-full my-1 py-4 shadow rounded group  font-semibold cursor-pointer text-[16px] ${
                active === nav.title ? "text-red" : "ext-[#000000]"
              } p-2 `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="px-2">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
