import React from 'react'
import GrowthSection from './GrowthSection/GrowthSection'
import AboutExpendedCard from './AboutExpendedCard/AboutExpendedCard'
import OurValues from './OurValues/OurValues'
import WorkTogether from '../WorkTogether/WorkToGether'
import PageMainHeading from '../PageMainHeading'

const About = () => {
  return (
   <>
   <PageMainHeading text="About"/>
<GrowthSection/>
<AboutExpendedCard/>
<OurValues/>
<WorkTogether/>
   </>
  )
}

export default About
