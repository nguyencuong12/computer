"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CarouselWith4Items } from "@/components";
import bannerTest from "@/assets/ssd.png";
import { API_Products } from "@/api";

interface sectionProps {
  title: string;
  categories: string;
  banner?: string;
}

const SectionWithGallery = (props: sectionProps) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const { title, categories } = props;

  useEffect(() => {
    // var testing = await API_Products.getAllProducts();
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    var responseProducts = (await API_Products.getAllProducts("Cần câu tay", null)).data as ProductInterface[];
    setProducts(responseProducts);
    console.log("CHECK TIME CALLED !!");

    // console.log("TESTING", testing);
  };
  return (
    <div className="text-white my-8 ">
      <div className="flex justify-between items-center relative section-markup mb-4 py-2">
        <Link href="" className="section-title text-red font-bold text-2xl hover:text-rose-800">
          <span>{title}</span>
        </Link>
        <Link href="" className="border-2 border-red font-bold px-4 py-2 text-red hover:text-rose-800">
          Xem tất cả
        </Link>
      </div>
      <div className="text-black my-4">
        <img src={bannerTest.src} className="object-contain rounded w-full"></img>
      </div>

      {/* <div className="categories ">
        {categories.map((categoryItem) => {
          return <div key={categoryItem.id}>1</div>;
        })}
      </div> */}
      <div className="galleries">
        {/* <div>
          {products.map((product) => {
            return (
              <div key={product._id} className="text-black">
                {product.name}
              </div>
            );
          })}
        </div> */}
        <CarouselWith4Items items={products}></CarouselWith4Items>
      </div>
    </div>
  );
};

export default SectionWithGallery;
