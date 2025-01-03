import React from 'react'

const CardUpperSection = ({
    index,
    title,
}) => {
  return (
    <div className="p-6 flex justify-between items-end">
    <div className="flex  flex-col items-start">
      <p className="text-gray-800 text-sm">{ index < 9 ? `0${index+1}` :index}</p>
      <h3 className="text-[1rem] font-semibold text-gray-800 mb-3 relative text-nowrap">
      {title}
      <span className="absolute w-1/2 h-[.1rem] bg-gray-800 bottom-[-.8rem] left-1/2 transform -translate-x-1/2"></span>
    </h3>
    </div>
{/* arrow */}
<svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.5 17.5C34.5 8.3873 27.1127 1 18 1C8.8873 1 1.5 8.3873 1.5 17.5C1.5 26.6127 8.8873 34 18 34C27.1127 34 34.5 26.6127 34.5 17.5Z" fill="#D9E9FC"/>
<path d="M35 17.5C35 8.11116 27.3888 0.5 18 0.5C8.61116 0.5 1 8.11116 1 17.5C1 26.8888 8.61116 34.5 18 34.5C27.3888 34.5 35 26.8888 35 17.5Z" stroke="#D9E9FC" stroke-opacity="0.35"/>
<path d="M20.6919 24L27.1919 17.5L20.6919 11" stroke="#252D44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 17.501H26.794" stroke="#252D44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>
  )
}

export default CardUpperSection
