import React, { useState } from "react";
import phoneIcon from "../assets/phone.png";
import whatsappIcon from "../assets/whatsapp.png";
import emailIcon from "../assets/email.png";
import webIcon from "../assets/web.png";
import locationIcon from "../assets/location.png";

import sLogo from "../assets/S.png";
import bgImage from "../assets/bg.jpg";
import s2Logo from "../assets/S2.png";

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
    <div className="min-h-screen bg-white pt-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div
          className="relative bg-cover bg-center rounded-2xl py-20 px-4 text-center overflow-hidden"
                      style={{ 
              backgroundImage: `url(${bgImage})`,
              backgroundSize: '100%',
              backgroundPosition: 'center -100px'
            }}
        >
          <div className="absolute inset-0 bg-button opacity-90 rounded-2xl"></div>
          {/* Decorative S patterns */}
          <img src={s2Logo} alt="pattern" className="absolute -bottom-0 -left-0 w-66 h-auto opacity-85 pointer-events-none" />
          <img src={s2Logo} alt="pattern" className="absolute -top-0 -right-0 w-60 h-auto opacity-85 pointer-events-none transform rotate-180" />

          <div className="relative z-10">
            <p className="text-black text-1xl font-normal mb-4 inline-block bg-white rounded px-6 py-1">Write to us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow">Get in Touch</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-6">
          {/* Left Column - Form */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Let's Talk</h2>
            <p className="text-gray-600 mb-8 font-semibold">Contact us using the form or the details provided below.</p>
            
            {submitted ? (
              <div className="bg-[#F3F9E9] text-green-700 p-4 rounded-lg">
                Thank you for reaching out! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-[#F4F4F4] p-8 rounded-2xl space-y-6">
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
                  className="bg-button hover:opacity-90 text-white font-semibold py-3 px-8 rounded-[4px] transition-colors duration-200 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Right Side - Image and Contact Info */}
          <div className="bg-[#F3F9E9] p-7 rounded-2xl lg:col-span-5">
            <div className="relative mb-8">
              <img
                src="/src/assets/contactp.png"
                alt="Contact us"
                className="w-full h-80 object-cover rounded-2xl"
              />
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-50 h-50 pointer-events-none">
                <div
                  className="absolute bottom-7 left-6 w-full h-full bg-button"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Phone Number */}
              <div className="flex items-start space-x-4">
                <img src={phoneIcon} alt="Phone" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-gray-900">Phone Number</p>
                  <p className="text-sm font-semibold text-gray-600">+1 (701) 946-8777</p>
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="flex items-start space-x-4">
                <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp Number</p>
                  <p className="text-sm font-semibold text-gray-600">+234 818 902 9874</p>
                </div>
              </div>

              {/* General Inquiries */}
              <div className="flex items-start space-x-4">
                <img src={emailIcon} alt="Email" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-gray-900">General Inquiries</p>
                  <p className="text-sm font-semibold text-gray-600">info@seamtrack.net</p>
                </div>
              </div>

              {/* Sales Inquiries */}
              <div className="flex items-start space-x-4">
                <img src={emailIcon} alt="Email" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-gray-900">Sales Inquiries</p>
                  <p className="text-sm font-semibold text-gray-600">sales@seamtrack.net</p>
                </div>
              </div>

              {/* Technical Inquiries */}
              <div className="flex items-start space-x-4">
                <img src={emailIcon} alt="Email" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-gray-900">Technical Inquiries</p>
                  <p className="text-sm font-semibold text-gray-600">tech@seamtrack.net</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start space-x-4">
                <img src={webIcon} alt="Website" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-gray-900">Website</p>
                  <p className="text-sm font-semibold text-gray-600">www.seamtrack.net</p>
                </div>
              </div>
            </div>

            {/* Office Address - Full Width */}
            <div className=" pt-6">
              <div className="flex items-start space-x-4">
                <img src={locationIcon} alt="Location" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-gray-900">Office Address</p>
                  <p className="text-sm font-semibold text-gray-600">11 Tunde Fataye Street, Lekki Phase 1 Lagos, Nigeria</p>
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
