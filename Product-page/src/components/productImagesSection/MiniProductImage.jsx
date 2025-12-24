import React from "react";

const MiniProductImage = ({ img }) => {
  return (
    <div className="w-[100px,25vw,120px] h-[clamp(100px,10vh,200px)] shrink-0 rounded-xl bg-amber-500 overflow-hidden">
      <img className="size-full object-cover" src={img} alt="" />
    </div>
  );
};

export default MiniProductImage;
