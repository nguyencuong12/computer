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
  items: ItemWithLink[];
}
const CarouselWith4Items = (props: propsItems) => {
  const { items } = props;

  return (
    <div className="cursor-grab">
      <div className="hidden sm:block">
        <Swiper
          className="min-h-[350px]"
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
          className="min-h-[250px] block sm:hidden"
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
                className=" border border-white mt-4 max-h-[380px] min-h-[330px] overflow-hidden hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <Link href={item.link ?? ""} className="h-full flex flex-col  mb-2 cursor-pointer hover:text-red text-white">
                  <img src={item.image} alt={item.title} className="h-full bg-gray object-contain "></img>
                  <p className="mt-2 px-2 "> {item.title}</p>
                  <p className="mt-2 px-2 text-red font-bold">
                    {FormatUtils.formatPriceVND(Number(item.price))}{" "}
                    <del className="text-gray"> {FormatUtils.formatPriceVND(Number(item.beforeDiscount))}</del>
                  </p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselWith4Items;
