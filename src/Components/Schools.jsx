import React  from "react";
import Hero from "./Hero";
import Modules from "./Modules";
import PersonalisedDashboard from "./PersonalisedDashboard";
import SafeSmartNigerian from "./SafeSmartNigerian";
import ElevateYourSchool from "./ElevateYourSchool";

const Schools = () => {
  return (
    <>
      <Hero />
      <div className='flex flex-col gap-12 md:gap-20 pt-12 md:pt-20 mb-12 md:mb-20'>
        <Modules />
        <PersonalisedDashboard />
        <SafeSmartNigerian />
        <ElevateYourSchool />
      </div>
    </>
  );
};

export default Schools;
