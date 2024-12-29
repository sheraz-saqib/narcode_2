import React from 'react'
import CardUpperSection from './CardUpperSection'
import CardUpperSection2 from './CardUpperSection2'

const Card10 = ({
    key,
    className,
    image1,
    image2,
    image3,
    title,
    index,
}) => {
    return (
        <div
        key={key}
        className={`${className} bg-[#f2f2f252] rounded-[1.5rem]  hover:shadow-xl transition duration-300 overflow-hidden border relative flex h-[25rem]`}
      >

        <CardUpperSection2 index={index} title={title}/>
        <div className="px-[2.5rem] flex  space-x-2">

        <img
          src={image1}
          alt={title}
          className="h-[60%]   object-cover rounded-sm absolute top-0 right-0"
          />
        <img
          src={image2}
          alt={title}
          className="h-1/5   object-cover rounded-sm absolute bottom-[10%] right-[6%]"
          />
        <img
          src={image3}
          alt={title}
          className="h-[55%]   object-cover rounded-sm absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>

      </div>
      )
}

export default Card10
