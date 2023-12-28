"use client";
import React, { useEffect, useState } from "react";
import { down_chevron } from "@/assets";
import Link from "next/link";

interface dropdownProps {
  id: string;
  title: string;
  link: string;
  subMenu: subMenu[];
  //   children: any[];
}
interface subMenu {
  id: string;
  title: string;
  link: string;
}
// interface subMenu  {
//     id:
// }

const DropdownBtn = ({ id, title, link, subMenu }: dropdownProps) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="relative">
      <div
        className="border-2 border-white  p-2  cursor-pointer bg-white text-black rounded
      w-[200px] flex justify-between shadow-sm
      "
      >
        <Link href={link}> {title}</Link>
        <img width="15" src={down_chevron.src} className="object-contain" onClick={handleToggle}></img>
        <div className={`w-[400px] top-[48px] left-0 rounded border-gray-500 bg-white p-2 absolute z-50 ${!toggle ? "hidden" : "block"}`}>
          <ul>
            {subMenu.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownBtn;
