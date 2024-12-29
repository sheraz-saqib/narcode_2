import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SmallBanner from "../../SmallBanner";
import NavigateButton from "../../home/Testimonial/widgets/NavigateButton";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import OurRecentWorkSlider from "../../OurRecentWorkSlider/OurRecentWorkSlider";

const WhyChooseUs = ({
    smallBannerText,
    mainHeading,
    description,
    cards,
    sliders
}) => {

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
        <SmallBanner text={smallBannerText} className="bg-[#d8e7fc]" />
        <h2 className="text-4xl font-medium text-center my-4">
          {mainHeading}
        </h2>
        <p className="text-center lg:max-w-2xl text-gray-600 mb-8 text-[.8rem]">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-4 gap-3  mt-[5rem] mx-[1rem] w-full">
       {cards.map((item,index)=>{
         return(
           <div key={index} style={{
            backgroundImage:`url('${item.bg_image}')`
            }} className={`rounded-[1rem] bg-cover bg-center h-[17rem] ${index == 0 || index == 5 ? 'col-span-4':'col-span-1'}`}>
           </div>
         )
       })}
        </div>
      </section>

      {/* Our Recent Work Section */}
     {/* Our Recent Work Section */}
     <OurRecentWorkSlider sliders={sliders}/>

    </div>
  );
};

export default WhyChooseUs;
