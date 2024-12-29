import React from 'react'
import CardUpperSection from './CardUpperSection'

const Card2 = ({
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
        className={`${className} bg-[#f2f2f252] rounded-[1.5rem]  hover:shadow-xl transition duration-300 h-[27rem] overflow-hidden border relative`}
      >
        <CardUpperSection index={index} title={title}/>
        <div className=" px-[1rem] h-[70%] w-full absolute bottom-0 flex">

        <img
          src={image1}
          alt={title}
          className="w-full h-full  object-cover rounded-t-[2rem] mr-5"
          />

        <img
          src={image1}
          alt={title}
          className="w-full h-full  object-cover rounded-t-[2rem] "
          />
        </div>

      </div>
      )
}

export default Card2
