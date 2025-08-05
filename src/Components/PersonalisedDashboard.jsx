import React from 'react';
import parentImg from "../assets/ri_parent-fill.png"
import teachImg from "../assets/teacher.png";
import graduateImg from "../assets/graduation-cap.png";
import schOwnImg from "../assets/mingcute_school-fill (1).png";

const cards = [
  {
    title: "Students",
    icon: graduateImg,
    description: "Everything they need, all in one place — submit assignments, check results, and download notes with ease."
  },
  {
    title: "Parents",
    icon: parentImg,
    description: "Track progress, get fee alerts, pay online, and stay informed — all in one place."
  },
  {
    title: "Teachers",
    icon: teachImg,
    description: "Less admin, more teaching — plan lessons, mark attendance, and auto-calculate results in seconds."
  },
  {
    title: "School Owners & Admins",
    icon: schOwnImg ,
    description: "Make smarter decisions with real-time data — track enrollment, finances, and view dashboards with actionable insights."
  },
];

const PersonalisedDashboard = () => {
  return (
    <section className="py-12 md:py-20 bg-module-blue">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold  mb-12">
          Personalized Dashboards for Every User
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 bg-module-red p-6 rounded-xl hover:shadow-lg transition-shadow">
            <img src={cards[0].icon} alt="" />
            <h3 className="text-xl font-semibold mb-2">{cards[0].title}</h3>
            <p className="text-gray-600">{cards[0].description}</p>
          </div>
          <div className="md:col-span-1 bg-module-yellow p-6 rounded-xl hover:shadow-lg transition-shadow">
            <img src={cards[1].icon} alt="" />
            <h3 className="text-xl font-semibold mb-2">{cards[1].title}</h3>
            <p className="text-gray-600">{cards[1].description}</p>
          </div>

          <div className="md:col-span-1 bg-module-finance p-6 rounded-xl hover:shadow-lg transition-shadow">
            <img src={cards[2].icon} alt="" />
            <h3 className="text-xl font-semibold mb-2">{cards[2].title}</h3>
            <p className="text-gray-600">{cards[2].description}</p>
          </div>
          <div className="md:col-span-2 bg-module-videos p-6 rounded-xl hover:shadow-lg transition-shadow">
            
            <img src={cards[3].icon} alt=""  />
            <h3 className="text-xl font-semibold mb-2">{cards[3].title}</h3>
            <p className="text-gray-600">{cards[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalisedDashboard;
