import React from 'react'
import SmallBanner from '../../../../SmallBanner'
import ArrowButton from '../../../../ArrowButton'

const HomeAboutRightSection = () => {
  return (
    <div className="space-y-4">
    {/* Small Tag */}
    <SmallBanner text="About Us" className="bg-[#F6E2CA]" />

    {/* Title */}
    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
      About <br /> Our Company
    </h2>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed">
    Akodah is committed to driving innovation through seamless integration and custom software development. We help businesses streamline their operations, improve user experiences, and achieve their goals with tailored technology solutions. From innovative applications to scalable systems, we provide enterprise-level software that enhances business efficiency, improves productivity, and enables businesses to thrive in the fast-paced digital landscape.

    </p>

    {/* Small Profile Section */}
    <div className="flex relative items-center space-x-4 bg-[#F5F5F5] p-[1.8rem] rounded-[1.3rem] w-[90%]">
      <img
        src="./assets/profile_image.png"
        alt="User"
        className="w-12 h-12 rounded-full object-cover"
      />
      <p className="text-gray-800 italic text-[.9rem]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis obcaecati doloribus officiis deleniti quam
      </p>
      <img
        src="./assets/light.png"
        alt="User"
        className="h-[9rem] rounded-full object-cover absolute right-[-4rem] bottom-0"
      />
    </div>

    {/* Read More Button */}
    <button className="flex items-center ">
    <ArrowButton text="Read More"/>
    </button>
  </div>
  )
}

export default HomeAboutRightSection
