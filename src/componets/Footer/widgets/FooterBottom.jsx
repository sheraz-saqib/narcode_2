import React from 'react'

const FooterBottom = () => {
  return (
    <div className="flex bg-[#2C2C2C] p-[1.7rem] rounded-tr-[2rem] rounded-tl-[2rem] flex-col lg:flex-row justify-between items-center text-xs text-gray-400 space-y-4 lg:space-y-0">
    <p>©Copyright - All Rights Reserved 2024 - Narcode Agency</p>
    <div className="flex space-x-4">
      <a href="#" className="hover:text-white">
        Privacy Policy
      </a>
      <a href="#" className="hover:text-white">
        Terms & Conditions
      </a>
    </div>
  </div>
  )
}

export default FooterBottom
