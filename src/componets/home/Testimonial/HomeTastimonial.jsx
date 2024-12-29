import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./widgets/Card";
import NavigateButton from "./widgets/NavigateButton";

const HomeTastimonial = () => {
    const clients = [
        {
            image: "assets/profile_image.png",
            name: "John Doe",
            company: "ABC Corp",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        {
            image: "assets/profile_image.png",
            name: "John Doe",
            company: "ABC Corp",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        {
            image: "assets/profile_image.png",
            name: "John Doe",
            company: "ABC Corp",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        {
            image: "assets/profile_image.png",
            name: "John Doe",
            company: "ABC Corp",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },

    ];
  return (
    <div className="min-h-[45rem] bg-[url('./assets/zikzak.svg')] bg-no-repeat bg-center  flex flex-col items-center justify-center px-4 py-8 relative z-0">
      <h1 className="text-[3rem] font-[500] text-center ">
        Helping Business In All Domains
      </h1>
      <h3 className="text-[1.4rem] font-[500] text-center mb-4">
      Delivering Tailored Software Solutions for Business Success
      </h3>
      <p className="text-gray-500 text-[.85rem] text-center max-w-2xl mb-8">
      At Akodah, we specialize in creating scalable software solutions that help businesses across all domains navigate the complexities of the digital landscape. Our enterprise software, custom ERP systems, and bespoke management solutions are designed to optimize operations, enhance data management, and improve decision-making. We empower businesses to grow, adapt, and achieve long-term success in a competitive digital world.
      </p>
      <div className="w-full max-width relative">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 }, // For screens smaller than 640px
            640: { slidesPerView: 1 }, // For screens between 640px
            768: { slidesPerView: 2 }, // For screens between 768px
            1024: { slidesPerView: 3 }, // For screens larger than 1024px
          }}
        >
          {clients.map((item, index) => (
            <SwiperSlide key={index}>
            <Card index={index} name={item.name} designation={item.description} image={item.image}/>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fixed Navigation Buttons at Bottom */}
        <div className=" swiper-navigation-buttons absolute bottom-[-6rem] left-0 right-0 flex justify-center space-x-4">
            <NavigateButton icon={ <FaChevronLeft />} className="swiper-button-next-custom"/>
            <NavigateButton icon={ <FaChevronRight />} className="swiper-button-prev-custom"/>
        </div>
      </div>
    </div>
  );
};

export default HomeTastimonial;
