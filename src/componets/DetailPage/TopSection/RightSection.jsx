import React from 'react'

const RightSection = ({image}) => {
  return (
    <div className="lg:w-1/2 w-full flex justify-center ">
    <img
      src={image} // Replace with actual image
      alt="Sales Overview"
      className="h-full w-full  transition-all duration-500"
    />
  </div>
  )
}

export default RightSection
