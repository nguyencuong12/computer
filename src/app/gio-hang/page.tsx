"use client";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "@/app/style";

interface propsT {
  title: string;
  id: string;
  count: number;
}

const GioHang = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["shoppingCart"]);
  const [products, setProducts] = useState<propsT[]>([]);

  useEffect(() => {
    if (cookies.shoppingCart) {
      // setCookie("cuong", "xfxqjkfqhflfqll", {
      //   path: "/",
      // });
      var products: propsT[] = JSON.parse(JSON.stringify(cookies.shoppingCart));
      setProducts(products);
      console.log("PRODUCT", products);
    }
  }, [cookies]);
  return (
    <>
      <div className="flex gap-6">
        <div className="flex-1">
          {products.map((product, index) => {
            return (
              <div className={`text-white ${styles.flexBetween} p-6 border-2 border-white text-white   `} key={index}>
                <div>{product.title}</div>
                <div>{product.title}</div>
                <div>{product.title}</div>
                <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-8 rounded">Xóa</button>
              </div>
            );
          })}
        </div>

        <div className="text-white border-2 border-white p-4 flex flex-col gap-4 min-w-[320px]">
          <h3 className="text-center font-bold text-xl">Thông tin đặt hàng</h3>
          <div className={`${styles.flexBetween}`}>
            <div>123x</div>
            <div>123x1661</div>
          </div>
          <div>sqdsqdsqd</div>
          <div>sqdsqdsqd</div>
          <div>sqdsqdsqd</div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">Xác nhận đặt hàng</button>
        </div>
      </div>
    </>
  );
};

export default GioHang;
