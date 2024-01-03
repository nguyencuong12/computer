"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { bill } from "@/assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default () => {
  return (
    <Swiper
      className="h-[450px] rounded-lg bg-red"
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={bill.src} className=" object-contain"></img>
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
