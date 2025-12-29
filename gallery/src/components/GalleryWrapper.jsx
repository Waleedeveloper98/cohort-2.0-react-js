import React from "react";
import GalleryGrid from "./GalleryGrid";
import GalleryControls from "./GalleryControls";
import Loading from "./Loading";

const GalleryWrapper = ({
  usersList,
  page,
  handleNextPage,
  handlePrevPage,
  isActiveButton,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-5">
      <h1 className="text-3xl font-semibold text-center mb-8">Image Gallery</h1>
      {usersList.length > 0 ? (
        <GalleryGrid usersList={usersList} />
      ) : (
        <Loading />
      )}

      <GalleryControls
        isActiveButton={isActiveButton}
        page={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};

export default GalleryWrapper;
