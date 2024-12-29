import React from "react";
import OurRecentWorkSlider from "../../OurRecentWorkSlider/OurRecentWorkSlider";

import SmallBanner from "../../SmallBanner";
import NavigateButton from "../../home/Testimonial/widgets/NavigateButton";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const WhyChooseUs = () => {
  const cards = [
    {
      title: "ERP Software",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-green-100",
    },
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-red-100",
    },
    {
      title: "Mobile Apps",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-blue-100",
    },
    {
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-yellow-100",
    },
  ];

  const works = [
    { id: 1, image: "/path/to/image1.png", title: "Work 1" },
    { id: 2, image: "/path/to/image2.png", title: "Work 2" },
    { id: 3, image: "/path/to/image3.png", title: "Work 3" },
    { id: 4, image: "/path/to/image4.png", title: "Work 4" },
    { id: 5, image: "/path/to/image5.png", title: "Work 5" },
  ];

  return (
    <div className="mb-[10rem] relative bg-[url('assets/landing.jpeg')] bg-center bg-no-repeat bg-cover pt-[6rem] min-h-[26rem] mt-[8rem]">
      {/* Why Choose Us Section */}
      <section className="mb-16 max-width flex justify-center items-center flex-col max-md:mx-[1rem]">
        <SmallBanner text="Why Choose Us" className="bg-[#d8e7fc]" />
        <h2 className="text-3xl font-bold text-center my-4">
          What Makes Us Best In Business
        </h2>
        <p className="text-center lg:max-w-2xl text-gray-600 mb-8 text-[.8rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
          vitae culpa! Amet nulla minus repellendus, debitis quibusdam libero
          illum autem ex.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-3  mt-[5rem] mx-[1rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 flex flex-col justify-center min-h-[25rem] rounded-[2rem] transition-transform transform hover:-translate-y-[4rem] bg-white bg-opacity-70 relative duration-300 group hover:bg-gradient-to-b from-blue-500 to-blue-700 hover:text-white`}
            >
              <div className="bg-red-100 absolute top-4 group-hover:bg-red-500 group-hover:text-white right-4 text-[.8rem] p-[.2rem] rounded-sm">
                0{index + 1}
              </div>
              <div className="bg-red-100 group-hover:bg-[#d8e7fc] group-hover:text-black absolute bottom-4 right-4 text-[.8rem] p-[1rem] rounded-full">
                <FaArrowRight />
              </div>
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-medium mb-2">
                {card.title}
                <div className="bg-black group-hover:bg-white h-[.1rem] w-1/4 mt-[.5rem]"></div>
              </h3>
              <p className="text-[.8rem] text-gray-500 group-hover:text-white">
                {card.description}
              </p>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 w-1/2 bg-blue-500 h-[.1rem] bottom-[-4rem] left-[50%] -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </section>

     {/* Our Recent Work Section */}
<OurRecentWorkSlider sliders={works}/>
    </div>
  );
};

export default WhyChooseUs;
