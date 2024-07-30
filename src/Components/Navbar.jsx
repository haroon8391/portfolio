import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="text-white text-2xl font-bold">
            Portfo<span style={{ color: "#f9004d" }}>lio</span>
          </div>
          <div className="lg:hidden">
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex lg:justify-center text-white text-lg w-full lg:w-auto">
            <li className="block lg:inline-block text-center lg:px-4 py-2 lg:py-0">
              <NavLink
                to="/"
                // className="hover:text-black hover:bg-slate-100 py-2 px-4 hover:rounded-lg flex items-center justify-center"
                className={({ isActive }) =>
                  isActive
                    ? "block p-2 text-[#f9004d] font-bold"
                    : "block p-2 rounded-lg hover:bg-slate-100 hover:text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="block lg:inline-block text-center lg:px-4 py-2 lg:py-0">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block p-2 text-[#f9004d] font-bold"
                    : "block p-2 rounded-lg hover:bg-slate-100 hover:text-black"
                }
              >
                About
              </NavLink>
            </li>
            <li className="block lg:inline-block text-center lg:px-4 py-2 lg:py-0">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "block p-2 text-[#f9004d] font-bold"
                    : "block p-2 rounded-lg hover:bg-slate-100 hover:text-black"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="block lg:inline-block text-center lg:px-4 py-2 lg:py-0">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block p-2 text-[#f9004d] font-bold"
                    : "block p-2 rounded-lg hover:bg-slate-100 hover:text-black"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="block text-center lg:hidden">
            <button className="mt-4 bg-slate-100 text-black font-bold py-2 px-4 rounded-lg border-2 border-transparent hover:border-white hover:bg-gray-800 hover:text-white">
              Hire Me
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <button className="hireMe1 bg-slate-100 text-black font-bold py-2 px-4 rounded-lg border-2 border-transparent hover:border-white hover:bg-gray-800 hover:text-white">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
