import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Schools from './Components/Schools';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import HomeworkBuddies from './Components/HomeworkBuddies';

const Home = () => (<></>);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const suffix = 'SeamTrack';
    const map = {
      '/': `Home | ${suffix}`,
      '/homework-buddies': `Homework Buddies | ${suffix}`,
      '/how-it-works': `How It Works | ${suffix}`,
      '/schools': `LMS | ${suffix}`,
      '/find-tutor': `Find a Tutor | ${suffix}`,
      '/become-tutor': `Become a Tutor | ${suffix}`,
      '/contact': `Contact Us | ${suffix}`,
    };
    document.title = map[path] || `SeamTrack — Learn, Help, Succeed`;
  }, [location.pathname]);

  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/schools"
          element={
            <>
              <Schools />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/homework-buddies" element={
          <>
            <HomeworkBuddies />
            <Footer />
          </>
        } />
        {/* ...add other routes as needed... */}
      </Routes>
    </div>
  );
};

export default App;