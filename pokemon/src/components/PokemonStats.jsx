import { Heart, Shield, Sparkles, Zap } from "lucide-react";
import React from "react";
import PokemonStat from "./PokemonStat";

const PokemonStats = ({ selectedStats }) => {
  const statConfig = {
    attack: {
      text: "ATTACK",
      icon: Zap,
      iconOuterBg: "#FEF2DD",
      iconInnerBg: "#FCD9A8",
      iconColor: "#CF742E",
      iconBorderColor: "#FCE1C7",
    },
    defense: {
      text: "DEFENCE",
      icon: Shield,
      iconOuterBg: "#DBE8F8",
      iconInnerBg: "#BFD6F5",
      iconColor: "#2258C3",
      iconBorderColor: "#DCDFF7",
    },
    hp: {
      text: "HP",
      icon: Heart,
      iconOuterBg: "#FADCE3",
      iconInnerBg: "#F3AFB8",
      iconColor: "#C32359",
      iconBorderColor: "#F6CED0",
    },
  };

  return (
    <div className="w-full pointer-events-none baloo rounded-xl overflow-hidden shadow-lg">
      <div className="topbar bg-red-200 py-2 px-3 flex items-center gap-2">
        <div className="sparkle">
          <Sparkles size={20} />
        </div>
        <h4 className="text-lg font-semibold">Stats</h4>
      </div>
      <div className="bottom p-1 bg-[#FEFEFE]">
        {selectedStats.map((stat) => {
          const config = statConfig[stat.name];
          if (!config) return null;
          return (
            <div key={stat.name}>
              <PokemonStat
                stat={{
                  ...config,
                  percentage: stat.percentage,
                  percentageText: stat.value,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonStats;
