"use client";
import { wide_nav } from "@/constants";
import React from "react";
import Link from "next/link";
import Carousel from "./Carousel";
import styles from "@/app/style";
const BannerVer2 = () => {
  // wide_nav
  return (
    <>
      <div className={`my-4  ${styles.boxWidth} m-auto `}>
        <Carousel />
      </div>
    </>
  );
};

export default BannerVer2;
