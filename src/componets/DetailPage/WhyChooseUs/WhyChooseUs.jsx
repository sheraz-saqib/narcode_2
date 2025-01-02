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


  return (
    <div className="mb-[10rem] md:px-[1rem] relative bg-[url('assets/landing.png')] bg-center bg-no-repeat bg-cover pt-[6rem] min-h-[26rem] mt-[8rem]">
      {/* Why Choose Us Section */}
      <section className="my-16 max-width flex justify-center items-center flex-col max-md:mx-[1rem]">
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
            }} className={`rounded-[1rem] bg-cover bg-center h-[17rem] ${index == 0 || index == 5 ? 'col-span-4 max-[1190px]:col-span-3 max-[1024px]:col-span-2':'col-span-1 max-[1190px]:col-span-3 max-[1024px]:col-span-2'}`}>
                <div className={`${index == 0 || index == 5 ? 'ml-[2rem] mt-[1.6rem] w-full' : 'hidden'}`}>
                   <div className="capitalize text-white font-medium">
                   <h3 className="h-full   text-[1.2rem]">{item.title}</h3>
                   <h3 className="h-full   text-[1.2rem]">{item.subtitle}</h3>
                   <p className="text-[.8rem] italic font-thin w-1/2 mt-[2rem]"  >{item.description}</p>
                   </div>
                </div>
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
