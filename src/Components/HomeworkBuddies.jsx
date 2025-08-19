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

const HomeworkBuddies = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative z-0 max-w-6xl mx-auto px-4 pt-24 pb-16 grid md:grid-cols-2 gap-8 items-center">
        {/*grid background covering entire hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10"
          style={{
            top: '76px',
            bottom: '16px',
            left: 'calc(50% - 50vw + 16px)',
            right: 'calc(50% - 50vw + 16px)',
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '20px 20px, 20px 20px',
            backgroundPosition: 'left top, left 0 top 10px',
          }}
        />
        <div className="relative flex flex-col justify-center h-full">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#231F20] leading-tight">Get Help. Give Help. Learn Better.</h2>
            <p className="mb-8 text-gray-700 text-lg max-w-md">Homework Buddies connects students to real-time support for any task. Unlock collaborative learning & academic confidence.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[var(--color-text-nav)] text-white px-6 py-3.5 rounded-[5px] font-medium shadow cursor-pointer hover:opacity-90 transition">I’d like to get help / talk</button>
              <button className="border border-[var(--color-text-nav)] text-[var(--color-text-nav)] px-6 py-3.5 rounded-[5px] font-medium bg-white cursor-pointer hover:bg-[var(--color-text-nav)] hover:text-white hover:border-[var(--color-text-nav)] transition-all duration-300">I’d like to assist with studying</button>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <img src={hmbuddiesImg} alt="Homework Buddies" className="rounded-2xl w-full max-w-lg h-125 object-cover" />
        </div>
      </section>

      
      {/* Divider after hero */}
      <div className="w-full border-t-[3px] border-gray-200" />

      {/* How it Works */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold mb-2">How it Works</h3>
        <p className="text-gray-600 mb-5">Get help in 3 simple steps — submit, pick, and learn.</p>
        <div className="grid md:[grid-template-columns:3fr_2fr] gap-6 items-start">
          {/* Left: Large rounded image */}
          <img
            src={howImg}
            alt="How it works"
            className="rounded-xl w-full h-[420px] md:h-[500px] object-cover shadow-lg md:-mr-4"
          />
          {/* Right: Stacked pastel cards */}
          <div className="space-y-4 md:max-w-sm">
            <div className="rounded-xl p-7 shadow-sm min-h-[150px] bg-gradient-to-b from-yellow-50 to-[#FFF3BF]">
              <img src={iconUpload} alt="Upload" className="h-10 w-10 mb-3" />
              <h4 className="text-base md:text-lg font-semibold text-gray-900">Submit Your Homework</h4>
              <p className="text-sm leading-snug text-gray-600 max-w-xs">Upload your brief and any background material.</p>
            </div>

            <div className="rounded-xl p-7 shadow-sm min-h-[150px] bg-gradient-to-b from-blue-50 to-[#DDEBFF]">
              <img src={iconUserPick} alt="Tutor picks" className="h-10 w-10 mb-3" />
              <h4 className="text-base md:text-lg font-semibold text-gray-900">Tutors Pick It Up</h4>
              <p className="text-sm leading-snug text-gray-600 max-w-xs">Verified tutors review and accept your request.</p>
            </div>

            <div className="rounded-xl p-7 shadow-sm min-h-[150px] bg-gradient-to-b from-rose-50 to-[#FFDDE1]">
              <img src={iconSecure} alt="Secure" className="h-10 w-10 mb-3" />
              <h4 className="text-base md:text-lg font-semibold text-gray-900">Get Help, Securely</h4>
              <p className="text-sm leading-snug text-gray-600 max-w-xs">We’ll ensure quality and safe payment.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Divider */}
      <div className="w-full border-t-[3px] border-gray-200" />

      {/* Why Homework Buddies */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-2xl md:text-3xl font-semibold mb-7">Why Homework Buddies?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm min-h-[150px]">
            <img src={iconPay} alt="Secure Payments" className="h-10 w-10 mb-3" />
            <div className="text-base md:text-lg font-semibold text-gray-900">Secure Payments</div>
            <p className="text-sm md:text-base text-gray-600 mt-1">All transactions are safe and simple.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm min-h-[150px]">
            <img src={iconDocs} alt="Broad Documents" className="h-10 w-10 mb-3" />
            <div className="text-base md:text-lg font-semibold text-gray-900">Broad Document</div>
            <p className="text-sm md:text-base text-gray-600 mt-1">Upload notes, prompts, and coursework.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm min-h-[150px]">
            <img src={iconOnDemand} alt="On-Demand" className="h-10 w-10 mb-3" />
            <div className="text-base md:text-lg font-semibold text-gray-900">On‑Demand</div>
            <p className="text-sm md:text-base text-gray-600 mt-1">Help is available when you need it most.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm min-h-[150px]">
            <img src={iconPersonal} alt="Personalized" className="h-10 w-10 mb-3" />
            <div className="text-base md:text-lg font-semibold text-gray-900">Personalized</div>
            <p className="text-sm md:text-base text-gray-600 mt-1">Carefully matched to your needs and level.</p>
          </div>
        </div>
      </section>

      {/* For Students & Parents / For Teachers & Tutors */}
      <section className="w-full py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Card: Students & Parents */}
            <div className="rounded-xl bg-ssn-card p-6 md:p-7">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">For Students & Parents</h4>
              <ul className="space-y-2 text-gray-700 mb-5">
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-text-nav" />Real help, not bots: explain it, don’t solve it.</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-text-nav" />Flexible payment options, pay after you’re happy.</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-text-nav" />Private, supportive help tailored to your goals.</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-text-nav" />Stay on track with simple progress check‑ins.</li>
              </ul>
              <button className="inline-flex items-center justify-center rounded-[5px] bg-[var(--color-text-nav)] text-white cursor-pointer px-4 py-2 font-medium border w-44 md:w-52 text-center hover:opacity-90 transition-all duration-300">Join as Student/Parent</button>
            </div>
            {/* Image: Students & Parents */}
            <img src={imgParents} alt="Students and parents" className="w-full h-[280px] md:h-[360px] object-cover rounded-xl shadow-sm" />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Image: Tutors */}
            <img src={imgTutors} alt="Teachers and tutors" className="w-full h-[280px] md:h-[360px] object-cover rounded-xl shadow-sm" />
            {/* Card: Teachers & Tutors */}
            <div className="rounded-xl bg-ssn-card p-6 md:p-7">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">For Teachers & Trainers</h4>
              <ul className="space-y-2 text-gray-700 mb-5">
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-text-nav" />Set your own hours & earnings, with clear project briefs.</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-text-nav" />Manage your profile easily and showcase your skills.</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-text-nav" />Fair, transparent working model with steady demand.</li>
                <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-text-nav" />Payments handled smoothly and on time.</li>
              </ul>
              <button className="inline-flex items-center justify-center rounded-[5px] bg-transparent text-[var(--color-text-nav)] px-4 py-2 font-medium border border-[var(--color-text-nav)] cursor-pointer w-44 md:w-52 text-center hover:bg-[var(--color-text-nav)] hover:text-white hover:border-[var(--color-text-nav)] transition-all duration-300">Join as Teacher/Tutor</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Ready to Get Started? */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="relative grid md:grid-cols-2 gap-4 items-center rounded-xl bg-ssn-card p-6 md:p-8 shadow-sm">
          {/* Left area */}
          <div>
            <h3 className="text-2xl md:text-[45px] font-semibold text-[var(--color-text-nav)] mb-2">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-4 max-w-md">Sign up now and experience the benefits of Homework Buddies for yourself.</p>
            <div className="flex gap-3">
              <button className="inline-flex items-center justify-center rounded-[5px] bg-[var(--color-text-nav)] text-white cursor-pointer px-4 py-2 font-medium border w-44 md:w-52 text-center hover:opacity-90 transition-all duration-300">Get Started Free</button>
              <button className="inline-flex items-center justify-center rounded-[5px] bg-transparent text-[var(--color-text-nav)] px-4 py-2 font-medium border border-[var(--color-text-nav)] cursor-pointer w-44 md:w-52 text-center hover:bg-[var(--color-text-nav)] hover:text-white hover:border-[var(--color-text-nav)] transition-all duration-300">How it Works</button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <img src={ctaImg} alt="Student using laptop" className="w-full h-[240px] md:h-[310px] object-cover rounded-xl shadow-sm" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeworkBuddies;