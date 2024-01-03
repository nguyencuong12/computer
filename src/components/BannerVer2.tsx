import React from "react";
import { FaBeer, FaLaptop } from "react-icons/fa";

const BannerVer2 = () => {
  return (
    <div className="text-white my-4 bg-[#00483d] rounded-sm px-4 py-2 flex gap-12">
      <div className=" flex flex-col justify-center items-center gap-1 cursor-pointer relative">
        <FaBeer size={30} />
        <div>Tự build pc</div>
        <div className="block h-[4px] bg-red"></div>
      </div>
      <div className="flex flex-col justify-center gap-1 items-center">
        <FaLaptop size={30} />
        <div>Laptop</div>
      </div>
    </div>
  );
};

export default BannerVer2;
