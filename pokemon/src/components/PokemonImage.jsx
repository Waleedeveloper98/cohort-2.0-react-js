import { Sparkles, Star } from "lucide-react";
import React from "react";

const PokemonImage = ({ pokemon, cardBg }) => {
  const {
    data: {
      sprites: {
        other: {
          dream_world: { front_default },
        },
      },
    },
  } = pokemon;

  return (
    <div
      className={`w-full cursor-pointer max-h-55 p-2 py-3 shadow rounded-2xl flex flex-col gap-2 items-center justify-center ${cardBg}`}
    >
      <div className="sparkle self-end roll2">
        <Sparkles stroke="#FFE478" />
      </div>
      <img className="h-34" src={front_default} alt="" />
      <div className="star self-start roll">
        <Star strokeWidth={0} fill="#FFE478" />
      </div>
    </div>
  );
};

export default PokemonImage;
