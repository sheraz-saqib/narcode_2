import React from 'react'
import ArrowButton from '../../ArrowButton'

const LeftSection = ({main_heading,sub_heading,subtext,description,buttonText,buttonPath}) => {
  return (
    <div className="lg:w-1/2 w-full mb-8 lg:mb-0 space-y-8">
  <h2 className="text-3xl md:text-4xl font-medium text-black mb-4 leading-snug mt-[1rem]">
  {main_heading}
  <br />
  <span className='font-bold' >{sub_heading}</span>
  </h2>
  <p className='text-[.8rem] border-l-blue-400 border-l-[.15rem] pl-[.5rem] text-gray-400 leading-[1.3rem]'>{subtext} </p>
  {/*  */}
  <p className='text-[.8rem] pl-[.5rem] text-gray-800 leading-[1.3rem]'>{description} </p>

    <div className="flex justify-start">
        <ArrowButton text={buttonText} to={buttonPath} />
    </div>
</div>
  )
}

export default LeftSection
