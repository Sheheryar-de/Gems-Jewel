import Link from "next/link";
import React from "react";

const Badge = ({ value = 0, icon, href = "#" }) => {
  const content = (
    <div className="relative inline-flex items-center text-sm font-medium cursor-pointer">
      {icon}
      {value > 0 && (
        <span className="absolute inline-flex items-center justify-center w-[11px] h-[11px] md:w-5 md:h-5 text-[8px] md:text-xs text-white bg-red-500 rounded-full -top-1 -end-1 md:-top-2 md:-end-2">
          {value}
        </span>
      )}
    </div>
  );

  return href ? (
    <Link href={href} className="focus:outline-none">
      {content}
    </Link>
  ) : (
    <button type="button" className="focus:outline-none">
      {content}
    </button>
  );
};

export default Badge;
