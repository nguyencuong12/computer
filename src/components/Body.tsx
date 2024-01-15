"use client";
import React from "react";
import styles from "@/app/style";
import { isShowCategory } from "@/store/slices/showCategory";
import { useSelector } from "react-redux";

const BodyComponent = (props: any) => {
  const isShowCate = useSelector(isShowCategory);

  return (
    <div
      className={`mt-[130px] 
  ${isShowCate ? "sm:mt-[260px]" : "mt-[180px]"}
  `}
    >
      {props.children}
    </div>
  );
};

export default BodyComponent;
