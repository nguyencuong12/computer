"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { bill } from "@/assets";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

interface carouselItem {
  title: string;
  src: string;
  link: string;
}
interface carouselList {
  items: carouselItem[];
}
const CarouselWith2Items = (props: carouselList) => {
  const { items } = props;

  return (
    <Swiper
      className="h-[220px] rounded-md "
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {items.map((item) => {
        return (
          <SwiperSlide key={item.title}>
            <Link
              href={item.link}
              className="h-full flex flex-col justify-center items-center p-8 cursor-pointer hover:text-red text-white hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <img src={item.src} alt={item.title} className="h-20  bg-gray rounded-full "></img>
              <p className="mt-6 "> {item.title}</p>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselWith2Items;
