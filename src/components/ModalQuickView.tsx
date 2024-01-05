"use client";
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { CarouselQuickView } from "@/components";
import Link from "next/link";
import { FormatUtils } from "@/utils/format";

interface propsInterface {
  isVisible: boolean;
  onClose(newValue: boolean): void;
}
const ModalQuickView = (props: propsInterface) => {
  const { isVisible, onClose } = props;
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 z-[1200] backdrop-blur-sm  flex  justify-center items-center ">
      <div className="border-2 border-white rounded-lg h-[80%] w-[80%] sm:w-[60%] overflow-y-auto p-4 bg-white flex flex-col gap-4">
        <div className="self-end">
          <FaWindowClose
            size={30}
            className="cursor-pointer  hover:animate-spin  "
            onClick={() => {
              onClose(!isVisible);
            }}
          />
        </div>

        <div className="modal-content grid grid-cols-1 sm:grid-cols-2  gap-4">
          <div>
            <CarouselQuickView />
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-black font-semibold text-2xl">
              Insta 360Ace
            </Link>
            <p className="text-red font-semibold text-xl">{FormatUtils.formatPriceVND(9000000)}</p>
            <div className="bg-[##f9f9f9] rounded border-2 border-gray p-2 px-8">
              <h1>Thông tin sản phẩm:</h1>
              <ul className="list-disc">
                <li>Cảm biến CMOS 1 inch</li>
                <li>Quay video 4K/120fps</li>
                <li>Chống rung cơ học 3 trục</li>
                <li>ActiveTrack 6.0</li>
              </ul>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalQuickView;
