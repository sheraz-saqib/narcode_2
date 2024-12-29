import React from 'react'

const PortfolioCard = ({
    key,
    image,
    title,
    description

}) => {
  return (

<div
              key={key}
              className={`relative group overflow-hidden rounded-[1.9rem] shadow-lg cursor-pointer `}
            >
              <img
                src={image}
                alt={title}
                className="w-full min-h-[25rem] object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                <p className="text-white text-lg px-4">{title}</p>
                <p className="text-white text-sm px-4 mb-2">
                  {description}
                </p>
              </div>
            </div>
  )
}

export default PortfolioCard
