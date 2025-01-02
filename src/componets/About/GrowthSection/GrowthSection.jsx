import React from 'react'
import SmallBanner from "../../SmallBanner";

import GrowthRightSection from '../GrowthSection/widgets/GrowthSection/GrowthRightSection';
import GrowthLeftSection from '../GrowthSection/widgets/GrowthSection/GrowthLeftSection';

const GrowthSection = () => {
  return (
    <div className="max-width  px-6 md:px-12 bg-white mt-[8rem] ">
    <div className="flex max-[1053px]:flex-col lg:flex-row items-center justify-between gap-3 ">
      {/* Left Side Content */}
      <GrowthLeftSection/>
      {/* Right Side Image */}
    <GrowthRightSection/>
    </div>
  </div>
  )
}

export default GrowthSection
