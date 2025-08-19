import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";

const navItems = [
  {
    name: "Tutors",
    dropdown: [
      { name: "Find a Tutor", path: "/find-tutor" },
      { name: "Become a Tutor", path: "/become-tutor" },
    ],
  },
  { name: "Homework Buddies", path: "/homework-buddies" },
  { name: "How it works", path: "/how-it-works" },
  { name: "LMS", path: "/schools" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [tutorsDropdown, setTutorsDropdown] = useState(false);
  const tutorsRef = useRef(null);

  const green = "#82C220";

  // close dropdown on outside click or Escape
  useEffect(() => {
    function onDocMouseDown(e) {
      if (tutorsRef.current && !tutorsRef.current.contains(e.target)) {
        setTutorsDropdown(false);
      }
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') setTutorsDropdown(false);
    }
    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const renderLinks = () =>
    navItems.map((item) => {
      if (item.dropdown) {
        return (
          <div
            key={item.name}
            ref={tutorsRef}
            className="relative inline-block"
          >
            <button
              className={`whitespace-nowrap transition-colors duration-300 font-normal flex items-center gap-1 cursor-pointer ${tutorsDropdown ? 'text-[var(--color-text-nav)]' : 'text-text-black hover:text-[var(--color-text-nav)]'}`}
              type="button"
              aria-haspopup="menu"
              aria-expanded={tutorsDropdown}
              onClick={() => setTutorsDropdown((p) => !p)}
              style={tutorsDropdown ? { color: green } : {}}
            >
              {item.name}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {tutorsDropdown && (
              <div role="menu" className="absolute left-0 mt-2 w-44 rounded shadow-lg z-30" style={{ background: 'var(--color-hero-start)', color: 'black' }}>
                {item.dropdown.map((sub) => (
                  <NavLink
                    key={sub.name}
                    to={sub.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors duration-200 font-normal cursor-pointer ${
                        isActive ? "bg-gray-50 text-[var(--color-text-nav)]" : "hover:bg-gray-50 text-black"
                      }`
                    }
                    style={({ isActive }) => isActive ? { color: green } : {}}
                    onClick={() => setTutorsDropdown(false)}
                  >
                    {sub.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        );
      }
      return (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `whitespace-nowrap transition-colors duration-300 font-normal ${
              item.highlight
                ? 'text-[var(--color-text-nav)] hover:text-[var(--color-text-nav)]'
                : isActive
                  ? 'text-[var(--color-text-nav)] border-b-2 pb-1' // add underline
                  : 'text-text-black hover:text-[var(--color-text-nav)]'
            }`
          }
          style={({ isActive }) => (item.highlight || isActive) ? { color: green, borderBottom: isActive ? `2px solid ${green}` : undefined } : {}}
        >
          {item.name}
        </NavLink>
      );
    });

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-16 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="SeamTrack Logo" className="h-10 w-auto shrink-0" />
        </div>
        <div className="hidden tablet:flex items-center space-x-5 lg:space-x-4 xl:space-x-8">
          {renderLinks()}
          <div className="flex items-center space-x-2">
            <Button>Sign up</Button>
            <Button variant="outline">Sign in</Button>
          </div>
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
            {/* Mobile nav with dropdown for Tutors */}
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="w-full flex flex-col items-center">
                    <button
                      className="w-full text-left px-4 py-2 text-text-black font-medium flex items-center justify-between"
                      onClick={() => setTutorsDropdown((prev) => !prev)}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {tutorsDropdown && (
                      <div className="w-full bg-white border rounded shadow-lg z-30 flex flex-col">
                        {item.dropdown.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block px-6 py-2 text-sm transition-colors duration-200 ${
                                isActive ? "text-text-nav bg-gray-100" : "text-text-black hover:bg-gray-50"
                              }`
                            }
                            onClick={() => {
                              setTutorsDropdown(false);
                              setIsOpen(false);
                            }}
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `w-full text-left px-4 py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-text-nav font-medium border-b-2 border-text-nav pb-1"
                        : "text-text-black hover:text-text-nav"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              );
            })}
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
