import React from 'react'

const NavigateButton = ({
    icon,
    className
}) => {
  return (
    <div className={` ${className} bg-gray-200 hover:bg-black p-[1rem] hover:text-white   flex items-center justify-center rounded-full cursor-pointer  w-[4rem] h-[4rem]`}>
        {icon}

              </div>
  )
}

export default NavigateButton
