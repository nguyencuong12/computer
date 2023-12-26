import React from "react";
import styles from "@/app/style";
import { FormatUtils } from "@/utils/format";
import { bill } from "@/assets";

interface PropsItem {
  title: string;
  price: number;
  image: string;
  link: string;
}

const SearchItemResult = ({ title, price, image, link }: PropsItem) => {
  return (
    <div className={`text-black p-6 ${styles.flexBetweenWithAlignStart}`}>
      <div>
        <a className="text-black hover:text-red " href={link}>
          {" "}
          {title}
        </a>
        <div className={`flex items-center mt-2`}>
          <div className="original-price text-red"> {FormatUtils.formatPriceVND(price)}</div>
          <div className="discount-price mx-4 text-gray">
            <del>{FormatUtils.formatPriceVND(price)}</del>
          </div>
        </div>
      </div>

      <div className="mx-2">
        <a href={link}>
          <img src={bill.src} className="max-h-[100px] "></img>
        </a>
      </div>
    </div>
  );
};

export default SearchItemResult;
