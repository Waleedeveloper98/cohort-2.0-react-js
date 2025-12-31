import React from "react";

const TypeBadge = ({ typeName, badgeColor }) => {
  return (
    <div
      className={`baloo cursor-pointer text-sm font-bold tracking-wider px-4 py-2 rounded-full uppercase ${badgeColor}`}
    >
      {typeName}
    </div>
  );
};

export default TypeBadge;
