import React from 'react'
import { Link } from 'react-router-dom'

const FooterBottom = () => {
  return (
    <div className="flex bg-[#2C2C2C] p-[1.7rem] rounded-tr-[2rem] rounded-tl-[2rem] flex-col lg:flex-row justify-between items-center text-xs text-gray-400 space-y-4 lg:space-y-0">
    <p>©Copyright - All Rights Reserved 2024 - Narcode Agency</p>
    <div className="flex space-x-4">
      <Link to="/privacy-policy" className="hover:text-white">
        Privacy Policy
      </Link>
      <Link to="/term-of-use" className="hover:text-white">
        Terms & Conditions
      </Link>
    </div>
  </div>
  )
}

export default FooterBottom
