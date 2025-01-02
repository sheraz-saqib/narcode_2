import React from 'react'
import SmallBanner from '../../../../SmallBanner'

const GrowthLeftSection = () => {
  return (
    <div className="lg:w-1/2 w-full mb-8 lg:mb-0 ">
      <SmallBanner text="Akhodah" className="bg-[#f5e0cb] max-w-[17rem]"/>
    <h2 className="text-3xl md:text-5xl font-semibold text-black mb-4 leading-snug mt-[1rem]">
     Performance & Growth Business For Brands
    </h2>
    <p className='text-[.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea corrupti quidem rerum assumenda aspernatur officia praesentium odio, voluptatibus quibusdam nostrum voluptates quos qui. Natus tempora ipsa voluptate, soluta reprehenderit provident, at quod molestias dicta sequi </p>
    {/*  */}
    <div className="flex mt-[1rem] lg:max-w-[90%]">
  <div className="flex flex-col  bg-[#f1f5ff] px-6 py-[1rem] rounded-tl-[1rem] rounded-bl-[1rem]">
    <h3 className="text-lg font-semibold text-gray-900">Join Us</h3>
    <p className="text-[.8rem] text-gray-500 italic mt-1">
      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
      Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
    </p>
  </div>

  {/* Right Side Vertical Button */}
  <div className=" bg-[#126EE0] w-[2rem] flex flex-col text-white font-medium justify-center items-center">
    <p className='transform -rotate-90 text-nowrap '>Join Us</p>
  </div>
</div>


  </div>
  )
}

export default GrowthLeftSection
