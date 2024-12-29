import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const TopSection = ({
    main_heading,
    subtext,
    sub_heading,
    description,
    button_text,
    button_link,
    image_url
}) => {
  return (
<div className="flex lg:px-6 max-width max-[1053px]:flex-col lg:flex-row items-center justify-between gap-3 mt-[2rem]">
      {/* Left Side Content */}
      <LeftSection main_heading={main_heading} subtext={subtext} sub_heading={sub_heading} description={description} buttonText={button_text} buttonPath={button_link}/>
      {/* Right Side Image */}
    <RightSection image={image_url}/>
    </div>
  )
}

export default TopSection
