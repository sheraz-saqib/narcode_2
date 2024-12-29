import React from "react";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import IconBanner from "./widgets/IconBanner";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import ArrowButton from "../../ArrowButton";
import TextArea from "../../TextArea";
import InputField from "../.././InputField";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Section: Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-medium text-gray-800">Contact Information</h2>
            <p className="text-gray-400 mt-2 text-[.7rem] lg:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <IconBanner bgColor={`bg-blue-100`} icon={<MdOutlineMail  />} title={`Email Address`} description={`Inquire@Narocode@Outlook.Com`}/>


            {/* Office Location */}
            <IconBanner bgColor={`bg-[#B3E8E2]`} icon={<HiOutlineLocationMarker/>} title={`Office Location`} description={`PO Box 123, Lorem Ipsum Street 789`}/>

            {/* Contact Number */}
            <IconBanner bgColor={`bg-blue-100`} icon={<BiPhoneCall />} title={`Contact Number`} description={`123-456-789 / 321-654-987`}/>

          </div>
          <hr className="border-gray-200 my-8" />

          <div className="mt-8">
            <h4 className="text-gray-800 font-medium">Our Social Media</h4>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="bg-[#edf1fd] p-[.8rem] text-[#126ee0] rounded-md">
                <FaFacebookF/>
              </a>
              <a href="#" className="bg-[#edf1fd] p-[.8rem] text-[#126ee0] rounded-md">
                <FaLinkedinIn/>
              </a>
              <a href="#" className="bg-[#fae5db] p-[.8rem] text-[#f45227] rounded-md">
                <FaX/>
              </a>
              <a href="#" className="bg-[#fae5db] p-[.8rem] text-[#f45227] rounded-md">
                <FaInstagram/>
              </a>

            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-[#FFFCF9]  rounded-lg lg:p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get In Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField placeholder="First Name"/>
            <InputField placeholder="Last Name"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField placeholder="Email Address" type="email"/>
            <InputField placeholder="Contact Number" />
            </div>
           <InputField placeholder="Subject"/>
            <TextArea placeholder="Write Your Message" />
           <div className="flex justify-start">
           <ArrowButton text={`Submit`}/>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
