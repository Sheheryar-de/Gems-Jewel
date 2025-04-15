import React from "react";

const Badge = ({ value = 0, icon }) => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center text-sm font-medium text-center cursor-pointer focus:outline-none"
    >
      {icon}
      {value <= 0 ? undefined : (
        <div className="absolute inline-flex items-center justify-center w-[11px] h-[11px] md:w-5 md:h-5 text-[8px] md:text-xs text-white bg-red-500 rounded-full -top-1 -end-1 md:-top-2 md:-end-2">
          {value}
        </div>
      )}
    </button>
  );
};

export default Badge;
