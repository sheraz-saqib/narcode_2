import React from 'react'
import ArrowButton from '../../ArrowButton'
import SmallBanner from '../../SmallBanner'

const HomeTopLeftSection = () => {
  return (
    <div className="left flex flex-col  max-[1006px]:ml-[2rem]  max-[1006px]:mt-[5rem] mx-[1.5rem]">
        <SmallBanner text="Narcode IT Solution" className="bg-[#B3E8E2]" />
                <div className="text-[4rem] font-bold leading-[4.5rem] max-[1321px]:text-[3.5rem] max-[1144px]:text-[3rem] max-[1144px]:leading-[4rem] max-[900px]:text-[2.5rem] max-[900px]:leading-[3rem] max-[751px]:text-[2rem] max-[751px]:leading-[2.5rem] ">
                    <h2>Building Smarter Software<br /></h2>
                    <span className='text-[2.3rem] absolute '>Driving Future Innovation</span>
                </div>
                {/* pera */}
                <div className="mt-[4.9rem] max-[900px]:text-[.7rem] ">
                <p>
                At Akodah, we specialize in creating custom software solutions, web development, mobile apps, and enterprise software solutions. Our scalable and secure software is designed to help businesses optimize operations, boost productivity, and accelerate growth in the digital age.
                </p>
            </div>
            {/* button */}
           <div className="max-[900px]:w-[10.2rem] w-[12rem] mt-[1rem] max-[751px]:w-[9rem]">
           <ArrowButton text={`Get a Quote`}/>
           </div>
            </div>
  )
}

export default HomeTopLeftSection
