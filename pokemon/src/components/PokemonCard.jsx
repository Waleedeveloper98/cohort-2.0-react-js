import React from "react";
import TypeTheme from "./TypeTheme";
import PokemonHealth from "./PokemonHealth";
import PokemonImage from "./PokemonImage";
import PokemonName from "./PokemonName";
import TypeBadge from "./TypeBadge";
import PokemonDescription from "./PokemonDescription";
import PokemonStats from "./PokemonStats";

const PokemonCard = ({ pokemon }) => {
  const {
    data: {
      name,
      types: [
        {
          type: { name: typeName },
        },
      ],
    },
  } = pokemon;

  const wantedStats = ["attack", "hp", "defense"];

  const selectedStats = pokemon.data.stats
    .filter((statObj) => wantedStats.includes(statObj.stat.name))
    .map((statObj) => ({
      name: statObj.stat.name,
      percentageText: statObj.base_stat,
      percentage: statObj.base_stat,
    }));

  const getTypeTheme = (typeName) => {
    switch (typeName) {
      case "fire":
        return {
          cardBg: "bg-linear-to-tl from-orange-100 via-red-50 to-amber-100",
          borderColor: "border-3 border-orange-400",
          badgeColor: "bg-orange-400",
          shadow: "shadow-lg shadow-orange-400",
          colorsPalette: ["bg-orange-300", "bg-red-300", "bg-amber-300"],
        };

      case "water":
        return {
          cardBg: "bg-linear-to-tl from-blue-100 via-cyan-50 to-sky-100",
          borderColor: "border-3 border-blue-400",
          badgeColor: "bg-blue-400",
          shadow: "shadow-lg shadow-blue-400",
          colorsPalette: ["bg-blue-300", "bg-cyan-300", "bg-sky-300"],
        };

      case "grass":
        return {
          cardBg: "bg-linear-to-tl from-green-100 via-emerald-50 to-lime-100",
          borderColor: "border-3 border-green-400",
          badgeColor: "bg-green-400",
          shadow: "shadow-lg shadow-green-400",
          colorsPalette: ["bg-green-300", "bg-emerald-300", "bg-lime-300"],
        };

      case "electric":
        return {
          cardBg: "bg-linear-to-tl from-yellow-100 via-amber-50 to-orange-100",
          borderColor: "border-3 border-yellow-400",
          badgeColor: "bg-yellow-400",
          shadow: "shadow-lg shadow-yellow-400",
          colorsPalette: ["bg-yellow-300", "bg-amber-300", "bg-orange-200"],
        };

      default:
        return {
          cardBg: "bg-linear-to-tl from-teal-100 via-cyan-50 to-emerald-100",
          borderColor: "border-3 border-teal-400",
          badgeColor: "bg-teal-400",
          shadow: "shadow-lg shadow-teal-400",
          colorsPalette: ["bg-teal-300", "bg-cyan-300", "bg-emerald-300"],
        };
    }
  };

  const { cardBg, borderColor, badgeColor, shadow, colorsPalette } =
    getTypeTheme(typeName);

  return (
    <div
      id="card"
      className={`w-75 rounded-2xl flex flex-col gap-3 items-start px-4 py-2 ${borderColor} bg-white pb-6 ${shadow}`}
    >
      <div className="header flex justify-between items-center w-full">
        <TypeTheme colorsPalette={colorsPalette} />
        <PokemonHealth selectedStats={selectedStats} />
      </div>

      <PokemonImage cardBg={cardBg} pokemon={pokemon} />

      <div className="pokemon-details w-full flex flex-col gap-3">
        <div className="name-tag flex items-center justify-between">
          <PokemonName name={name} />
          <TypeBadge badgeColor={badgeColor} typeName={typeName} />
        </div>
      </div>

      <div className="stats w-full mt-2">
        <PokemonStats selectedStats={selectedStats} />
      </div>
    </div>
  );
};

export default PokemonCard;
