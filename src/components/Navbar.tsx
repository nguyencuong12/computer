"use client";
import React, { useState, useEffect } from "react";
import { navLinks, categories, wide_nav } from "@/constants";
import { logo_tokyo, menu, close, shopping } from "@/assets";
import { DropdownBtn, SearchForm } from "@/components";
import { FcCollaboration, FcMenu } from "react-icons/fc";
import { FaWindowClose, FaUser } from "react-icons/fa";
import Link from "next/link";
const NavbarComponent = () => {
  const [active, setActive] = useState("Trang chủ");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle == true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 767 && toggle == true) {
        setToggle(false);
      }
    });
  }, [toggle]);

  return (
    <nav>
      <div className="pc-navbar  grid-cols-12 gap-2 hidden sm:grid p-4">
        <div className="text-black col-span-2">
          <div className="logo flex justify-center">
            <Link href="/">
              <img src={logo_tokyo.src} className="object-contain h-[90px]"></img>
            </Link>
          </div>
        </div>
        <div className="text-black  col-span-6 flex items-center">
          <SearchForm />
        </div>
        <div className="text-black  col-span-4 flex items-center justify-end gap-4 ">
          <Link href="/" className="flex flex-col items-center justify-center gap-2 hover:text-red  h-[60px] ">
            <FaUser style={{ color: "gray" }} />
            <span className="text-[14px] font-semibold">Đăng nhập</span>
          </Link>
          <Link href="/" className="flex flex-col items-center gap-2 relative h-[60px] justify-center hover:text-red  ">
            <span className="  font-semibold absolute top-[-5px] right-[0px] bg-red h-[20px] w-[20px] rounded-full inline-block flex items-center justify-center text-[12px] text-white    ">
              2
            </span>
            <img src={shopping.src} className="max-w-[20px]"></img>
            <span className="text-[14px] font-semibold"> Giỏ hàng</span>
          </Link>
        </div>
      </div>
      <div className="mobile-navbar grid sm:hidden grid-cols-12 gap-4 mx-2 p-4 ">
        <div className="col-span-2 flex items-center">
          <FcMenu
            size={25}
            className="cursor-pointer "
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
        <div className="logo col-span-8 flex items-center justify-center">
          <Link href="/">
            <img src={logo_tokyo.src} className="object-contain h-[70px]"></img>
          </Link>
        </div>
        <div className="text-black  col-span-2 flex items-center justify-end gap-2 ">
          <Link href="/">
            <FaUser style={{ color: "gray" }} />
          </Link>
          <Link href="/" className="relative">
            <span className="transition-[background] duration-300 ease-in-out group-hover/item:bg-cyan-400  font-semibold absolute top-[-10px] right-[-14px] bg-red h-[20px] w-[20px] rounded-full inline-block flex items-center justify-center text-[12px] text-white    ">
              2
            </span>
            <img src={shopping.src} className="max-w-[20px]"></img>
          </Link>
        </div>
      </div>
      {/* TOGGLE MENU */}
      <div
        className={`${
          !toggle ? "left-[-100%]" : "left-0"
        } transition-[left]   ease-in-out delay-100   bg-white z-10 absolute top-0  right-0 my-2 w-full h-screen overflow-y-scroll sidebar z-50`}
      >
        <ul className="list-none flex  flex-col gap-2 px-2 ">
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="">
              <img src={logo_tokyo.src} alt="Logo" className="h-[70px] object-contain"></img>
            </Link>
            <FaWindowClose size={25} className="cursor-pointer  hover:animate-spin" onClick={() => setToggle(!toggle)} />
          </div>
          <li className="mb-4">
            <SearchForm />
          </li>
          {wide_nav.map((wideItem, index) => {
            return (
              <li key={wideItem.id} className={`${index == wide_nav.length - 1 ? "mb-6" : ""} `}>
                <DropdownBtn subMenu={wideItem.subMenu} id={wideItem.id} title={wideItem.title} link={wideItem.link}></DropdownBtn>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
