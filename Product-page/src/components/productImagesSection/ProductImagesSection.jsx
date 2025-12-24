import React from "react";
import ProductMainImage from "./ProductMainImage";
import MiniProductImage from "./MiniProductImage";

const ProductImagesSection = () => {
  const featuredImages = [
    "https://m.media-amazon.com/images/I/71j2AV1WYUL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71btBH0GmlL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71b2s4FMgzL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/61hOjaLffRL._AC_SX679_.jpg",
  ];
  return (
    <div className="h-fit pb-10 md:pt-6 px-4 flex flex-col gap-4 md:flex-row-reverse lg:w-1/2">
      <ProductMainImage />
      <div className="mini-product-images overflow-auto flex justify-between flex-nowrap gap-2 md:flex-col ">
        {featuredImages.map((img)=> <MiniProductImage img={img}/>)}
      </div>
    </div>
  );
};

export default ProductImagesSection;
