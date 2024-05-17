import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 mt-0 ml-60 h-16 top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between ">
        <div className="flex">
          <div className="text-white font-bold">Payouts</div>
          <div className="text-white font-bold">How it works</div>
        </div>
        <input
          type="text"
          placeholder="Search Features, Tutorials, etc."
          className="h-10 w-1/3 rounded-md"
        ></input>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Icon 1
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Icon 2
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
