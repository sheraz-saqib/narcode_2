import React from 'react'
import PageMainHeading from '../PageMainHeading'
import LeftSection from './TopSection/LeftSection'
import RightSection from './TopSection/RightSection'
import DetailPageData from './data/DetailPageData'
import TopSection from './TopSection/TopSection'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import PricingCard from '../PricingCards/PricingCard'
import ShowPricingCard from '../PricingCards/ShowPricingCard'

const DetailPage = ({id}) => {
    const data = DetailPageData()[id];
    const topSection = data.top_section[0];
    const secondSection = data.second_section;
  return (
  <>
<PageMainHeading text={data.main_heading}/>
{/* top section */}
<TopSection
main_heading={topSection.main_heading}
subtext={topSection.subtext}
sub_heading={topSection.sub_heading}
description={topSection.description}
button_text={topSection.button_text}
button_link={topSection.button_link}
image_url={topSection.image_url}
/>
{/* why choose us */}
<WhyChooseUs
smallBannerText={secondSection.top_section.small_banner_text}
cards={secondSection.cards}
mainHeading={secondSection.top_section.heading}
description={secondSection.top_section.description}
sliders={secondSection.slider.images}
/>
<ShowPricingCard/>
  </>
  )

}

export default DetailPage
