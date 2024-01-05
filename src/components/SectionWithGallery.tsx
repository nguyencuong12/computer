import React from "react";
import Link from "next/link";
import { CarouselWith4Items } from "@/components";
interface sectionProps {
  title: string;
  categories: ProductInterface[];
  galleries: ProductInterface[];
}

const SectionWithGallery = (props: sectionProps) => {
  const { title, categories, galleries } = props;
  return (
    <div className="text-white my-8 ">
      <div className="flex justify-between items-center relative section-markup mb-4 py-2">
        <Link href="" className="section-title text-red font-bold text-2xl ">
          <span>{title}</span>
        </Link>
        <Link href="" className="border-2 border-red font-bold px-4 py-2 text-red">
          Xem tất cả
        </Link>
      </div>
      <div className="categories ">
        {categories.map((categoryItem) => {
          return <div key={categoryItem.id}>1</div>;
        })}
      </div>
      <div className="galleries">
        <CarouselWith4Items items={galleries}></CarouselWith4Items>
      </div>
    </div>
  );
};

export default SectionWithGallery;
