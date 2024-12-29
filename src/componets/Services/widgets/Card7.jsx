import React from 'react'
import CardUpperSection from './CardUpperSection'

const Card7 = ({
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
            className={`${className} bg-[#f2f2f252] rounded-[1.5rem]  hover:shadow-xl transition duration-300 h-[27rem] overflow-hidden border relative `}
          >
            <CardUpperSection index={index} title={title}/>
            <div className=" h-[70%] w-full ">

<img
              src={image1}
              alt={title}
              className="w-[70%]  absolute left-0  object-cover rounded-t-[2rem] "
              />
            <img
              src={image2}
              alt={title}
              className="w-[30%] absolute  right-0 bottom-0 object-cover rounded-t-[2rem] "
              />


            </div>

          </div>
          )
}

export default Card7
