import React from "react";

const Header = ({ name }) => {
  return (
    <div>
      <p className="font-semibold text-3xl text-center">{name}</p>
    </div>
  );
};

export default Header;
