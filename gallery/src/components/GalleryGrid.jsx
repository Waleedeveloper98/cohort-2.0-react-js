import React from "react";
import GalleryCard from "./GalleryCard";

const GalleryGrid = ({ usersList }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
      {usersList.map((userItem) => {
        return <GalleryCard key={userItem.id} img={userItem.download_url} />;
      })}
    </div>
  );
};

export default GalleryGrid;
