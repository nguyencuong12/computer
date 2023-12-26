"use client";
import React from "react";
// import Categories from "./Categories";
import { categories } from "@/constants";
import styles from "@/app/style";
import { bill } from "@/assets";
const Banner = () => {
  return (
    <div className="flex mt-4 gap-2">
      <div className="bg-white divide-y min-w-[250px] relative">
        {categories.map((category) => {
          return (
            <>
              <div
                onClick={() => {
                  window.location.href = category.link;
                }}
                className={`cursor-pointer text-black px-4 py-4 flex items-center group/item hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-white `}
              >
                <img src={category.icon.src} className="max-w-[35px]" alt="icon"></img>
                <div className="ml-8 ">{category.title}</div>
                <div className="group/edit invisible group-hover/item:visible bg-white absolute top-0 left-[252px] z-80 h-full w-[1280px] text-black py-6 cursor-default">
                  <div className={"grid grid-cols-4 gap-4"}>
                    {category.children.map((itemParent) => {
                      return (
                        <ul className="text-black">
                          {itemParent.childrenItem.map((item, index) => {
                            return (
                              <li
                                className={`text-center py-2 ${
                                  index == itemParent.childrenItem.indexOf(itemParent.childrenItem[0]) ? "text-red" : "text-black"
                                }`}
                              >
                                <a href={item.link}>{item.title}</a>
                              </li>
                            );
                          })}
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="grow">
        <div className="grid grid-cols-5 gap-4 ">
          <div className="bg-white col-span-3  ">
            <img src={bill.src} className="max-h-[400px]"></img>
          </div>

          <div className={` bg-blue-100 col-span-2 flex flex-col gap-8 ${styles.flexBetween}`}>
            <img src={bill.src} className="max-h-[250px] object-contain "></img>
            <img src={bill.src} className="max-h-[250px] object-contain "></img>
          </div>
        </div>
      </div>
    </div>
    //TODO:
  );
};

export default Banner;
