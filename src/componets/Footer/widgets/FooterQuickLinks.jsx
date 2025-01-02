import React from 'react'
import NavConstant from '../../navbar/NavConstant';

const FooterQuickLinks = () => {

    const links = NavConstant();
  return (
    <div className="lg:w-1/4 border-[#2C2C2C] border-r-2 lg:mr-[2rem]">
    <h3 className="font-medium text-lg mb-4">Quick Links</h3>
    <ul className="text-gray-400 space-y-2 text-[.8rem]">
    {
            links.map((link, index) => (
              <li key={index}>
                <a href={link.path} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))

        }

    </ul>
  </div>
  )
}

export default FooterQuickLinks
