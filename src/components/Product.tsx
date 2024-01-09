"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FormatUtils } from "@/utils/format";
import { shopping } from "@/assets";
import { showQuickView } from "@/store/slices/quickViewProduct";
import { useDispatch } from "react-redux";
import testProduct from "@/assets/test_product.jpg";
interface propsInterface {
  link: string;
  image: string;
  title: string;
  price: string;
  beforeDiscount?: string;
  description?: string;
}
const Product = (props: propsInterface) => {
  const [quickView, setQuickView] = useState(false);
  const { title, image, link, price, beforeDiscount } = props;
  const dispatch = useDispatch();

  const handleQuickView = () => {
    console.log("QUICK VIEW CALL");
    dispatch(showQuickView());

    setQuickView(!quickView);
  };
  const handleAddToCart = () => {
    console.log("HEH");
  };

  return (
    <div className="border border-[#EDEDED] relative group/item p-4 rounded-lg h-full  ">
      <Link href={link} className="flex flex-col  mb-2 cursor-pointer hover:text-red text-white gap-4 h-full">
        <div className="transition-all ease-in-out duration-300 h-[100%] bg-center bg-contain  bg-no-repeat  bg-[url('https://tokyocamera.vn/wp-content/uploads/2023/03/DJI-Avata-Pro-View-Combo-2-510x510.jpg')] hover:bg-[url('https://tokyocamera.vn/wp-content/uploads/2023/03/Insta360-Titan-Chinh-hang-247x296.jpg')]"></div>
        <p className="text-black font-semibold text-lg truncate py-2"> {title}</p>
        <p className="text-red font-bold">
          {FormatUtils.formatPriceVND(Number(price))} <del className="text-gray"> {FormatUtils.formatPriceVND(Number(beforeDiscount))}</del>
        </p>
      </Link>
      <button
        className="transition-all ease-in-out duration-300  group-hover/item:top-[50%]  invisible group-hover/item:visible  absolute text-red top-[-100%] left-[10%] translate-x-[-50%] translate-y-[-180%] p-2 bg-red text-white rounded"
        onClick={handleAddToCart}
      >
        <img src={shopping.src} className="max-w-[20px] "></img>
      </button>

      <button
        className="w-full transition-[top] ease-in-out duration-300 group-hover/item:top-[65%]  invisible group-hover/item:visible  absolute text-red top-[-100%] left-[50%] translate-x-[-50%] translate-y-[-180%] p-2 bg-red text-white rounded-lg"
        onClick={handleQuickView}
      >
        Xem nhanh
      </button>
    </div>
  );
};

export default Product;
