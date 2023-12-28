"use client";
import React from "react";
// import Categories from "./Categories";
import { categories } from "@/constants";
import styles from "@/app/style";
import { bill } from "@/assets";
import { Carousel } from "@/components";

const Banner = () => {
  return (
    <div className="flex mt-4 gap-2 flex-col sm:flex-row">
      <div className="bg-white divide-y min-w-[250px] relative rounded-md hidden sm:block">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              onClick={() => {
                window.location.href = category.link;
              }}
              className={`cursor-pointer text-black px-4 py-4 flex items-center group/item hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-white `}
            >
              <img src={category.icon.src} className="max-w-[35px]" alt="icon"></img>
              <div className="ml-8 ">{category.title}</div>
              <div className="rounded-md group/edit invisible group-hover/item:visible  bg-white absolute top-0 left-[252px] z-50 h-full w-[1280px] text-black py-6 cursor-default">
                <div className="text-center font-bold text-red">{category.title}</div>
                <div className={"grid grid-cols-4 gap-4 px-4"}>
                  {category.subMenuList.map((subList) => {
                    return (
                      <ul className="text-black" key={subList.id}>
                        {subList.subMenuCol.map((item, index) => {
                          return (
                            <li
                              key={item.id}
                              className={` py-2 ${index == subList.subMenuCol.indexOf(subList.subMenuCol[0]) ? "text-red font-bold" : "text-black"}`}
                            >
                              <a href={item.link} className="hover:text-red">
                                {item.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grow relative z-20">
        <div className="bg-white rounded-md h-full max-w-[1200px] max-h-[500px]">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Banner;
