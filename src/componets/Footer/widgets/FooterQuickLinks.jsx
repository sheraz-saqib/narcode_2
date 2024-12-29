import React from 'react'

const FooterQuickLinks = () => {
    const QuickLinks = [
        {
            "title" : "Home",
            "link" : "#"
        },
        {
            "title" : "About Us",
            "link" : "#"
        },
        {
            "title" : "Services",
            "link" : "#"
        },
        {
            "title" : "Products",
            "link" : "#"
        },
        {
            "title" : "Contact Us",
            "link" : "#"
        },


    ];
  return (
    <div className="lg:w-1/4 border-[#2C2C2C] border-r-2 lg:mr-[2rem]">
    <h3 className="font-medium text-lg mb-4">Quick Links</h3>
    <ul className="text-gray-400 space-y-2 text-[.8rem]">
    {
            QuickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="hover:text-white">
                  {link.title}
                </a>
              </li>
            ))

        }
      
    </ul>
  </div>
  )
}

export default FooterQuickLinks
