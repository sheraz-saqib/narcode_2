import React from 'react';
import PageMainHeading from '../PageMainHeading';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import WorkTogether from '../WorkTogether/WorkToGether';

const ProductDesignServices = () => {
    const cardData = [
        {
          "id": 1,
          "title": "ERP Software",
          "description": "We develop brand identities that leave an impression on the customer.",
          "action": {
            "text": "View Details",
            "link": "#"
          },
          "path": "/erp-software"
        },
        {
          "id": 2,
          "title": "Warehouse Management System",
          "description": "Our athestically pleasing web designs captivate the audience's attention.",
          "action": {
            "text": "View Details",
            "link": "#"
          },
          "path": "/warehouse-management-system"
        },
        {
          "id": 3,
          "title": "Inventory Management System",
          "description": "Every motion graphic we create is based on a unique concept and design.",
          "action": {
            "text": "Get A Quote",
            "link": "#"
          },
          "path": "/inventory-management-system"
        },
        {
          "id": 4,
          "title": "Business Sale Dashboards",
          "description": "We build e-commerce that is optimized to generate high revenues.",
          "action": {
            "text": "View Details",
            "link": "#"
          },
          "path": "/business-sale-dashboards"
        }
      ];

  return (
    <>
      <PageMainHeading text="Product Design Services" />
      <div className="max-w-7xl mx-auto px-[2rem] max-[880px]:text-[2rem] max-[558px]:text-[1.7rem] max-[387px]:text-[1.4rem] text-[2.8rem]  leading-[2.8rem] max-[387px]:leading-[1.8rem] mt-[7rem] max-[494px]:text-center">
        <h2 className='font-medium'>
          Smart And Effective
        </h2>
        <h2 className='font-bold'>
          Business Software Solution
        </h2>
      </div>
      {/* Main Section */}
      <div className="mt-[5.5rem] max-[640px]:mb-[3rem] mb-[10rem] flex relative min-h-[30rem] justify-end max-[1326px]:mr-[1.5rem] max-[880px]:mr-0 max-[880px]:px-[2rem] mr-[4rem] max-[880px]:overflow-hidden ">
        {/* Left Side Image */}
        <img  src="./assets/mask.png" className='absolute max-[880px]:hidden left-[-5rem] w-[40rem] max-[1083px]:w-[30rem]' alt="Mask Design" />
        <img  src="./assets/mask.png" className='absolute left-[50%] max-[880px]:block hidden z-[-1] -translate-x-1/2 w-[70%]' alt="Mask Design" />

        {/* Right Side Numbered Cards */}
        <div className="flex flex-col max-[880px]:ml-0 max-[880px]:max-w-full  ml-auto max-w-[50%] space-y-[2rem]  w-full max-[880px]:bg-[#ffffff35]  max-[880px]:backdrop-blur-sm  ">
          {/* Card 1 */}
          {
            cardData.map((item,i)=>{
               return <Link to={item.path}>
                   <div className="flex   justify-between items-center group max-[483px]:h-[7rem]  h-[10rem] w-full border-b transition duration-200 hover:border-blue-500">
                <div className="text-gray-500 text-[.7rem] flex items-center ">
                    <h3 className='text-[.9rem] font-semibold'>{i< 10 ? `0${i+1}` : i}</h3>
                    <div className="text-black ml-[5rem] max-[1296px]:ml-[2rem]">
                        <h2 className='text-[1.4rem] max-[1296px]:text-[1.1rem] font-semibold max-[483px]:text-[.7rem]'>{item.title}</h2>
                        <p className='w-[80%] max-[1296px]:text-[.65rem] max-[483px]:text-[.5rem] max-[405px]:text-[.4rem]'>
                      {item.description}
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-[.8rem] text-gray-400 text-nowrap mr-[1rem] max-[483px]:text-[.5rem]"><h4>View Detials</h4></div>
                        <div className="bg-[#D5DFFA] transition duration-200 group-hover:bg-black group-hover:text-white relative p-[1rem] w-[2.8rem] h-[2.8rem] max-[483px]:w-[2rem] max-[483px]:h-[2rem] rounded-full">
                    {/* <BiArrowFromLeft/> */}
                    <IoIosArrowRoundUp className='text-[3rem] max-[483px]:text-[1.8rem] rotate-45 absolute bottom-[-.5rem] left-[-.5rem] max-[483px]:bottom-0 max-[483px]:left-0'/>

                        </div>
                    </div>
          </div>
               </Link>

            })
          }



        </div>
      </div>
      {/* marquee */}
      <div className="bg-gradient-to-r from-red-200 via-red-500 to-red-200 flex items-center bottom-0 w-[110%] ml-[-1rem] h-[3.5rem] -rotate-3 max-[494px]:mb-[3rem] mb-[10rem]">
{
    Array.from({ length: 15 }).map((_, i) => {
        return <motion.h2 initial={{x:0}} animate={{
            x:'-100%'
        }} transition={{
            duration: 3.0,
            repeat: Infinity,
            ease: 'linear',
        }}  className='text-[1.5rem] max-[494px]:text-[1rem] font-semibold text-white text-nowrap px-9'>Akodah Smart Software Solutions </motion.h2>;
      })
}
        </div>
        <WorkTogether/>
    </>
  );
};

export default ProductDesignServices;
