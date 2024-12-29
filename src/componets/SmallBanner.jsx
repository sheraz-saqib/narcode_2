import React from 'react'

const SmallBanner = ({ text,className }) => {
  return (
    <span className={`inline-block text-nowrap px-2 py-1 text-[.7rem] rounded-full max-w-[8rem]  ${className}`}>
           {text}
          </span>
  )
}

export default SmallBanner
