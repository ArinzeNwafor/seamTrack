import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Find a Tutor", path: "/find-tutor" },
  { name: "Become a Tutor", path: "/become-tutor" },
  { name: "LMS", path: "/schools" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const renderLinks = () =>
    navItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        className={({ isActive }) =>
          `whitespace-nowrap transition-colors duration-300 ${
            isActive
              ? "text-text-nav font-medium border-b-2 border-text-nav pb-1"
              : "text-text-black hover:text-text-nav"
          }`
        }
      >
        {item.name}
      </NavLink>
    ));

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 lg:px-3 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="SeamTrack Logo" className="h-8 w-auto shrink-0" />
        </div>
        <div className="hidden tablet:flex items-center space-x-5 lg:space-x-4 xl:space-x-8">
          {renderLinks()}
          <Button>Sign up</Button>
          <Button variant="outline">Sign in</Button>
        </div>

        <div className="tablet:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="tablet:hidden bg-navWhite pb-4">
          <div className="flex flex-col items-center space-y-4">
            {renderLinks()}
            <Button className="sm:w-3/4 md:w-3/6">Sign up</Button>
            <Button variant="outline" className="sm:w-3/4 md:w-3/6">
              Sign in
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
