import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-300 text-black py-10 px-5 sm:py-14 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="columns-2 gap-x-6 sm:columns-2 lg:flex lg:flex-row lg:justify-between lg:space-x-4">
          
          {/* Logo and Social Media (Desktop) */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="flex items-center mb-4">
              <img src={logo} alt="SeamTrack Logo" className="h-12" />
            </div>
            <div className="flex space-x-5">
              <FaFacebook className='text-button text-lg hover:opacity-70 cursor-pointer transition-opacity duration-200'/>
              <FaTwitter className='text-button text-lg hover:opacity-70 cursor-pointer transition-opacity duration-200'/>
              <FaLinkedin className='text-button text-lg hover:opacity-70 cursor-pointer transition-opacity duration-200'/>
              <FaInstagram className='text-button text-lg hover:opacity-70 cursor-pointer transition-opacity duration-200'/>
            </div>
          </div>

          {/* Tutors */}
          <div className="break-inside-avoid mb-4 lg:mb-0 lg:w-1/8 order-1 lg:order-none">
            <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-4 text-button">Tutors</h3>
            <ul className="space-y-1 lg:space-y-3 text-sm lg:text-sm">
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Become a tutor</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Tutoring jobs</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Homework Helpers</li>
            </ul>
          </div>

          {/* About Us */}
          <div className="break-inside-avoid mb-4 lg:mb-0 lg:w-1/8 order-2 lg:order-none">
            <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-4 text-button">About Us</h3>
            <ul className="space-y-1 lg:space-y-3 text-sm lg:text-sm">
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Terms of Service</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Privacy Policy</li>
            </ul>
          </div>

          {/* Students */}
          <div className="break-inside-avoid mb-4 lg:mb-0 lg:w-1/8 order-3 lg:order-none">
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-button">Students</h3>
            <ul className="space-y-2 lg:space-y-3 text-sm lg:text-sm">
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Find a tutor</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Services near me</li>
            </ul>
          </div>

          {/* Top Services */}
          <div className="break-inside-avoid mb-4 lg:mb-0 lg:w-1/8 order-4 lg:order-none">
            <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-4 text-button">Top Services</h3>
            <ul className="space-y-1 lg:space-y-3 text-sm lg:text-sm">
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Math tutors</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Chemistry tutors</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Biology tutors</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">English tutors</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">JAMB tutoring</li>
            </ul>
          </div>

          {/* Countries */}
          <div className="break-inside-avoid mb-4 lg:mb-0 lg:w-1/8 order-5 lg:order-none">
            <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-4 text-button">Countries</h3>
            <ul className="space-y-1 lg:space-y-3 text-sm lg:text-sm">
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Nigeria</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">United States</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Ghana</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Sierra-Leone</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">South Africa</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Cameroon</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">United Kingdom</li>
            </ul>
          </div>

        </div>

        {/* Logo and Social Media (Mobile) */}
        <div className="col-span-2 lg:hidden mt-10 border-t border-gray-300 pt-8 text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="SeamTrack Logo" className="h-12" />
          </div>
          <div className="flex justify-center space-x-5">
            <FaFacebook className='text-button text-lg hover:opacity-70 cursor-pointer transition-opacity duration-200'/>
            <FaTwitter className='text-button text-lg hover:opacity-70 cursor-pointer transition-opacity duration-200'/>
            <FaLinkedin className='text-button text-lg hover:opacity-70 cursor-pointer transition-opacity duration-200'/>
            <FaInstagram className='text-button text-lg hover:opacity-70 cursor-pointer transition-opacity duration-200'/>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 sm:mt-12 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-600 text-left">
          <p>&copy; 2025 Seamtrack - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
