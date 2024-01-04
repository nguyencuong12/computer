import React from "react";
import Link from "next/link";
import { FormatUtils } from "@/utils/format";

interface propsInterface {
  link: string;
  image: string;
  title: string;
  price: string;
  beforeDiscount?: string;
}
const Product = (props: propsInterface) => {
  const { title, image, link, price, beforeDiscount } = props;

  return (
    <Link href={link} className=" h-full flex flex-col  mb-2 cursor-pointer hover:text-red text-white">
      <img src={image} alt={title} className="h-full bg-gray object-contain hover:-translate-y-1 hover:scale-110 duration-300 rounded"></img>
      <p className="mt-2 px-2 text-black font-semibold text-lg"> {title}</p>
      <p className="mt-2 px-2 text-red font-bold">
        {FormatUtils.formatPriceVND(Number(price))} <del className="text-gray"> {FormatUtils.formatPriceVND(Number(beforeDiscount))}</del>
      </p>
    </Link>
  );
};

export default Product;
