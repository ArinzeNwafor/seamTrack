import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-300 text-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-4">
          
          {/* Logo and Social Media */}
          <div className="lg:w-1/4">
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

          {/* About Us */}
          <div className="lg:w-1/8">
            <h3 className="text-lg font-semibold mb-4 text-button">About Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Terms of Service</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Privacy Policy</li>
            </ul>
          </div>

          {/* Tutors */}
          <div className="lg:w-1/8">
            <h3 className="text-lg font-semibold mb-4 text-button">Tutors</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Become a tutor</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Tutoring jobs</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Homework Helpers</li>
            </ul>
          </div>

          {/* Students */}
          <div className="lg:w-1/8">
            <h3 className="text-lg font-semibold mb-4 text-button">Students</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Find a tutor</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Services near me</li>
            </ul>
          </div>

          {/* Top Services */}
          <div className="lg:w-1/8">
            <h3 className="text-lg font-semibold mb-4 text-button">Top Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Math tutors</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Chemistry tutors</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">Biology tutors</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">English tutors</li>
              <li className="hover:text-button cursor-pointer transition-colors duration-200">JAMB tutoring</li>
            </ul>
          </div>

          {/* Countries */}
          <div className="lg:w-1/8">
            <h3 className="text-lg font-semibold mb-4 text-button">Countries</h3>
            <ul className="space-y-3 text-sm">
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

        <div className="border-t border-gray-300 mt-12 pt-8 text-sm text-gray-600">
          <p>&copy; 2025 Seamtrack - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
