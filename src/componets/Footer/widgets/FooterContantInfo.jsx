import React from 'react'

const FooterContantInfo = () => {
  return (
    <div className="lg:w-1/4 text-[.8rem]">
    <h3 className="font-medium text-lg mb-4">Contact Us</h3>
    <ul className="text-gray-400 space-y-2">
      <li>
        <span>+923456789</span>
      </li>
      <li>
        <span>loremipsum@gmail.com</span>
      </li>
      <li className="flex space-x-4 mt-2">
        {/* Social Icons */}
        <a href="#" className="hover:text-white">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default FooterContantInfo
