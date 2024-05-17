import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-60 h-full bg-gray-800 z-50 transition duration-300 ease-in-out transform">
      {/* Sidebar content here */}
      <ul className="flex flex-col space-y-2 p-4">
        <li className="text-white hover:text-gray-400">
          <a href="#">Dashboard</a>
        </li>
        <li className="text-white hover:text-gray-400">
          <a href="#">Settings</a>
        </li>
        <li className="text-white hover:text-gray-400">
          <button>Close</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
