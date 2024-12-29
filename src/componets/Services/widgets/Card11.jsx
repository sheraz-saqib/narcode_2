import React from 'react'
import CardUpperSection from './CardUpperSection'
import CardUpperSection2 from './CardUpperSection2'

const Card11 = ({
    key,
    className,
    image1,
    image2,
    title,
    index,
}) => {
    return (
        <div
        key={key}
        className={`${className} bg-[#f2f2f252] rounded-[1.5rem]  hover:shadow-xl transition duration-300 overflow-hidden border relative flex h-[25rem]`}
      >

        <CardUpperSection2 index={index} title={title}/>
        <div className="px-[2.5rem] flex  absolute  top-1/2 -translate-y-1/2 right-0 space-x-2">

        <img
          src={image1}
          alt={title}
          className="w-full  h-[17rem] object-cover rounded-sm mb-[-2rem]"
          />
        <img
          src={image2}
          alt={title}
          className="w-full  h-[17rem] object-cover rounded-sm mt-[-2rem]"
          />
        </div>

      </div>
      )
}

export default Card11
