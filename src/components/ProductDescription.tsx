import React from "react";
import { CarouselProductDescription } from "@/components";
const ProductDescription = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols sm:grid-cols-2 gap-4">
        <CarouselProductDescription />
        <div>HELLO</div>
      </div>
    </div>
  );
};

export default ProductDescription;
