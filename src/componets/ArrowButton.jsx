import React from 'react'
import RightArrow from './navbar/widgets/RightArrow'
import { Link } from 'react-router-dom'

const ArrowButton = ({text,className = 'text-white',ArrowClassName,to = '#'}) => {
  return (
    <Link to={to} className={`flex transition-all duration-500 hover:flex-row-reverse  bg-black space-x-3  py-[.8rem] px-[2rem] rounded-full hover:bg-gray-800  text-[.9rem] items-center max-[900px]:text-[.7rem] max-[751px]:text-[.5rem] ${className}`}>
    <span>{text}</span>
    <span>
    <RightArrow className={ArrowClassName}/>
    </span>
  </Link>
  )
}

export default ArrowButton
