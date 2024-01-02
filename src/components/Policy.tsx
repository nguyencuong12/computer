"use client";
import React from "react";
import { facebook, laptop, ram, computer, case_computer, moniter, keyboard, mouse, headphone, cpu } from "@/assets";
import { CarouselWith2Items } from "@/components";
import Link from "next/link";
const Policy = () => {
  const policyList = [
    { title: "Tự build PC", src: case_computer.src, link: "" },
    { title: "Máy bộ", src: computer.src, link: "" },
    { title: "Màn hình", src: moniter.src, link: "" },
    { title: "Laptio", src: laptop.src, link: "" },

    { title: "Bàn phím", src: keyboard.src, link: "" },
    { title: "Chuột", src: mouse.src, link: "" },
    { title: "Tay nghe", src: headphone.src, link: "" },
    { title: "CPU", src: cpu.src, link: "" },
    { title: "Ram", src: ram.src, link: "" },
  ];

  return (
    <div className="mt-8">
      <div className="text-white mt-8  sm:flex gap-8 justify-between items-center py-4 px-4 hidden">
        {policyList.map((policyItem) => {
          return (
            <Link href={policyItem.link} className="flex flex-col justify-center items-center hover:text-red" key={policyItem.title}>
              <img
                src={policyItem.src}
                alt="fb"
                className=" hover:-translate-y-1 hover:scale-110 duration-300 h-[60px] w-[60px] bg-gray rounded-full object-contain"
              ></img>
              <p className="mt-4">{policyItem.title}</p>
            </Link>
          );
        })}
      </div>
      <div className="block sm:hidden">
        <CarouselWith2Items items={policyList} />
      </div>
    </div>
  );
};

export default Policy;
