import React from "react";
import Link from "next/link";
import { CarouselWith4Items } from "@/components";
interface sectionProps {
  title: string;
  categories: ItemWithLink[];
  galleries: ItemWithLink[];
}

const SectionWithGallery = (props: sectionProps) => {
  const { title, categories, galleries } = props;
  return (
    <div className="text-white my-8 flex flex-col my-4">
      <Link href="" className="section-title">
        {title}
      </Link>
      <Link href="" className="view-all-btn">
        Xem tất cả
      </Link>

      <div className="categories">
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
