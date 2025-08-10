import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Schools from './Components/Schools';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';

const Home = () => (<></>);

const App = () => {
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
        {/* ...add other routes as needed... */}
      </Routes>
    </div>
  );
};

export default App;