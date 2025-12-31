import { Heart } from "lucide-react";
import React from "react";

const PokemonHealth = ({selectedStats}) => {
  return (
    <div className="baloo pointer-events-none bg-[#FCEFF3] px-5 py-1.5 rounded-full flex items-center gap-2">
      <div className="heart">
        <Heart fill="red" stroke="" />
      </div>
      <p className="font-medium text-lg">{selectedStats[0].percentage}</p>
    </div>
  );
};

export default PokemonHealth;
