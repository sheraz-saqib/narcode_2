import React from 'react'
import CardUpperSection from './CardUpperSection'

const Card9 = ({
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
            className={`${className} bg-[#f2f2f252] rounded-[1.5rem]  hover:shadow-xl transition duration-300 h-[27rem] overflow-hidden border relative `}
          >
            <CardUpperSection index={index} title={title}/>
            <div className="  h-[70%] w-full flex items-end absolute bottom-0">

            <img
              src={image1}
              alt={title}
              className="w-[30%]   object-cover rounded-t-[2rem] "
              />
            <img
              src={image2}
              alt={title}
              className="w-[30%]  object-cover  rounded-t-[2rem] "
              />
            <img
              src={image3}
              alt={title}
              className="w-[40%]  object-cover rounded-t-[2rem] "
              />
            </div>

          </div>
          )
}

export default Card9
