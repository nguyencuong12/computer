"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Grid } from "swiper/modules";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

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
          className="min-h-[800px]"
          // install Swiper modules
          modules={[Pagination, Grid]}
          spaceBetween={30}
          slidesPerView={4}
          grabCursor={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
          grid={{
            rows: 2,
            fill: "row",
          }}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Product
                  link={item.link ?? "/san-pham/qsd"}
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
          className="min-h-[200px] block sm:hidden"
          // install Swiper modules
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id} className=" ">
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
