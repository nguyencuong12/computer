import { wide_nav } from "@/constants";
import React from "react";
import Link from "next/link";
import Carousel from "./Carousel";
import styles from "@/app/style";
const BannerVer2 = () => {

  // wide_nav
  return (
    <>
      <div className={``}>
        <div className={`${styles.boxWidth} m-auto`}>
          <div className="text-[#333333] border border-slate-400/25 font-semibold  w-full  sm:flex gap-8 justify-between items-center py-4 px-4 hidden rounded ">
            {wide_nav.map((nav, index) => {
              return (
                <div className="mainmenu_item flex flex-col relative  justify-center items-center group/item hover:text-green " key={nav.id}>
                  <Link href={nav.link} className="flex flex-col items-center">
                    <div className="group  h-[70px] w-[70px] bg-slate-400/25 rounded-full flex items-center justify-center  ">
                      <img src={nav.src} alt={nav.title} className="h-[70%] w-[70%]  group-hover:animate-spin  object-contain "></img>
                    </div>

                    <p>{nav.title}</p>
                  </Link>
                  {nav.subMenu.length > 0 ? (
                    <div
                      className={`border-2 border-slate-400/25 rounded-md group/edit invisible group-hover/item:visible  bg-white absolute top-16 ${
                        index == 0 ? "left-0" : "left-50"
                      }  
                  ${index == wide_nav.length - 1 ? "right-0" : ""}
                z-50 h-full min-w-[300px] min-h-[300px] text-black p-4 `}
                    >
                      <h3 className="font-semibold text-center text-2xl m-4">{nav.title}</h3>
                      <div className="flex justify-between gap-2 divide-x-[2px] divide-slate-400/25 ">
                        {nav.subMenu.map((sub) => {
                          return (
                            <div key={sub.id} className="text-black  min-w-[220px] ">
                              <Link
                                href={sub.link}
                                className="hover:bg-red duration-150 ease-in-out hover:text-white  rounded  font-semibold m-2 flex p-2"
                              >
                                {sub.title}
                              </Link>
                              {sub.subMenu.map((deepSub) => {
                                return (
                                  <Link
                                    key={deepSub.id}
                                    href={deepSub.link}
                                    className="hover:bg-red duration-150 hover:text-white  rounded  font-semibold m-2 flex p-2"
                                  >
                                    {deepSub.title}
                                  </Link>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`my-4  ${styles.boxWidth} m-auto`}>
        <Carousel />
      </div>
    </>
  );
};

export default BannerVer2;
