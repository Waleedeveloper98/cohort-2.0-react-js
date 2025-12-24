import React from "react";

const Button = ({ text, icon: Icon, px, py = "py-2" }) => {
  return (
    <button
      className={`bg-amber-900 flex items-center gap-2 text-white font-medium ${px} ${py} rounded-full cursor-pointer`}
    >
      {Icon && <Icon size={24} />}
      {text}
    </button>
  );
};

export default Button;
