import React, { useState } from "react";
import phoneIcon from "../assets/phone.png";
import whatsappIcon from "../assets/whatsapp.png";
import emailIcon from "../assets/email.png";
import webIcon from "../assets/web.png";
import locationIcon from "../assets/location.png";

import sLogo from "../assets/S.png";
import bgImage from "../assets/bg.jpg";
import s2Logo from "../assets/S2.png";
import contactp from "../assets/contactp.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-16">
        <div
          className="relative bg-center bg-[length:160%] sm:bg-cover rounded-md py-8 sm:py-12 md:py-16 lg:py-20 px-4 text-center overflow-hidden min-h-[140px] max-h-[140px] sm:min-h-[180px] sm:max-h-[180px] flex items-center justify-center"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            borderRadius: '5px'
          }}
        >
          <div className="absolute inset-0 bg-button opacity-90 rounded-[5px]"></div>
          {/* Decorative S patterns */}
          <img 
            src={s2Logo} 
            alt="pattern" 
            className="absolute -bottom-0.5 -left-0 w-24 sm:w-44 md:w-56 lg:w-50 h-auto opacity-85 pointer-events-none" 
          />
          <img 
            src={s2Logo} 
            alt="pattern" 
            className="absolute -top-0.5 -right-0 w-24 sm:w-40 md:w-52 lg:w-50 h-auto opacity-85 pointer-events-none transform rotate-180" 
          />

          <div className="relative z-10 px-2">
            <p className="text-black text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3 inline-block bg-white rounded-md px-5 py-1.5 sm:px-5 sm:py-1.5 md:px-6 md:py-2">
              Write to us
            </p>
            <h1 className="text-[40px] sm:text-5xl md:text-5xl lg:text-6xl leading-tight tracking-tight font-bold text-gray-900 drop-shadow">
              Get in Touch
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-6">
          {/* Left Column - Form */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Let's Talk</h2>
            <p className="text-gray-600 mb-8 font-semibold">Contact us using the form or the details provided below.</p>
            
            {submitted ? (
              <div className="bg-[#F3F9E9] text-green-700 p-4 rounded-lg">
                Thank you for reaching out! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="sm:bg-[#F4F4F4] p-6 sm:p-8 rounded-none sm:rounded-2xl space-y-6 mx-[-1.5rem] sm:mx-0">
                  <input
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <textarea
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent resize-none"
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-button hover:opacity-90 text-white font-semibold py-3 px-8 rounded-[4px] transition-colors duration-200 cursor-pointer w-full sm:w-auto"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Right Side - Image and Contact Info */}
          <div className="order-1 lg:order-2 bg-[#F3F9E9] p-5 rounded-none sm:rounded-2xl mx-[-1.5rem] sm:mx-0 lg:col-span-5">
            <div className="relative mb-8">
              <img
                src={contactp}
                alt="Contact us"
                className="w-full h-80 object-cover rounded-xl"
              />
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-50 h-50 pointer-events-none">
                <div
                  className="absolute bottom-5 left-4 w-full h-full bg-button"
                  style={{
                    maskImage: `url(${sLogo})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskImage: `url(${sLogo})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                  }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6">
              {/* Phone Number */}
              <div className="flex items-start space-x-2 sm:space-x-3">
                <img src={phoneIcon} alt="Phone" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Phone Number</p>
                  <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600 break-words">+1 (701) 946-8777</p>
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="flex items-start space-x-2 sm:space-x-3">
                <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">WhatsApp</p>
                  <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600 break-words">+234 818 902 9874</p>
                </div>
              </div>

              {/* General Inquiries */}
              <div className="flex items-start space-x-2 sm:space-x-3">
                <img src={emailIcon} alt="Email" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">General</p>
                  <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600 break-words">info@seamtrack.net</p>
                </div>
              </div>

              {/* Sales Inquiries */}
              <div className="flex items-start space-x-2 sm:space-x-3">
                <img src={emailIcon} alt="Email" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Sales</p>
                  <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600 break-words">sales@seamtrack.net</p>
                </div>
              </div>

              {/* Technical Inquiries */}
              <div className="flex items-start space-x-2 sm:space-x-3">
                <img src={emailIcon} alt="Email" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Technical</p>
                  <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600 break-words">tech@seamtrack.net</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start space-x-2 sm:space-x-3">
                <img src={webIcon} alt="Website" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Website</p>
                  <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600 break-words">www.seamtrack.net</p>
                </div>
              </div>
            </div>

            {/* Office Address - Full Width */}
            <div className=" pt-6">
              <div className="flex items-start space-x-4">
                <img src={locationIcon} alt="Location" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Office Address</p>
                  <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600 break-words">11 Tunde Fataye Street, Lekki Phase 1 Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
