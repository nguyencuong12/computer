"use client";
import React, { useEffect } from "react";
import Link from "next/link";

interface dropdownProps {
  id: string;
  title: string;
  link: string;
  subMenu: any;
  //   children: any[];
}

const DropdownBtn = ({ id, title, link, subMenu }: dropdownProps) => {
  return (
    <div className="p-1 min-w-[250px] cursor-pointer">
      <details className="bg-white shadow rounded group">
        <summary className="list-none flex flex-wrap items-center">
          <Link href="" className="flex flex-1 p-4 font-semibold">
            {title}
          </Link>
          <div className="flex w-10 items-center justify-center">
            <div className="border-4 border-transparent border-l-black ml-2 group-open:rotate-90 transition-transform"></div>
          </div>
        </summary>
        <div className={`flex flex-col p-4 ${subMenu.length <= 0 ? "hidden" : "block"} divide-y-[2px] divide-slate-400/25 `}>
          {subMenu.map((sub: dropdownProps, index: number) => {
            return (
              <div key={sub.id} className="py-2">
                <Link href={sub.link ?? ""} className="text-black font-simebold py-2">
                  {sub.title}
                </Link>
                {sub.subMenu.map((deep: dropdownProps) => {
                  return (
                    <Link key={deep.id} href={deep.link ?? ""} className="text-black font-simebold py-2 block">
                      {deep.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </details>
    </div>
  );
};

export default DropdownBtn;
