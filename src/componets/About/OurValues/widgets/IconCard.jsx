import React from 'react'

const IconCard = ({
    icon,
    title,
    description
}) => {
  return (
    <div className="gap-4 flex items-center justify-center">
    <div className="bg-blue-100 p-3 rounded-lg mr-[1rem]">
        {icon}
 
    </div>
    <div>
      <h3 className="text-[1rem] font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-[.8rem]">
        {description}
      </p>
    </div>
  </div>
  )
}

export default IconCard
