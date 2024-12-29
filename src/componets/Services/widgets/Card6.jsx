import React from 'react'

import CardUpperSection2 from './CardUpperSection2'

const Card6 = ({
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

        <div className=" flex  items-center justify-start max-[1052px]:left-[43%] max-[816px]:left-[37%] max-[858px]:left-[37%] max-[1052px]:-translate-x-1/2 absolute space-x-4 max-[1052px]:px-1 px-4 h-full max-[701px]:right-5 max-[701px]:-translate-x-0 max-[701px]:w-full max-[565px]:left-0">

        <img
          src={image1}
          alt={title}
          className="h-1/4 max-[816px]:h-[4rem]  object-cover  "
          />
        <img
          src={image2}
          alt={title}
          className="w-full  h-1/2 object-cover  "
          />
        <img
          src={image3}
          alt={title}
          className="h-1/4 max-[816px]:h-[4rem] max-[701px]:hidden object-cover "
          />
        </div>

      </div>
      )
}

export default Card6
