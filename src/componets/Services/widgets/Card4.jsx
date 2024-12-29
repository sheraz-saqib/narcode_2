import React from 'react'
import CardUpperSection from './CardUpperSection'

const Card4 = ({
    key,
    className,
    image,
    title,
    index,
}) => {
    return (
        <div
        key={key}
        className={`${className} bg-[#f2f2f252] rounded-[1.5rem]  hover:shadow-xl transition duration-300 h-[27rem] overflow-hidden border relative`}
      >
        <CardUpperSection index={index} title={title}/>
        <div className="  h-[70%] w-full absolute bottom-0 right-0 left-8">

        <img
          src={image}
          alt={title}
          className="w-full h-full  object-contain rounded-t-[2rem] "
          />
        </div>

      </div>
      )
}

export default Card4
