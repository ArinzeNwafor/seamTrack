import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Modules from './components/Modules';
import PersonalisedDashboard from './components/PersonalisedDashboard';
import SafeSmartNigerian from './components/SafeSmartNigerian';
import ElevateYourSchool from './components/ElevateYourSchool';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';

const Home = () => (
  <>
    <Hero />
    <div className='flex flex-col gap-12 md:gap-20 pt-12 md:pt-20'>
      <Modules />
      <PersonalisedDashboard />
      <SafeSmartNigerian />
      <ElevateYourSchool />
      <Footer />
    </div>
  </>
);

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        {/* ...add other routes as needed... */}
      </Routes>
    </div>
  );
};

export default App;