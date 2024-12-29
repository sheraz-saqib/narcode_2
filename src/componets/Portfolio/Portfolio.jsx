    import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import PageMainHeading from "../PageMainHeading";

    const categories = [
    {
        name: "Design",
        items: ["Logo", "Stationary", "Book Cover", "Thumbnail", "Business Profile"],
    },
    {
        name: "Web Development",
        items: ["CMS/ WordPress", "Custom Websites", "Custom Applications", "Woo Commerce", "Shopify"],
    },
    ];

    // Dummy Data for Products
    const data = {
    Logo: Array.from({ length: 19 }, (_, i) => `Logo ${i + 1}`),
    Stationary: Array.from({ length: 14 }, (_, i) => `Stationary ${i + 1}`),
    "Book Cover": Array.from({ length: 14 }, (_, i) => `Book Cover ${i + 1}`),
    Thumbnail: Array.from({ length: 14 }, (_, i) => `Thumbnail ${i + 1}`),
    "Business Profile": Array.from({ length: 14 }, (_, i) => `Profile ${i + 1}`),
    "CMS/ WordPress": Array.from({ length: 14 }, (_, i) => `WordPress ${i + 1}`),
    "Custom Websites": Array.from({ length: 14 }, (_, i) => `Website ${i + 1}`),
    "Custom Applications": Array.from({ length: 14 }, (_, i) => `App ${i + 1}`),
    "Woo Commerce": Array.from({ length: 14 }, (_, i) => `Store ${i + 1}`),
    Shopify: Array.from({ length: 14 }, (_, i) => `Shopify ${i + 1}`),
    };

    const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
    const [selectedSubCategory, setSelectedSubCategory] = useState(
        categories[0].items[0]
    );
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Paginated Data
    const paginatedData = data[selectedSubCategory]?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(data[selectedSubCategory]?.length / itemsPerPage);

    return (
    <>
    <PageMainHeading text="Portfolio"/>
       <div className="min-h-screen max-width flex flex-col md:flex-row bg-gray-50 mt-[10rem] sm:mt-[5rem]">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-transparent p-6">
            <h1 className="lg:text-5xl md:text-4xl sm:text-4xl  font-medium mb-8">Category <span className="font-bold">Portfolio </span><br /> </h1>
            {categories.map((category) => (
            <div key={category.name} className="mb-6 text-[.9rem]">
                {/* Category Name */}
                <div
                className={`p-3 rounded-lg cursor-pointer ${
                    selectedCategory === category.name
                    ? "bg-gradient-to-l to-[#f45429] from-white text-white"
                    : "bg-[#dbe6fb]"
                }`}
                onClick={() => setSelectedCategory(category.name)}
                >
                {category.name}
                </div>

                {/* Subcategories */}
                {selectedCategory === category.name && (
                <div className="ml-4 mt-4">
                    {category.items.map((item) => (
                    <div
                        key={item}
                        className={` text-[.9rem] p-2 py-[.8rem] my-[.5rem]  cursor-pointer flex items-center gap-2 ${
                        selectedSubCategory === item
                            ? "bg-gray-100  border-l-[#126ee0]  border-l-[.8rem]  text-black"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                        }`}
                        onClick={() => {
                        setSelectedSubCategory(item);
                        setCurrentPage(1); // Reset to first page
                        }}
                    >

                        {item}
                    </div>
                    ))}
                </div>
                )}
            </div>
            ))}
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-6 ">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedData.map((item, index) => (
                <div
                key={index}
                className="h-[24rem] rounded-lg bg-gray-300 flex items-center justify-center  text-xl font-bold"
                >
                {item}
                </div>
            ))}
            </div>

            {/* Pagination */}

{/* Pagination*/}
<div className="mt-6 flex justify-between items-center space-x-2">
    <div className="text-[.8rem]">
        Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, data[selectedSubCategory]?.length)} of {data[selectedSubCategory]?.length} results
    </div>
    <div className="flex items-center">
        {/* Previous Button */}
        {currentPage > 1 && (
            <button
                className={`w-8 h-8 flex items-center justify-center text-[1.5rem] rounded-md ${
                    currentPage === 1
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-gray-500 hover:bg-gray-300"
                }`}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
                <BiChevronLeft />
            </button>
        )}

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
            <button
                key={index}
                className={`w-8 h-8 flex items-center justify-center rounded-md text-[.7rem] font-light ${
                    currentPage === index + 1
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setCurrentPage(index + 1)}
            >
                {String(index + 1).padStart(2, "0")}
            </button>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
            <button
                className={`w-8 h-8 flex items-center justify-center text-[1.5rem] rounded-md ${
                    currentPage === totalPages
                        ? "text-gray-500 hidden"
                        : "text-gray-500 hover:bg-gray-300"
                }`}
                onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
            >
                <BiChevronRight />
            </button>
        )}
    </div>
</div>



        </main>
        </div>
    </>

    );
    };

    export default Portfolio;