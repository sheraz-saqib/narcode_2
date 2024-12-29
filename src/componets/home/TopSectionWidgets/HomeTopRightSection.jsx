import React from 'react'
import BrandNameTransparent from './brandNameTransparent/BrandNameTransparent'

const HomeTopRightSection = () => {
  return (
    <>
  <div className="right max-[606px]:hidden">
    <img className='w-[80%] mt-[20%]  max-[1006px]:w-[70%]  max-[1006px]:ml-[3rem]' src="./assets/top_section_img.svg" alt="" />
</div>
<div className="absolute bottom-[-6rem] z-[-1]   ">
<BrandNameTransparent/>
</div>
    </>

  )
}

export default HomeTopRightSection
