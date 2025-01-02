import React from 'react'
import RightArrow from './navbar/widgets/RightArrow'
import { Link } from 'react-router-dom'

const ArrowButton = ({text,className = 'text-white',ArrowClassName,to = '#'}) => {
  return (
    <Link to={to} className={`flex justify-center transition-all w-[11rem] duration-500 group  bg-black space-x-3  py-[.8rem] px-[2rem] rounded-full hover:bg-gray-950 relative text-[.9rem] items-center max-[900px]:text-[.7rem] max-[751px]:text-[.5rem] ${className}`}>
        <span>
        <RightArrow className={`${ArrowClassName} absolute top-1/2 -translate-y-1/2 group-hover:opacity-100 -translate-x-[100%] group-hover:-translate-x-0 opacity-0 transition duration-500`}/>
        </span>
    <span className='group-hover:translate-x-[40%] translate-x-[-13%]  transition duration-500'>
        {text}
    </span>
    <span>
    <RightArrow className={`${ArrowClassName} absolute top-1/2 -translate-y-1/2 group-hover:opacity-0 transition duration-500`}/>
    </span>
  </Link>
  )
}

export default ArrowButton
