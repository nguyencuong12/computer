import React from "react";
import styles from "./style";
import { error_404 } from "@/assets";
import testProduct from "@/assets/test_product.jpg";

import Link from "next/link";

export const metadata = {
  title: "Không tìm thấy trang -  GEARVN - Máy Tính Cao Cấp & Thiết Bị Chơi Game hàng đầu Việt Nam – GEARVN.COM",
  description: "GEARVN - Cung cấp Hi-End PC, Laptop và Gaming Gear Chuyên Nghiệp- Website : www.gearvn.com- Hotline : 1800 6975",
};

const ErrorPage = () => {
  return (
    <div className={`flex flex-col gap-4 items-center`}>
      <img src={error_404.src} alt="Error Image" className="w-[70%]"></img>
      <h3 className="font-semibold text-md">Rất tiếc trang bạn tìm kiếm đang không tồn tại</h3>
      <Link
        href="/"
        className="transition duration-400 ease-in-out font-semibold text-lg border-2 border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:scale-105 hover:-translate-y-1   "
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
};

export default ErrorPage;
