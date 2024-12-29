import React from "react";
import SmallBanner from "../../SmallBanner";
import ArrowButton from "../../ArrowButton";
import ServicesCard from "./widgets/ServicesCard";

const HomeServices = () => {
  const services = [
    {
      id: 1,
      title: "Logo Design",
      image: "./assets/section1.png",
    },
    {
      id: 2,
      title: "UI/UX Design",
      image: "./assets/section2.png",
    },
    {
      id: 3,
      title: "Woo Commerce/Shopify",
      image: "./assets/section3.png",
    },
    {
      id: 4,
      title: "Mobile Application Development",
      image: "./assets/section3.png",
    },
    {
      id: 5,
      title: "CMS Website",
      image: "./assets/section4.png",
    },
    {
      id: 6,
      title: "Wordpress Design",
      image: "./assets/section5.png",
    },
  ];

  return (
    <section className=" py-16 px-6  bg-[url('assets/landing.jpeg')]  min-h-[93rem] bg-bottom bg-cover bg-no-repeat">
      <div className="max-width px-[2rem] text-center h-full ">
        {/* Section Header */}
        <div className="mb-12">
          <div className="my-[1rem]">
          <SmallBanner text="Services" className="bg-[#DAEBFD]"/>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Creative Design, Exceptional Development, and Innovative Solutions
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-4xl mx-auto">
          Our portfolio highlights our expertise in web development, graphic design, WordPress development, and custom software solutions. Our focus is on user-centric design and high-performance development to drive business success.

          </p>
        </div>

        {/* Cards Grid */}
        <div  className=" grid grid-cols-4 gap-6 max-[1053px]:grid-cols-2 max-[650px]:grid-cols-1 max-[650px]:gap-3"
        >
          {services.map((service, index) => (
           <ServicesCard key={service.key} index={index} title={service.title} image={service.image}  className={index == 2 || index == 3 ? 'col-span-2 max-[650px]:col-span-1':''}/>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-[5rem]">
          <button className="flex items-center justify-center w-full">
          <ArrowButton text="View All"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
