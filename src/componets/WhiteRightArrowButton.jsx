import React from 'react'

const WhiteRightArrowButton = ({text,className}) => {
  return (
    <a href="#" className={`flex transition-all duration-500 hover:flex-row-reverse  bg-white space-x-3  py-[.8rem] px-[2rem] rounded-full hover:bg-gray-800  text-[.9rem] items-center max-[900px]:text-[.7rem] max-[751px]:text-[.5rem] ${className}`}>
    <span>{text}</span>
    <span>
    <svg className='w-[1.2rem]' viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.80176 7.77905H25.0308" stroke="#1D1D1D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5547 13.988L23.7627 7.78004L17.5547 1.57104" stroke="#1D1D1D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </span>
  </a>
  )
}

export default WhiteRightArrowButton
