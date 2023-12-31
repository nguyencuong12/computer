"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/style";
import { search } from "@/assets";
import SearchItemResult from "./SearchItemResult";
const SearchForm = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {}, []);

  let checkEmptyResult = (): boolean => {
    let result: boolean = false;
    if (!searchResults.length) result = true;
    return result;
  };

  return (
    <>
      <form className={` flex items-center justify-center flex-1  w-full  `}>
        <div className={`flex items-center relative  w-full `}>
          <input
            type="text"
            placeholder="search something ..."
            className={`outline-none  grow py-2 px-4 rounded-md  border-2 border-slate-400/25 text-black`}
          ></input>
          <button className="absolute right-2">
            <img src={search.src} alt="search button" className="w-8"></img>
          </button>
          {!checkEmptyResult() ? (
            <div className=" border-2 border-white rounded-md absolute z-50 top-11 w-full max-h-[350px] divide-y bg-white overflow-y-auto">
              <SearchItemResult title="Ram T-Group T-Force Delta 1x16GB 3600 RGB Black" price={32000} image="Image" link="/ds1"></SearchItemResult>
              <SearchItemResult title="Ram T-Group T-Force Delta 1x16GB 3600 RGB Black" price={32000} image="Image" link=""></SearchItemResult>
              <SearchItemResult title="Ram T-Group T-Force Delta 1x16GB 3600 RGB Black" price={32000} image="Image" link=""></SearchItemResult>
              <SearchItemResult title="Ram T-Group T-Force Delta 1x16GB 3600 RGB Black" price={32000} image="Image" link=""></SearchItemResult>
              <SearchItemResult title="Ram T-Group T-Force Delta 1x16GB 3600 RGB Black" price={32000} image="Image" link=""></SearchItemResult>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </form>
    </>
  );
};

export default SearchForm;
