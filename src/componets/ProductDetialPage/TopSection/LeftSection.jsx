import React from 'react'
import IconCard from './widgets/IconCard'
import { MdMobileFriendly } from 'react-icons/md'

const LeftSection = () => {
  return (
    <div className="lg:w-1/2 w-full mb-8 lg:mb-0 space-y-8">
  <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4 leading-snug mt-[1rem]">
  We Are Dedicating To Creating, Planning, And Handling Your Creative Idea
  </h2>
  <p className='text-[.8rem] border-l-blue-400 border-l-[.15rem] pl-[.5rem] text-gray-400 leading-[1.3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea corrupti quidem rerum assumenda aspernatur officia praesentium odio, voluptatibus quibusdam nostrum voluptates quos qui. Natus tempora ipsa voluptate, </p>
  {/*  */}
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-5">
        <IconCard text='mobile Applications' bgColor="#126ee0" icon={<MdMobileFriendly/> }/>
        <IconCard text='Customer Development' bgColor="#126ee0" icon={<MdMobileFriendly/> }/>
        <IconCard text='User Experience' bgColor="#126ee0" icon={<MdMobileFriendly/> }/>
        <IconCard text='ERP Softwares' bgColor="#126ee0" icon={<MdMobileFriendly/> }/>
    </div>


</div>
  )
}

export default LeftSection
