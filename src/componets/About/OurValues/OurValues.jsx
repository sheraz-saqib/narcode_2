import React from "react";
import IconCard from  "./widgets/IconCard";
import { img } from "framer-motion/client";
const OurValues = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50  via-white to-pink-50 p-8 md:p-16 mb-[10rem]">
      <div className="flex flex-col lg:flex-row max-[1301px]:items-center  gap-8 max-w-7xl mx-auto">
        {/* Left Image Section */}
        <div className="relative rounded-3xl overflow-hidden w-full  lg:w-[40%] lg:z-[1]">
          <img
            src="./assets/about/section.png" // Replace with your actual image URL
            alt="Our Values"
            className="rounded-3xl w-full "
          />
        </div>

        {/* Right Content Section */}
        <div className="flex-1 space-y-6 mt-[3rem]">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">Our Values</h2>
          {/* Description */}
          <p className="text-gray-600 text-base md:text-sm">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Do Viverra Maecenas. Orci Porta Non Pulvinar
            Neque Laoreet Suspendisse.
          </p>

          {/* Icons Section */}
          <div className="space-y-6 relative ">
            {/* First Icon and Text */}
            <IconCard icon={
                 <img
                 src="./assets/about/dashboard-monitor.png" // Replace with your actual image URL
                 alt="Icon 1"
                 className="w-6 h-6 text-blue-500"
               />
            } title="Industries Served" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            {/* Second Icon and Text */}
            <IconCard icon={    <img
                 src="./assets/about/pencil-painbrush.png" // Replace with your actual image URL
                 alt="Icon 1"
                 className="w-6 h-6 text-blue-500"
               />} title="Impact" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    {/* Bottom Section */}
                    <div className="flex   w-[112%] max-[1301px]:w-full  max-[1301px]:static absolute lg:left-[-5rem] lg:top-[110%]  ">
  <div className="flex flex-col pl-[10rem] max-[1301px]:py-[2rem]  max-[1301px]:px-[1rem] border border-[#fb8d5e5b]  bg-[#fff7f3] px-6 py-[1.5rem] rounded-tl-[.5rem] rounded-bl-[.5rem]">

    <p className="text-[.8rem] text-gray-800 font-semibold     mt-1">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non veniam hic, dolorum suscipit aliquam accusantium numquam dicta culpa nam doloremque. Iste facere rerum quaerat earum provident ea voluptatibus tenetur neque.
    </p>
  </div>

  {/* Right Side Vertical Button */}
  <div className="rounded-tr-[.5rem] rounded-br-[.5rem] bg-[#fb8e5e] w-[2rem] flex flex-col text-white font-medium justify-center items-center">
    <p className='transform -rotate-90 text-nowrap '>Akodah</p>
  </div>
</div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default OurValues;
