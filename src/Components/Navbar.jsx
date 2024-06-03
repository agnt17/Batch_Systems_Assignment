import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row p-10 ml-10 items-center justify-between">
      <div className="flex flex-row pr-10 gap-3">
        <img src="./icon.svg" alt="icon" />
        <div className="font-bold text-2xl scale-110">
          uifry<sup className="text-xxs align-super font-bold">TM</sup>
        </div>
      </div>
      <div className="hidden lg:flex flex-row gap-1 lg:gap-20">
        <div className="text-orange-500 font-extrabold">HOME</div>
        <div className="font-semibold">About Us</div>
        <div className="font-semibold">Pricing</div>
        <div className="font-semibold">Features</div>
      </div>
      <div className="hidden lg:flex">
        <button className="bg-black text-white p-2 ml-52 rounded-sm w-32 font-light cursor-pointer">
          Download
        </button>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="text-orange-500 font-extrabold">HOME</div>
            <div className="font-semibold">About Us</div>
            <div className="font-semibold">Pricing</div>
            <div className="font-semibold">Features</div>
            <div>
              <button className="bg-black text-white rounded-sm w-32 font-light cursor-pointer">
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
