import React from 'react'

const IconBanner = ({icon,title,description,bgColor}) => {
  return (
    <div className="flex items-center space-x-4">
                 <div className={`${bgColor} p-4 rounded-lg text-[2rem]`}>
                    {icon}

                 </div>
                 <div className="space-y-[.4rem]">
                   <h3 className="text-gray-800 font-medium text-[1.1rem]">{title}</h3>
                   <p className="text-gray-600 text-sm">{description}</p>
                 </div>
               </div>
  )
}

export default IconBanner
