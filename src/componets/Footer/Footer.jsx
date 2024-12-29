import React from "react";

import FooterTop from "./widgets/FooterTop";
import FooterBottom from "./widgets/FooterBottom";
import FooterComanyInfo from "./widgets/FooterComanyInfo";
import FooterContantInfo from "./widgets/FooterContantInfo";
import FooterDivider from "./widgets/FooterDivider";
import FooterProductsLinks from "./widgets/FooterProductsLinks";
import FooterQuickLinks from "./widgets/FooterQuickLinks";


const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white lg:px-[5rem] max-[556px]:px-[.5rem] px-[2rem] pt-[5rem] rounded-tr-[3rem] rounded-tl-[3rem]">
      {/* Newsletter Section */}
      <div className="max-width mx-auto px-6 lg:px-6">
        <FooterTop/>
<FooterDivider/>

        {/* Footer Links */}
        <div className="lg:flex justify-between text-sm space-y-10 lg:space-y-0">
          {/* Company Info */}
         <FooterComanyInfo/>

          {/* Quick Links */}
        <FooterQuickLinks/>

          {/* Products */}
 <FooterProductsLinks/>

          {/* Contact Info */}
        <FooterContantInfo/>
        </div>

        <FooterDivider/>

        {/* Footer Bottom */}
       <FooterBottom/>
      </div>
    </footer>
  );
};

export default Footer;
