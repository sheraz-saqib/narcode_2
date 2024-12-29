import React from 'react'

const Card = ({
    index,
    name,
    designation,
    image,
    country
}) => {
  return (
    <div key={index} className="min-h-[15rem] mt-[3rem]">
                <div
                  className={`testimonialCard ${
                    index % 2 === 0
                      ? "after:bg-[#F2F5F7] bg-[#F2F5F7]"
                      : "after:bg-[#D4F0FF] bg-[#D4F0FF]"
                  } p-[.4rem] rounded-tr-[8rem] relative`}
                >
                  <div
                    className={`corner absolute right-[1rem] top-[1rem] z-[-1] bg-black w-[5rem] h-[5rem] ${
                      index % 2 === 0 ? "hidden" : ""
                    }`}
                  ></div>
                  {/* Speech bubble effect */}
                  <div
                    className={`p-[2rem] bg-white h-[12rem] rounded-tr-[7.6rem] relative after:bg-white testimonialCardOverlay`}
                  >
                    <h2 className="text-lg font-semibold text-black mb-2">
                      {name}
                    </h2>
                    <p className="text-gray-600 text-[.85rem] mb-6 italic">
                     {designation}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-[1.7rem] ml-[2rem]">
                  <img
                    src={image}
                    alt="User"
                    className="w-[3.3rem] h-[3.3rem] rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="text-sm font-[400]">{name}</p>
                    <p className="text-sm text-gray-400">{country}</p>
                  </div>
                </div>
              </div>
  )
}

export default Card
