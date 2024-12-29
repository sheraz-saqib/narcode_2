import React, { useState } from "react";
import HomeEnterPriseProductLeft from "./widgets/HomeEnterPriseProductLeft";
import HomeEnterPriseProductRight from "./widgets/HomeEnterPriseProductRight";


const EnterpriseProducts = () => {
 



  return (
    <div className="mx-auto max-w-[1380px]  px-6 md:px-12 bg-white mt-[5rem]">
      <div className="flex max-[1053px]:flex-col lg:flex-row items-center justify-between gap-3">
        {/* Left Side Content */}
      <HomeEnterPriseProductLeft/>

        {/* Right Side Image */}
      <HomeEnterPriseProductRight/>
      </div>
    </div>
  );
};

export default EnterpriseProducts;
