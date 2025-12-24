import { Star } from "lucide-react";
import React from "react";

const Ratings = () => {
  return (
    <div className="ratings flex items-center gap-3 px-4">
      <div className="stars flex">
        {Array(5)
          .fill(null)
          .map(() => {
            return <Star fill="gold" stroke="none" />;
          })}
      </div>
      <p className="underline">69 Reviews</p>
    </div>
  );
};

export default Ratings;
