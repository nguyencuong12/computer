"use client";
import React, { useState, useEffect } from "react";
import { navLinks, categories, wide_nav } from "@/constants";
import { menu, close, shopping, fishing_logo } from "@/assets";
import { DropdownBtn, SearchForm } from "@/components";
import { FcCloseUpMode, FcCollaboration, FcCollapse, FcMenu } from "react-icons/fc";
import { FaWindowClose, FaUser, FaDoorClosed } from "react-icons/fa";
import Link from "next/link";
import styles from "@/app/style";
import { useSelector, useDispatch } from "react-redux";

import { setShowCategory, isShowCategory } from "@/store/slices/showCategory";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const showCategory = useSelector(isShowCategory);

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
    <nav className="fixed left-0 right-0 top-0  z-50 ">
      <div className="pc-navbar bg-white grid-cols-12 gap-2 hidden sm:grid p-4">
        <div className="text-black col-span-2">
          <div className="logo flex justify-center">
            <Link href="/">
              <img src={fishing_logo.src} className="object-contain h-[100px]"></img>
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
      <div className={`scroll-smooth cate`}>
        <div className={`${styles.boxWidth} m-auto `}>
          <div
            className={`text-[#333333] ${showCategory ? "bg-white" : "bg-transparent"} ${
              showCategory ? "border border-slate-400/25" : "border border-transparent"
            }  font-semibold  w-full  sm:flex gap-8 justify-between items-center py-4 px-4 hidden rounded flex-wrap`}
          >
            <FcMenu
              color="red"
              size={30}
              className="cursor-pointer "
              onClick={() => {
                dispatch(setShowCategory());
              }}
            />

            {wide_nav.map((nav, index) => {
              return (
                <div
                  className={`${
                    showCategory == true ? "flex" : "hidden"
                  } mainmenu_item  flex-col relative  justify-center items-center group/item hover:text-green `}
                  key={nav.id}
                >
                  <Link href={nav.link} className="flex flex-col items-center">
                    <div className="group h-[60px] w-[60px] bg-slate-400/25 rounded-full flex items-center justify-center  ">
                      <img src={nav.src} alt={nav.title} className="h-[60%] w-[60%]  group-hover:animate-spin  object-contain "></img>
                    </div>

                    <p>{nav.title}</p>
                  </Link>
                  {nav.subMenu.length > 0 ? (
                    <div
                      className={`border-2 border-slate-400/25 rounded-md group/edit invisible group-hover/item:visible  bg-white absolute top-16 ${
                        index == 0 ? "left-0" : "left-50"
                      }  
                  ${index == wide_nav.length - 1 ? "right-0" : ""}
                z-50 h-auto min-w-[300px] min-h-[300px] text-black p-4 `}
                    >
                      <h3 className="font-semibold text-center text-2xl m-4">{nav.title}</h3>
                      <div className="flex justify-between gap-2 divide-x-[2px] divide-slate-400/25 ">
                        {nav.subMenu.map((sub) => {
                          return (
                            <div key={sub.id} className="text-black  min-w-[220px] ">
                              <Link href={sub.link} className="hover:bg-red   hover:text-white  rounded  font-semibold m-2 flex p-2">
                                {sub.title}
                              </Link>
                              {sub.subMenu.map((deepSub) => {
                                return (
                                  <Link
                                    key={deepSub.id}
                                    href={deepSub.link}
                                    className="hover:bg-red hover:text-white  rounded  font-semibold m-2 flex p-2"
                                  >
                                    {deepSub.title}
                                  </Link>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mobile-navbar grid sm:hidden grid-cols-12 gap-4 mx-2 p-4 bg-white ">
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
            <img src={fishing_logo.src} className="object-contain h-[80px]"></img>
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
              <img src={fishing_logo.src} alt="Logo" className="h-[80px] object-contain"></img>
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
