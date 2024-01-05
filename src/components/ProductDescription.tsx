import React from "react";
import { CarouselProductDescription } from "@/components";
import { FormatUtils } from "@/utils/format";
const ProductDescription = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  ">
      <CarouselProductDescription />

      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">DJI Osmo Pocket 3 Creator Combo</h1>
        <p className="font-bold text-red">{FormatUtils.formatPriceVND(Number(15890000))}</p>
        <div className="flex items-start gap-6">
          <div className="flex items-start">
            <button className="bg-blue-500 text-white font-bold py-2  px-4 rounded">-</button>
            <input
              className="max-w-[40px] h-[40px] outline-none bg-transparent px-2 text-center border-2 border-gray rounded mx-1"
              maxLength={2}
            ></input>
            <button className="py-2 bg-blue-500 text-white font-bold  px-4 rounded">+</button>
          </div>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Thêm vào giỏ hàng</button>
        </div>

        <div className="bg-[##f9f9f9] rounded border-2 border-gray p-2 px-8">
          <h1>Thông tin sản phẩm:</h1>
          <ul className="list-disc">
            <li>Cảm biến CMOS 1 inch</li>
            <li>Quay video 4K/120fps</li>
            <li>Chống rung cơ học 3 trục</li>
            <li>ActiveTrack 6.0</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
