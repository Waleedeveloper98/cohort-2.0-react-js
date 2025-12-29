import React from "react";

const GalleryControls = ({
  page,
  handlePrevPage,
  handleNextPage,
  isActiveButton,
}) => {
  return (
    <div className="flex justify-between items-center gap-6">
      <div className="btns flex gap-6 items-center">
        <button
          onClick={handlePrevPage}
          className={`${
            page === 1 && "bg-red-800"
          } px-6 cursor-pointer py-2 rounded-full ${
            !isActiveButton ? "bg-red-500" : "bg-gray-700"
          } ${isActiveButton && "hover:bg-gray-600"} transition`}
        >
          ← Prev
        </button>

        <button
          onClick={handleNextPage}
          className={`px-6 cursor-pointer py-2 rounded-full ${
            isActiveButton ? "bg-green-500" : "bg-gray-700"
          } ${!isActiveButton && "bg-gray-700"} transition`}
        >
          Next →
        </button>
      </div>
      <div className="pages-list">
        <h3 className="text-lg font-semibold pointer-events-none">
          Page no: {page}
        </h3>
      </div>
    </div>
  );
};

export default GalleryControls;
