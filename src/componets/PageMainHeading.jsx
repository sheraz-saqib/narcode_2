import React from 'react'
import BrandNameTransparent from './home/TopSectionWidgets/brandNameTransparent/BrandNameTransparent'

const PageMainHeading = ({text}) => {
  return (
   <div className="h-[15rem] relative max-[371px]:h-[11rem]  bg-[url('./assets/main-page-bg.png')] bg-bottom flex justify-center items-end">
       <h2 className='text-[2.5rem] mb-[2rem] font-bold max-[554px]:text-[1.8rem] text-nowrap max-[371px]:text-[1.2rem]' >{text}</h2>

       <div className="absolute bottom-[-4rem] z-[-2]   ">
<BrandNameTransparent/>
</div>
      </div>
  )
}

export default PageMainHeading
