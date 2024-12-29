import React from 'react'
import pricingData from './data/pricingData'
import PricingCard from './PricingCard'
import SmallBanner from '../SmallBanner'

const ShowPricingCard = () => {
    const pricingCard = pricingData()
  return (
    <>
     <div className="flex flex-col justify-center items-center space-y-4">
                    <SmallBanner text="Packages" className='bg-[#D9E9FC]'/>
                    <h2 className='text-[2.5rem] font-bold text-center'>Pricing Plans That Work For You</h2>
                   <div className="flex justify-center items-center text-[.8rem] text-gray-800 font-medium">
                   <p className='w-[70%] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, optio. Lorem ipsum dolor sit amet.</p>
                   </div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6 p-8 min-h-screen">
    {pricingCard.map((card, index) => (
      <PricingCard
        key={index}
        index={`0${index + 1}`}
        title={card.title}
        subtitle={card.subtitle}
        description={card.description}
        pageCount={card.pageCount}
        price={card.price}
        points={card.points}
        bgFrom={card.bgFrom}
        bgTo={card.bgTo}
        TopSectionBgColor={card.topSectionBgColor}
        topSectionBorderColor={card.topSectionBorderColor}
        iconsBgColor={card.iconsBgColor}
        textColor={card.textColor}
        iconBorderColor={card.iconBorderColor}
        topSectionSvgFillColor={card.topSectionSvgFillColor}
      />
    ))}
  </div>
    </>

  )
}

export default ShowPricingCard
