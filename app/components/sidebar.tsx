"use client";

import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 bottom-0 p-2 w-[250px] lg:w-[300px] bg-gray-900 text-white">
      {/* Sidebar Content */}
      <div className="text-xl text-gray-100">
        <div className="p-2.5 flex items-center">
          <h1 className="font-bold text-[15px] ml-3 text-xl">Admin Panel</h1>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>

      {/* Sidebar Links */}
      <div className="p-2.5 flex items-center rounded-md px-4 bg-gray-700 cursor-pointer text-white">
        <i className="bi bi-search text-sm"></i>
        <input
          type="text"
          placeholder="Search"
          className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>

      <Link href="/home" className="text-[15px] ml-4  font-bold p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
          Home
        </Link>

        <Link href="/admin" className="text-[15px] ml-4  font-bold p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
          Admin
        </Link>

        <Link href="/setting" className="text-[15px] ml-4  font-bold p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
          Setting
        </Link>
      
    </div>
  );
};

export default Sidebar;
