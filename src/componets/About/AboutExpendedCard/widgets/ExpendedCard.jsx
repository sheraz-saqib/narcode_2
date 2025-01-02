import React from 'react';

const ExpendedCard = ({ bgimagePath, title, text, isActive, onHover }) => {
  return (
    <div
      className={`relative overflow-hidden text-white bg-red-100 rounded-3xl flex items-end group transition-all duration-500 ease-in-out ${
        isActive ? 'flex-[7]' : 'flex-[2]'
      }`}
      onMouseEnter={onHover}
      style={{
        backgroundImage: bgimagePath ? `url(${bgimagePath})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent group-hover:bg-gradient-to-b group-hover:to-black group-hover:via-transparent group-hover:from-transparent opacity-70 pointer-events-none transition-all duration-500 ease-in-out"></div>

      <div className="w-[3rem] text-gray-700 bg-[#DAE7FA] h-full flex items-center justify-center group-hover:opacity-100 opacity-0 transition transform -translate-x-full md:group-hover:translate-x-0 rounded-tl-3xl rounded-bl-3xl">
        <h2 className="text-[1.5rem] font-semibold transform -rotate-90 text-nowrap">
          {title}
        </h2>
      </div>
      <div className="flex justify-center items-center flex-col w-full">
        <div
          className={`group-hover:opacity-0 mb-[1rem] ${
            isActive ? 'ml-[-3rem]' : 'ml-[-2.5rem]'
          }`}
        >
          <h2 className="text-[1.5rem] font-semibold">{title}</h2>
        </div>
        {/* Text */}
        <div className="justify-center group-hover:px-[2rem] items-center group-hover:w-full w-0 h-[5rem] group-hover:flex hidden group-hover:delay-300 transform translate-y-[10%] group-hover:translate-y-0 ease-in transition group-hover:duration-200">
          <h2 className="text-[.8rem] font-medium">{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default ExpendedCard;
