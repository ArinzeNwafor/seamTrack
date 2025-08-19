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
    function onDocClick(e) {
      // Check if we clicked on the dropdown toggle button
      const dropdownToggle = e.target.closest('[data-dropdown-toggle]');
      
      // If we didn't click on the dropdown toggle or its children, close the dropdown
      if (!dropdownToggle && tutorsRef.current && !tutorsRef.current.contains(e.target)) {
        setTutorsDropdown(false);
      }
      
      // Close mobile menu when clicking outside
      const mobileMenu = document.querySelector('.mobile-menu-container');
      const menuButton = document.querySelector('[aria-label^="Open menu"], [aria-label^="Close menu"]');
      
      if (isOpen && mobileMenu && !mobileMenu.contains(e.target) && menuButton && !menuButton.contains(e.target)) {
        setIsOpen(false);
      }
    }
    
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setTutorsDropdown(false);
        setIsOpen(false);
      }
    }
    
    // Add event listeners
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      // Clean up event listeners
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="SeamTrack Logo" className="h-10 w-auto shrink-0" />
        </div>
        <div className="hidden tablet:flex items-center space-x-5 lg:space-x-6">
          {renderLinks()}
          <div className="flex items-center space-x-3 ml-2">
            <Button className="px-4 py-2 text-sm">Sign up</Button>
            <Button variant="outline" className="px-4 py-2 text-sm">
              Sign in
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="tablet:hidden">
          <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="p-2 rounded-md text-text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-nav"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu-container tablet:hidden fixed inset-0 bg-white z-40 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          paddingTop: '1rem',
          paddingBottom: '6rem',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Logo in mobile menu */}
        <div className="flex justify-start mb-6 px-6">
          <img 
            src={logo} 
            alt="SeamTrack Logo" 
            className="h-10 w-auto"
          />
        </div>
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="px-6 pt-2 pb-8 space-y-1">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.name} className="mb-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setTutorsDropdown(!tutorsDropdown);
                    }}
                    data-dropdown-toggle="tutors-dropdown"
                    className="w-full flex items-center justify-between py-4 px-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={tutorsDropdown}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        tutorsDropdown ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      tutorsDropdown ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <div className="pl-4 py-2 space-y-2">
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block py-2.5 px-4 text-base rounded-md transition-colors duration-200 ${
                              isActive
                                ? 'bg-[var(--color-text-nav)]/10 text-[var(--color-text-nav)] font-medium'
                                : 'text-gray-700 hover:bg-gray-100'
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
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block py-4 px-3 text-lg font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--color-text-nav)] bg-[var(--color-text-nav)]/10 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>

        <div className="sticky bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
          <div className="space-y-3">
            <Button
              className="w-full py-3 text-base font-medium"
              onClick={() => {
                setIsOpen(false);
                // Add your sign up logic here
              }}
            >
              Sign up
            </Button>
            <Button
              variant="outline"
              className="w-full py-3 text-base font-medium"
              onClick={() => {
                setIsOpen(false);
                // Add your sign in logic here
              }}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
