"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FormatUtils } from "@/utils/format";
import { Product } from "@/components";

interface propsItems {
  items: ProductInterface[];
}
const CarouselWith4Items = (props: propsItems) => {
  const { items } = props;

  return (
    <div className="">
      <div className="hidden sm:block">
        <Swiper
          className="min-h-[500px]"
          // install Swiper modules
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id} className=" border border-white mt-4 min-h-[410px] max-h-[430px] overflow-hidden">
                <Product
                  link={item.link ?? ""}
                  image={item.image ?? ""}
                  title={item.title ?? ""}
                  price={item.price ?? ""}
                  beforeDiscount={item.beforeDiscount ?? ""}
                ></Product>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="block sm:hidden">
        <Swiper
          className="min-h-[360px] block sm:hidden"
          // install Swiper modules
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {items.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="border border-white mt-4 max-h-[380px] min-h-[330px] overflow-hidden hover:-translate-y-1 hover:scale-105 duration-300"
              >
                <Product
                  link={item.link ?? ""}
                  image={item.image ?? ""}
                  title={item.title ?? ""}
                  price={item.price ?? ""}
                  beforeDiscount={item.beforeDiscount ?? ""}
                ></Product>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselWith4Items;
