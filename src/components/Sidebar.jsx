import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-white text-lg font-bold">Sidebar</h1>
        <ul className="mt-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300 block">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 block">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 block">
              Link 3
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <p className="text-white">Sidebar footer</p>
      </div>
    </div>
  );
};

export default Sidebar;
