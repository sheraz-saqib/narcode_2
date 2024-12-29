import React from 'react'

const FooterProductsLinks = () => {
    const links = [
        {
            "title" : "Warehouse Management",
            "link" : "#"
        },
        {
            "title" : "System Inventory",
            "link" : "#"
        },
        {
            "title" : "Management System",
            "link" : "#"
        },
        {
            "title" : "Business Sale Dashboards",
            "link" : "#"
        },

    ];
  return (
    <div className="lg:w-1/4 text-[.8rem] border-[#2C2C2C] border-r-2 lg:mr-[2rem]">
    <h3 className="font-meduim text-lg mb-4">Products</h3>
    <ul className="text-gray-400 space-y-2">
        {
            links.map((link, index) => (
                <li key={index}>
                    <a href={link.link} className="hover:text-white">{link.title}</a>
                </li>
            ))
        }
     
    </ul>
  </div>
  )
}

export default FooterProductsLinks
