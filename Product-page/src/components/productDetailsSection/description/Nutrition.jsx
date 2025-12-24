import React from "react";

const Nutrition = ({nutrition}) => {
    
  return (
    <div className="nutrition flex w-full items-center justify-between px-2 py-2  border-b">
      <p>{nutrition.title}</p>
      <p>{nutrition.val}</p>
    </div>
  );
};

export default Nutrition;
