import React from "react";

const MiniProductImage = () => {
  return (
    <div className="w-[30%] md:w-full h-28 md:h-[23%] rounded-xl bg-amber-500 overflow-hidden">
      <img
        className="size-full object-cover"
        src="https://m.media-amazon.com/images/I/71btBH0GmlL._AC_SX679_.jpg"
        alt=""
      />
    </div>
  );
};

export default MiniProductImage;
