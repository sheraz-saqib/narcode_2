import React from 'react'
import NavigateButton from '../home/Testimonial/widgets/NavigateButton'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurRecentWorkSlider = ({ sliders }) => {
  return (
    <section className="mx-[1rem]">
      <div className="flex justify-between items-center max-width max-[408px]:flex-col">
        <h2 className="text-3xl font-bold text-center mb-6 max-[422px]:mb-3 max-[422px]:text-[1.5rem]">Our Recent Work</h2>
        {/* Fixed Navigation Buttons */}
        <div className="swiper-navigation-buttons flex justify-center space-x-4">
          <NavigateButton
            icon={<FaChevronLeft />}
            className="swiper-button-prev-custom"
          />
          <NavigateButton
            icon={<FaChevronRight />}
            className="swiper-button-next-custom"
          />
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3} // Default: show 3 slides
        centeredSlides={true} // Center the active slide
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
            0: {
                slidesPerView: 1, // For small screens (mobile)
                spaceBetween: 10,
              },
          320: {
            slidesPerView: 1, // For small screens (mobile)
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // For tablets
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, // For desktops
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="max-w-[1920px] max-[422px]:mt-[1rem] mt-[4rem] relative"
      >
        {sliders.map((item, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide-custom max-[422px]:h-[10rem] min-h-[10rem] relative rounded-[2rem] shadow-lg bg-white flex items-end justify-end transition transform duration-500 my-[4rem]"
          >
            <img
              src={item}
              alt={item}
              className="rounded-lg max-w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurRecentWorkSlider;
