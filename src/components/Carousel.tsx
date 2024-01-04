"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { bill, banner_gearvn } from "@/assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default () => {
  return (
    <Swiper
      className="h-[300px] sm:h-[600px] rounded-lg bg-white"
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={banner_gearvn.src} className=" object-contain w-full"></img>
      </SwiperSlide>

      <SwiperSlide>
        <img src={bill.src} className=" object-contain"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={bill.src} className=" object-contain"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={bill.src} className=" object-contain"></img>
      </SwiperSlide>
    </Swiper>
  );
};
