import { Zap } from "lucide-react";
import React from "react";

const PokemonStat = ({ stat }) => {

  const {
    text,
    icon: Icon,
    iconOuterBg,
    iconInnerBg,
    iconColor,
    iconBorderColor,
    percentage,
  } = stat;
  // console.log(stat);

  return (
    <div className="py-2  flex gap-4 px-1">
      <div
        style={{
          backgroundColor: iconOuterBg,
          border: `1.5px solid ${iconBorderColor}`,
        }}
        className={`icon w-1/5  rounded-xl overflow-hidden`}
      >
        <div
          style={{ backgroundColor: `${iconInnerBg}` }}
          className="size-full mt-px rounded-xl flex items-center justify-center"
        >
          <Icon stroke={`${iconColor}`} size={22} />
        </div>
      </div>
      <div className="progress w-4/5 flex flex-col gap-3">
        <div className="top flex justify-between items-center">
          <h3 className="font-medium text-sm">{text}</h3>
          <p className="font-medium text-sm">{percentage}</p>
        </div>
        <div className="bar w-full h-2 rounded-full relative bg-gray-200 overflow-hidden">
          <div
            style={{
              backgroundColor: iconColor,
              width: `${percentage}%`,
            }}
            className="inner h-full rounded-full transition-all duration-300"
          >
            <div className="shine"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonStat;
