import React from "react";

import HomeLeftContact from "./widgets/HomeLeftContact";
import HomeRightContact from "./widgets/HomeRightContact";


const HomeContact = () => {
  return (
    <div className="flex flex-col max-w-[70rem] mt-[5rem] lg:flex-row items-center justify-between min-h-[40rem] bg-[url('./assets/landing.jpeg')] bg-center bg-contain bg-red-200 p-[2rem] mx-auto rounded-tr-[4em] rounded-tl-[4em] ">
      {/* Left Section */}
    <HomeLeftContact/>
      {/* Right Section */}
      <HomeRightContact/>

    </div>
  );
};

export default HomeContact;
