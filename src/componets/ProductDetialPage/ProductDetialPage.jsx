import React from 'react'
import PageMainHeading from '../PageMainHeading'
import LeftSection from './TopSection/LeftSection'
import RightSection from './TopSection/RightSection'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import ShowPricingCard from '../PricingCards/ShowPricingCard'
import SmallBanner from '../SmallBanner'

const ProductDetialPage = () => {


  return (
    <>
    <PageMainHeading text="Product Detail page"/>
    <div className=" bg-white mt-[5rem] ">
    <div className="flex lg:px-6 max-width max-[1053px]:flex-col lg:flex-row items-center justify-between gap-3 ">
      {/* Left Side Content */}
      <LeftSection/>
      {/* Right Side Image */}
    <RightSection/>
    </div>
     {/* why choose us  */}
        <WhyChooseUs/>
         {/* pricing card */}
         <ShowPricingCard/>

  </div>
    </>
  )
}

export default ProductDetialPage
