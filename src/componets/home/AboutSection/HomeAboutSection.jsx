import React from "react";
import RedCircle from "./widgets/circles/RedCircle";
import PinkCircle from "./widgets/circles/pinkCircle";
import HomeAboutLeftSection from "./widgets/sections/HomeAboutLeftSection";
import HomeAboutRightSection from "./widgets/sections/HomeAboutRightSection";

const HomeAboutSection = () => {
  return (
    <section className="w-full px-4 py-10 mt-[7rem] relative">
        <RedCircle/>
        <PinkCircle/>
      <div className="max-width  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <HomeAboutLeftSection/>
        {/* Right Content Section */}
       <HomeAboutRightSection/>
      </div>
    </section>
  );
};

export default HomeAboutSection;
