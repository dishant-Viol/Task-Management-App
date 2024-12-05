"use client";

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-900 p-4 text-white flex justify-between items-center">
      {/* Navbar Header */}
      <div className="text-xl font-bold">
        <span>Dashboard</span>
      </div>

      {/* Navbar Links */}
      <div className="space-x-6 hidden lg:flex">
        <Link href="#" className="hover:bg-blue-600 px-4 py-2 rounded-md">
          Profile
        </Link>
        <Link href="#" className="hover:bg-blue-600 px-4 py-2 rounded-md">
          Notifications
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
