"use client";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "@/app/style";

import { close } from "@/assets";

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
      <div className="flex gap-6 border-2 border-white text-white mt-2 flex-col sm:flex-row">
        <div className="flex-1 divide-y ">
          {products.map((product, index) => {
            return (
              <div className={`text-white ${styles.flexBetween} p-6 `} key={index}>
                <div>
                  <img
                    src={close.src}
                    alt="Close Card"
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                    onClick={() => {
                      // setToggle(!toggle);
                    }}
                  ></img>
                </div>{" "}
                <div className="w-[60px] sm:w-[150px] truncate">{product.title}</div>
                <div className="w-[60px] sm:w-[150px] truncate">{product.title}</div>
                <div className="flex justify-center items-center">
                  <div className="px-2 mx-4 rounded-md border border-gray ">
                    <button>+</button>
                    <input className="max-w-[40px] outline-none bg-transparent px-2 text-center" maxLength={2}></input>
                    <button>-</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <form className="text-white border-2 border-white p-4 flex flex-col gap-4 min-w-[320px]">
          <h3 className="text-center font-bold text-xl">Thông tin đặt hàng</h3>
          <div className={`${styles.flexBetween}`}>
            <div>123x</div>
            <div>123x1661</div>
          </div>
          <div>sqdsqdsqd</div>
          <input type="text" placeholder="Tên ..." className={`grow py-2 px-4 rounded-lg bg-searchForm text-white`} required></input>
          <input type="text" placeholder="Số điện thoại ..." className={`grow py-2 px-4 rounded-lg bg-searchForm text-white`} required></input>

          <input type="text" placeholder="Email ..." className={`grow py-2 px-4 rounded-lg bg-searchForm text-white`} required></input>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
            Xác nhận đặt hàng
          </button>
        </form>
      </div>
    </>
  );
};

export default GioHang;
