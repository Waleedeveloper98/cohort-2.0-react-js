import React from "react";
import Tag from "./Tag";
import Title from "./Title";
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import Button from "../Button";
import Description from "./description/Description";

const ProductDetails = () => {
  return (
    <div className="bg-[#FAF8E7]  pt-10 flex flex-col gap-8 w-full">
      <div className="px-4 flex flex-col gap-4">
        <Tag />
        <Title />
      </div>
      <div className="ratings flex items-center gap-3 px-4">
        <div className="stars flex">
          {Array(5)
            .fill(null)
            .map(() => {
              return <Star fill="gold" stroke="none" />;
            })}
        </div>
        <p className="underline">69 Reviews</p>
      </div>

      <div className="pricing uppercase flex items-center px-4 gap-3">
        <h4 className="text-[#432818] text-4xl font-semibold">$149.96</h4>
        <h5 className="text-xl text-[#7e7068] ">/12 kg</h5>
      </div>

      <div className="quantity text-[#432818] px-4 flex items-center gap-1">
        <button className="border border-[#432818] rounded-full p-1.5">
          <Minus size={16} />
        </button>
        <input
          className="w-6 flex items-center justify-center text-center pointer-events-none text-xl placeholder:text-[#432818] font-bold border-none"
          type="text"
          placeholder="1"
        />
        <button className="border border-[#432818] rounded-full p-1.5">
          <Plus size={16} />
        </button>
      </div>

      <div className="add-to-cart flex px-4 gap-2">
        <Button text={"Add to Cart"} icon={ShoppingCart} px={"px-18"} />
        <Button icon={Heart} px={"px-2"} />
      </div>

      <Description />
    </div>
  );
};

export default ProductDetails;

//#432818
