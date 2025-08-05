import React from 'react';
import iconSchool from '../assets/mingcute_school-fill.png';
import iconBook from '../assets/iconoir_book-solid.png';
import iconClassroom from '../assets/Vector.png';
import schoolImg from '../assets/school-2.png';
import chatImg from "../assets/healthicons_communication.png";
import walletImg from "../assets/solar_wallet-bold.png";
import videoImg from "../assets/Vector (1).png";

const modules = [
  {
    title: 'Academic Excellence, Simplified',
    description: 'Empower teaching, streamline grading, and manage records — all in one place.',
    icon: iconBook,
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-2',
    bg: 'bg-module-blue',
    isImageBottom: schoolImg,
  },
  {
    title: 'Stress-Free School Operations',
    description: 'Handle admissions, staff, and timetables — no paperwork needed.',
    icon: iconSchool,
    bg: 'bg-module-red',
    colSpan: 'lg:col-span-2',
  },
  {
    title: 'Clear, Instant Communication',
    description: 'Send real-time updates and keep parents and staff in the loop.',
    icon: chatImg,
    bg: 'bg-module-yellow',
  },
  {
    title: 'Smarter Finance & Payments',
    description: 'Track fees, monitor balances, and generate receipts — effortlessly.',
    icon: walletImg,
    bg: 'bg-module-finance',
  },
  {
    title: 'Beyond the Classroom',
    description: 'Share notes and assignments. Keep students learning after hours.',
    icon: iconClassroom,
    colSpan: 'lg:col-span-2',
    bg: 'bg-module-classroom',
  },
  {
    title: 'Educative Videos & Resources',
    description: 'Engage students with videos that reinforce classroom lessons.',
    icon: videoImg,
    bg: 'bg-module-videos',
  },
];

const Modules = () => {
  return (
    <section className="px-4 sm:px-8  lg:px-12 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Seamtrack Modules</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {modules.map((mod, idx) => (
          <div
            key={idx}
            className={`${mod.bg} rounded-xl p-4 min-h-[200px] sm:p-6 flex flex-col justify-between ${mod.rowSpan || ''} ${mod.colSpan || ''}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <img src={mod.icon} alt={mod.title} className="" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">{mod.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700">{mod.description}</p>
              </div>
            </div>

            {mod.isImageBottom && (
              <div className="mt-4 sm:mt-6">
                <img
                  src={mod.isImageBottom}
                  alt="illustration"
                  className="w-full rounded-xl object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modules;