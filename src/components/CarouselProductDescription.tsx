"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs, FreeMode } from "swiper/modules";
import { bill, banner_gearvn, people02 } from "@/assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const images = [bill, banner_gearvn, people02];
  return (
    <div className="flex flex-col">
      <Swiper
        className="max-h-[800px]"
        // install Swiper modules
        modules={[Pagination, A11y, Thumbs]}
        spaceBetween={50}
        slidesPerView={1}
        // thumbs={{swiper: thumbs && !thumbs.?? thumbs : null}}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={banner_gearvn.src} className="object-contain"></img>
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

      <Swiper
        className="max-h-[100px]  mt-2"
        onSwiper={setThumbsSwiper}
        slidesPerView={3}
        spaceBetween={10}
        // freeMode={true}
        // watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img src={image.src} className="border border-red" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
