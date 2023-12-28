"use client";
import React, { useEffect } from "react";
import { down_chevron } from "@/assets";
interface dropdownProps {
  id: string;
  title: string;
  children: [];
}
const DropdownBtn = ({ id, title }: dropdownProps) => {
  const toggle = () => {
    let dropdown = document.querySelector(`#dropdownButton-${id} #dropdown-${id}`);
    dropdown?.classList.toggle("hidden");
  };

  return (
    <div className="relative" id={`dropdownButton-${id}`}>
      <a
        href="#"
        className="border-2 border-white  p-2 m-2 cursor-pointer bg-white text-black rounded
      w-[200px] flex justify-between shadow-sm
      "
      >
        Options
        <img width="20" src={down_chevron.src} className="object-contain" onClick={toggle}></img>
        <div className="w-[400px] top-[55px] left-2 rounded border-gray-500 bg-white p-2 absolute z-50 hidden" id={`dropdown-${id}`}>
          <div className="text-black">Settings 1 123232</div>
          <div className="text-black">Settings 2</div>
        </div>
      </a>
    </div>
  );
};

export default DropdownBtn;
