import React from 'react'
import HomeTopSection from './TopSectionWidgets/HomeTopSection'
import HomeAboutSection from './AboutSection/HomeAboutSection'
import HomeServices from './Services/HomeServices'
import EnterpriseProducts from './EnterpriseProducts/EnterpriseProducts'
import HomePortfolioSection from './portfolio/HomePortfolioSection'
import HomeTastimonial from './Testimonial/HomeTastimonial'
import HomeContact from './contact/HomeContact'

const HomePage = () => {
  return (
    <>
    <HomeTopSection/>
    <HomeAboutSection/>
    <HomeServices/>
    <EnterpriseProducts/>
    <HomePortfolioSection/>
    <HomeTastimonial/>
    <HomeContact/>
    </>
  )
}

export default HomePage
