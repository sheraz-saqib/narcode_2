import React from "react";
const IconCard = ({ icon, text, bgColor}) => {
  return (
    <div className="icon-card flex items-center ">
        <div className={` icon-container p-4 rounded-full bg-[${bgColor}] bg-opacity-10`}  >
        {icon}
      </div>
      <div className="text-container ml-[1rem] font-medium text-gray-400 capitalize text-[.8rem]" >
        {text}
      </div>
    </div>
  );
};

export default IconCard;
