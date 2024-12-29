import React from "react";
import ArrowButton from "../ArrowButton";
import SmallBanner from "../SmallBanner";

const WorkTogether = () => {
  return (
    <div className="mb-[6rem] px-8 flex justify-center items-center min-h-[14rem]">
      <div className="max-w-3xl text-center space-y-2">
        {/* Small Tag */}
        <SmallBanner className="bg-[#d6e3fb]" text="Get in Touch"/>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 pt-[1rem]">
          When We Work Together
        </h1>
        <h2 className="text-xl font-medium text-gray-900">
          We Can Create Something Incredible
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[.8rem]  leading-relaxed pt-[1rem]">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
          Minim Veniam, Quis Do Viverra Maecenas.
        </p>

        {/* Button */}
        <div className="flex justify-center items-center pt-[1rem]">
   <ArrowButton text={`Get A Quote`}/>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
