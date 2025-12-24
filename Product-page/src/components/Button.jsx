import React from "react";

const Button = ({text}) => {
  return (
    <button className="bg-amber-900 text-white font-medium px-6 py-2 rounded cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
