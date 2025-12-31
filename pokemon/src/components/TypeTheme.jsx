import React from "react";

const TypeTheme = ({ colorsPalette }) => {
  console.log(colorsPalette)
  return (
    <div className="flex gap-1">
      {colorsPalette.map((palette, i) => {
          return (
            <div
              key={i}
              className={`size-2 rounded-full ${palette}`}
            ></div>
          );
        })}
    </div>
  );
};

export default TypeTheme;
