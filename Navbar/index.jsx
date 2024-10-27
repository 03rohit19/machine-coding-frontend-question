import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 border border-white">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo and Search for Small Screens */}
          <div className="flex items-center justify-between w-full sm:hidden">
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 text-sm rounded-md bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-600"
              />
              <FaSearch className="text-gray-300" />
            </div>
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Large Screen Layout */}
          <div className="hidden sm:flex items-center justify-between w-full border border-white">
            <div className="flex items-center border border-red-600">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>

            <div className="flex flex-1 justify-center space-x-4 border border-yellow-600">
              <a
                href="#"
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Calendar
              </a>
            </div>

            {/* Search Bar for Large Screens */}
            <div className="flex items-center space-x-2 border border-green-600 mr-11">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 text-sm rounded-md bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-600"
              />
              <FaSearch className="text-gray-300" />
            </div>

            <div className="flex items-center space-x-3">
              <button className="text-gray-300 hover:text-white focus:outline-none">
                Login
              </button>
              <button className="text-gray-300 hover:text-white focus:outline-none">
                Register
              </button>
              <FaUser className="text-gray-300 h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </a>
            <hr className="border-gray-700" />
            <a
              href="#"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
            >
              Login
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
            >
              Register
            </a>
            <FaUser className="text-gray-300 h-5 w-5 ml-3 mt-2 items-start border-gray-300" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
