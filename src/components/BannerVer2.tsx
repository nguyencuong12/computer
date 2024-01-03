import { wide_nav } from "@/constants";
import React from "react";
import Link from "next/link";
import Carousel from "./Carousel";
const BannerVer2 = () => {
  // wide_nav
  return (
    <div>
      <div className="text-white bg-red  md:flex gap-8 justify-between items-center py-4 px-4 hidden rounded ">
        {wide_nav.map((nav, index) => {
          return (
            <div className="mainmenu_item flex flex-col relative  justify-center items-center group/item hover:text-green " key={nav.id}>
              <Link href={nav.link} className="flex flex-col items-center">
                <img
                  src={nav.src}
                  alt={nav.title}
                  className=" hover:-translate-y-1 hover:scale-110 duration-300 h-[60px] w-[60px] bg-gray rounded-full object-contain"
                ></img>
                <p>{nav.title}</p>
              </Link>
              <div
                className={`rounded group/edit invisible group-hover/item:visible  bg-white absolute top-16 ${index == 0 ? "left-0" : "left-50"}  
                  ${index == wide_nav.length - 1 ? "right-0" : ""}
                z-50 h-full w-full min-w-[300px] min-h-[300px] text-black p-4 `}
              >
                SUB MENU {index}
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-4 ">
        <Carousel />
      </div>
    </div>
  );
};

export default BannerVer2;
