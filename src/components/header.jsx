import React, { useState } from 'react';

const logo = "./src/assets/logo.png";

const Header = () => {
  return (
    <header className="drop-shadow-[0_0px_10px_rgba(236,60,76,1)] w-full bg-white rounded-b-lg p-4 flex justify-between items-center h-16 z-10">
      <img src={logo} alt="Logo" className="h-10" />
    </header>
  );
};

export default Header;
