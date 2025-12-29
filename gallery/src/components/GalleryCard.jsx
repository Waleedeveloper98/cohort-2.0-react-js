import React from "react";

const GalleryCard = ({img}) => {
  return (
    <div className="rounded-xl overflow-hidden bg-gray-800">
      <img src={img} alt="Gallery" className="w-full h-48 object-cover" />
    </div>
  );
};

export default GalleryCard;
