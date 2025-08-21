import React from 'react';
import hmbuddiesImg from '../assets/hmbuddies.jpg';
import howImg from '../assets/How-it-works.jpg';
import iconUpload from '../assets/material-symbols-light_drive-folder-upload-rounded.svg';
import iconUserPick from '../assets/solar_user-check-bold.svg';
import iconSecure from '../assets/ic_round-verified-user.svg';
import iconPay from '../assets/streamline-freehand-color_modern-payment-e-wallet.svg';
import iconDocs from '../assets/streamline-freehand-color_design-process-drawing-board-education.svg';
import iconOnDemand from '../assets/streamline-freehand-color_creativity-idea-bulb.svg';
import iconPersonal from '../assets/streamline-freehand-color_job-candidate-target-1.svg';
import imgParents from '../assets/Rectangle 9384.png';
import imgTutors from '../assets/Rectangle 9384 (1).png';
import ctaImg from '../assets/d7bf5cec23a27bac26aed24a912b788ee32abf33.jpg';
import backgroundImg from '../assets/background.png';

const HomeworkBuddies = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section
        className="relative z-0 w-full px-0 pt-32 pb-14 overflow-hidden bg-white"
        style={{
          minHeight: '420px',
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundSize: '400px',
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute inset-0 w-full h-full bg-white pointer-events-none -z-10" style={{ opacity: 0.8 }} />
        <div className="max-w-6xl mx-auto w-full px-4 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="relative flex flex-col justify-center h-full">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-[50px] font-extrabold mb-4 text-[#231F20] leading-tight">Get Help. Give Help. Learn Better.</h2>
              <p className="mb-8 text-gray-800 text-lg max-w-md">Homework Buddies connect students with expert tutors for fast, reliable academic support — anytime, anywhere.</p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto mb-6 md:mb-0">
                <button className="w-full md:w-auto bg-[var(--color-text-nav)] text-white px-6 py-3.5 rounded-[3px] font-medium shadow cursor-pointer hover:opacity-90 transition">Submit a Homework Task</button>
                <button className="w-full md:w-auto border border-[var(--color-text-nav)] text-[var(--color-text-nav)] px-6 py-3.5 rounded-[3px] font-medium bg-white cursor-pointer hover:bg-[var(--color-text-nav)] hover:text-white hover:border-[var(--color-text-nav)] transition-all duration-300">Become a Homework Buddy</button>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative">
              <img src={hmbuddiesImg} alt="Homework Buddies" className="rounded-[10px] w-full max-w-2xl h-[360px] md:h-[500px] object-cover relative z-10" />
              <style>{`
                @media (max-width: 768px) {
                  .arrow-position {
                    top: -7.7% !important;
                    right: -8.3% !important;
                    left: auto !important;
                  }
                }
                @media (min-width: 769px) {
                  .arrow-position {
                    top: -7.7% !important;
                    right: -8.5% !important;
                    left: auto !important;
                  }
                }
              `}</style>
              <img 
                src="src/assets/arrow-wireframe.png" 
                alt="Arrow" 
                className="absolute z-20 w-15 h-auto md:w-21 arrow-position"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Divider after hero*/}
      {/* Hide the divider for mobile */}
      <style>{`@media (max-width: 768px) { .homework-buddies-hero-divider { display: none; } }`}</style>
      <div className="homework-buddies-hero-divider w-full border-t-[3px] border-gray-400" />

      {/* How it Works */}
      <section className="w-full max-w-[90rem] mx-auto px-4 md:px-16 py-10">
        <h3 className="text-[24px] md:text-2xl font-semibold mb-2">How it Works</h3>
        <p className="text-lg md:text-base text-gray-700 font-medium mb-5">Get help in 3 simple steps — safe, fast, and fair.</p>
        <div className="grid md:grid-cols-[2.25fr_1fr] gap-10 items-start">
          {/* Left: image */}
          <img
            src={howImg}
            alt="How it works"
            className="rounded-xl w-full h-[410px] sm:h-[400px] md:h-[662px] object-cover shadow-lg"
          />
          {/* Right: Stacked cards */}
          <div className="space-y-4 w-full">
            <div className="rounded-xl p-7 shadow-sm w-full min-h-[230px] md:min-h-[210px] md:w-[330px] bg-gradient-to-b from-yellow-50 to-[#FFF3BF]">
              <img src={iconUpload} alt="Upload" className="h-13 w-13 mb-3" />
              <h4 className="text-[20px] md:text-[20px] font-semibold text-gray-900">Submit Your Homework</h4>
              <p className="text-[17px] md:text-[16px] leading-snug font-medium text-gray-600 max-w-xs">Upload the task, set your budget, and deadline.</p>
            </div>

            <div className="rounded-xl p-7 shadow-sm w-full min-h-[230px] md:min-h-[210px] md:w-[330px] bg-gradient-to-b from-blue-50 to-[#DDEBFF]">
              <img src={iconUserPick} alt="Tutor picks" className="h-13 w-13 mb-3" />
              <h4 className="text-[20px] md:text-[20px] font-semibold text-gray-900">Tutors Pick It Up</h4>
              <p className="text-[17px] md:text-[16px] leading-snug font-medium text-gray-600 max-w-xs">Verified tutors review and accept your request.</p>
            </div>

            <div className="rounded-xl p-7 shadow-sm w-full min-h-[230px] md:min-h-[210px] md:w-[330px] bg-gradient-to-b from-rose-50 to-[#FFDDE1]">
              <img src={iconSecure} alt="Secure" className="h-13 w-13 mb-3" />
              <h4 className="text-[20px] md:text-[20px] font-semibold text-gray-900">Get Help, Securely</h4>
              <p className="text-[17px] md:text-[16px] leading-snug font-medium text-gray-600 max-w-xs">We ensure quality delivery and safe payment.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Divider */}
      {/* Hide the divider for mobile */}
      <style>{`@media (max-width: 768px) { .homework-buddies-divider { display: none; } }`}</style>
      <div className="homework-buddies-divider w-full border-t-[3px] border-gray-400" />

      {/* Why Homework Buddies */}
      <section className="max-w-6xl mx-auto px-4 py-15">
        <h3 className="text-2xl md:text-3xl font-semibold mb-7">Why Homework Buddies?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-sm min-h-[200px] flex flex-col">
            <img src={iconPay} alt="Secure Payments" className="h-12 w-12 mb-4" />
            <div className="text-lg md:text-lg font-semibold text-gray-900">Secure Payments</div>
            <p className="text-base md:text-base text-gray-600 mt-1">All transactions are safe and timely.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-sm min-h-[200px] flex flex-col">
            <img src={iconDocs} alt="Broad Documents" className="h-12 w-12 mb-4" />
            <div className="text-lg md:text-lg font-semibold text-gray-900">Educational First</div>
            <p className="text-base md:text-base text-gray-600 mt-1">Solutions are explained, not spoon fed</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-sm min-h-[200px] flex flex-col">
            <img src={iconOnDemand} alt="On-Demand" className="h-12 w-12 mb-4" />
            <div className="text-lg md:text-lg font-semibold text-gray-900">On-Demand</div>
            <p className="text-base md:text-base text-gray-600 mt-1">Help is available when it's needed most</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-sm min-h-[200px] flex flex-col">
            <img src={iconPersonal} alt="Personalized" className="h-12 w-12 mb-4" />
            <div className="text-lg md:text-lg font-semibold text-gray-900">Personalized</div>
            <p className="text-base md:text-base text-gray-600 mt-1">Every solution is tailored to the student's need</p>
          </div>
        </div>
      </section>

      {/* For Students & Parents / For Teachers & Tutors */}
      <section className="w-full py-10 bg-ssn-card md:bg-[#EAE6E8]">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Card: Students & Parents */}
            <div className="rounded-xl p-6 md:p-7 bg-gray-50 md:bg-ssn-card">
              <h4 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-3">For Students & Parents</h4>
              <p className="text-[17px] md:text-lg text-gray-700 mb-5">Need help with an assignment or topic you don’t understand? </p>
              <ul className="space-y-2 text-[17px] md:text-lg text-gray-700 mb-5">
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2 w-2 rounded-full bg-text-nav" />Find an expert tutor in your subject area</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2 w-2 rounded-full bg-text-nav" />Connect online and explain your needs</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2 w-2 rounded-full bg-text-nav" />Get personalized guidance, not just answers</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2 w-2 rounded-full bg-text-nav" />Pay only for the support you recieve</li>
              </ul>
              <style>{`@media (max-width: 768px) { .hide-on-mobile { display: none; } }`}</style>
              <button className="hide-on-mobile inline-flex items-center justify-center my-2 rounded-[5px] bg-transparent text-[var(--color-text-nav)] cursor-pointer px-2 py-2 font-medium border w-full md:w-62 text-center hover:bg-[var(--color-text-nav)] hover:text-white hover:border-[var(--color-text-nav)] transition-all duration-300">Submit a Homework Task</button>
            </div>
            {/* Image: Students & Parents */}
            <img src={imgParents} alt="Students and parents" className="w-full h-[320px] sm:h-[360px] md:h-[400px] object-cover rounded-xl shadow-sm" />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Image: Tutors */}
            <img src={imgTutors} alt="Teachers and tutors" className="w-full h-[320px] sm:h-[360px] md:h-[400px] object-cover rounded-xl shadow-sm" />
            {/* Card: Teachers & Tutors */}
            <div className="rounded-xl p-6 md:p-7 bg-gray-50 md:bg-ssn-card">
              <h4 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-3">For Teachers & Tutors</h4>
              <p className="text-[17px] md:text-lg text-gray-700 mb-5">Want to earn by helping others? Become a Homework Buddy and: </p>
              <ul className="space-y-2 text-[17px] md:text-lg text-gray-700 mb-5">
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--color-text-nav)]" />Solve real homework questions.</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--color-text-nav)]" />Work on your own schedule.</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--color-text-nav)]" />Build your tutoring profile.</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--color-text-nav)]" />Get paid per task completed.</li>
              </ul>
              <style>{`@media (max-width: 768px) { .hide-on-mobile { display: none; } }`}</style>
              <button className="hide-on-mobile inline-flex items-center justify-center my-2 rounded-[5px] bg-transparent text-gray-900 cursor-pointer px-2 py-2 font-medium border border-gray-900 w-full md:w-62 text-center hover:bg-[var(--color-text-nav)] hover:text-white hover:border-[var(--color-text-nav)] transition-all duration-300">Become a Homework Buddy</button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started? area */}
      <section className="max-w-5xl md:max-w-6xl mx-auto px-4 py-10">
        <div className="relative grid md:grid-cols-2 gap-4 items-center rounded-xl bg-ssn-card p-6 md:p-8 shadow-sm">
          {/* Left area */}
          <div>
            <h3 className="text-4xl md:text-[48px] font-bold text-[var(--color-text-nav)] mb-3 md:mb-2">Ready to Get Started?</h3>
            <p className="text-lg font-medium mb-6 md:mb-4 md:text-[22px] text-gray-700 max-w-[4000px]">Sign up now and experience the benefits of Homework Buddies for yourself.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="inline-flex items-center justify-center rounded-[5px] bg-[var(--color-text-nav)] text-white cursor-pointer px-6 py-3 md:px-4 md:py-3 text-base md:text-sm font-medium border w-full md:w-60 text-center hover:opacity-90 transition-all duration-300">Submit a Homework Task</button>
              <button className="inline-flex items-center justify-center rounded-[5px] bg-transparent text-[var(--color-text-nav)] px-6 py-3 md:px-4 md:py-3 text-base md:text-sm font-medium border border-[var(--color-text-nav)] cursor-pointer w-full md:w-60 text-center hover:bg-[var(--color-text-nav)] hover:text-white hover:border-[var(--color-text-nav)] transition-all duration-300">Become a Homework Buddy</button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <img src={ctaImg} alt="Student using laptop" className="w-full h-[280px] sm:h-[320px] md:h-[360px] object-cover rounded-xl shadow-sm" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeworkBuddies;