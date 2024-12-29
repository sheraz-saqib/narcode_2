import React from 'react'


import HomePageTopLeftSection  from "./HomeTopLeftSection";
import HomeTopRightSection  from "./HomeTopRightSection";
import BrandNameTransparent from "./brandNameTransparent/BrandNameTransparent";

const HomeTopSection = () => {

    return (
<>
<section className="relative h-[56rem] bg-[url('assets/landing.jpeg')] bg-bottom bg-cover bg-no-repeat max-[1006px]:h-[40rem] max-[751px]:h-[32rem] max-[606px]:h-[28rem] ">
  <div className="grid max-[606px]:grid-cols-1 grid-cols-2 place-items-center h-full max-width">
    <HomePageTopLeftSection />
    <HomeTopRightSection />
  </div>
</section>


</>


          )

}

export default HomeTopSection
