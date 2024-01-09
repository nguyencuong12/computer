"use client";
import React, { useEffect } from "react";

import styles from "../../style";
import { usePathname } from "next/navigation";

const PCVanphong = () => {
  // useEffect(() => {
  //   if (router) {
  //     const linkPath = router.asPath.split("/");
  //     linkPath.shift();
  //     const pathArray = linkPath.map((path, index) => {
  //       return { breadcrumb: path, href: "/" + linkPath.splice(0, index + 1).join("/") };
  //     });
  //     console.log("PATH", pathArray);
  //   }
  // }, [router]);

  return <div className={`${styles.boxWidth} m-auto`}>PC VAN PHONG</div>;
};

export default PCVanphong;
