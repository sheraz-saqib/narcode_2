import React from 'react'
import WhiteRightArrowButton from "../../WhiteRightArrowButton";
import ArrowButton from '../../ArrowButton';
const FooterTop = () => {
  return (
    <div className="lg:flex justify-between items-center">
    <div className="lg:w-1/2">
      <h2 className="text-2xl lg:text-3xl font-medium mb-4">
        Subscribe To Our Newsletter
      </h2>
      <p className="text-gray-100 mb-6 text-[.8rem] font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="lg:w-1/2  flex lg:justify-end flex-col lg:ml-[4rem]">
    <p className="text-[.7rem] font-[300] mb-[.6rem]">Get the Latest Email via Update</p>
      <div className="flex w-full  items-center   bg-[#2C2C2C] rounded-full overflow-hidden">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="flex-1 px-4 py-3 placeholder:text-[.8rem] text-[.8rem] placeholder:text-white text-white bg-transparent focus:outline-none "
        />
        <div className="m-[.3rem]">

        <WhiteRightArrowButton text={`Subcribe`} className="bg-white text-black"/>
        </div>
        {/* <button className="bg-white  rounded-full text-gray-900 px-6 py-3 font-semibold hover:bg-gray-200 flex items-center space-x-2">
          <span>Subscribe</span>
          <span className="ml-2">&rarr;</span>
        </button> */}
      </div>
    </div>
  </div>
  )
}

export default FooterTop
