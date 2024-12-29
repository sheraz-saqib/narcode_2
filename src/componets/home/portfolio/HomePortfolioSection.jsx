import React, { useState } from "react";
import SmallBanner from "../../SmallBanner";
import ArrowButton from "../../ArrowButton";
import PortfolioCard from "./widgets/PortfolioCard";

const categories = [
  "Application",
  "Wordpress",
  "Logo",
  "Products",
  "UI UX Design",
  "Business Profile",
  "All Designing Work",
];

const portfolioItems = {
  Application: [
    {
      id: 1,
      image: "assets/portfolio1.png",
      title: "Mobile App Development",
      description: "High-quality mobile app development services.",
    },
  ],
  "UI UX Design": [
    {
      id: 2,
      image: "assets/portfolio2.png",
      title: "Modern UI/UX",
      description: "Creative and user-friendly design solutions.",
    },
  ],
  Logo: [
    {
      id: 3,
      image: "assets/portfolio3.png",
      title: "Logo Design",
      description: "Unique and professional logo designs.",
    },
  ],
  Products: [
    {
      id: 4, // Unique ID
      image: "assets/portfolio5.png",
      title: "Product Showcase",
      description: "Attractive product showcase designs.",
    },

  ],
  "Business Profile": [
    {
      id: 6,
      image: "assets/portfolio4.png",
      title: "Business Profiles",
      description: "Professional business profiles for your company.",
    },
  ],
  Wordpress: [
    {
      id: 7,
      image: "assets/portfolio6.png",
      title: "Wordpress Themes",
      description: "Custom Wordpress themes and plugins.",
    },
  ],
};

const HomePortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Designing Work");

  // Flatten all items for "All Designing Work" or filter by category
  const filteredItems =
    selectedCategory === "All Designing Work"
      ? Object.values(portfolioItems)
          .flat()
          .map((item, index) => ({ ...item, uniqueKey: `${item.id}-${index}` }))
      : portfolioItems[selectedCategory]?.map((item, index) => ({
          ...item,
          uniqueKey: `${item.id}-${index}`,
        })) || [];

  return (
    <div className="bg-[url('./assets/portfolio_back.png')] bg-center mt-[2rem] bg-no-repeat bg-cover">
      <div className=" max-width px-[3rem] py-[5rem]">
        {/* Header */}
        <div className="text-center mb-6">
          <SmallBanner text="Portfolio" className="bg-[#DAEBFD]" />
          <h2 className="text-4xl font-bold text-gray-800 mt-[1.2rem]">
            Our Awesome Portfolio
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`p-[.5rem] px-[1.2rem] rounded-full text-[.85rem] font-medium transition duration-300 ${
                selectedCategory === category
                  ? "bg-black text-white shadow-md"
                  : "bg-white hover:bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[8rem]">
          {filteredItems.map((item,index) => (
<div className={ index == 1|| index == 4 ? "lg:mt-[-3rem]":''}>
<PortfolioCard key={item.uniqueKey} title={item.title} image={item.image} description={item.description}/>
</div>
          ))}
        </div>
        {/* View All Button */}
        <div className="mt-8 flex justify-center items-center">
         <ArrowButton text='View All'/>
        </div>
      </div>
    </div>
  );
};

export default HomePortfolioSection;
