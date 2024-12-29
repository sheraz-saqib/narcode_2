import React from "react";
import IconCard from  "./widgets/IconCard";
const OurValues = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50  via-white to-pink-50 p-8 md:p-16 mb-[10rem]">
      <div className="flex flex-col lg:flex-row max-[1301px]:items-center  gap-8 max-w-7xl mx-auto">
        {/* Left Image Section */}
        <div className="relative rounded-3xl overflow-hidden w-full  lg:w-1/2 lg:z-[1]">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/virtual-reality-technology-illustration-download-in-svg-png-gif-file-formats--world-logo-vr-pack-science-illustrations-4347268.png?f=webp" // Replace with your actual image URL
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
            <IconCard icon={<svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20h9M12 4h9M4 4h4M4 20h4M4 12h16"
                  ></path>
                </svg>} title="Industries Served" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            {/* Second Icon and Text */}
            <IconCard icon={     <svg

                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8m-4-8v2m-6 0a8 8 0 018-8V4a12 12 0 00-12 12h4zm8 8a8 8 0 008-8h-4a4 4 0 01-4 4v4z"
                  ></path>
                </svg>} title="Impact" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
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
