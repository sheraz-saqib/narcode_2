import React from 'react'
import ArrowButton from "../../../ArrowButton";
import InputField from "../../../InputField";
import TextArea from "../../../TextArea";
const HomeRightContact = () => {
  return (
    <div className=" max-w-sm bg-white bg-opacity-[50%] backdrop-blur-sm   rounded-[2rem] p-6 ">
    <div className="flex justify-center items-center">

    <h3 className="text-[1rem] text-center mb-4 w-[50%]">Make Great Projects That Platform</h3>
    </div>
    <form className='space-y-4'>
        <InputField placeholder="Your Name" />
        <InputField placeholder="Your Email" />
        <InputField placeholder="Phone Number" />
        <TextArea placeholder={`Write Your Message`}/>
     <div className="flex justify-center items-center">
        <ArrowButton text={`Submit`}/>
     </div>
    </form>
  </div>
  )
}

export default HomeRightContact
