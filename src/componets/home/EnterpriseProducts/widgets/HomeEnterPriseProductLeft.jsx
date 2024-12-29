import React, { useState } from 'react'

const HomeEnterPriseProductLeft = () => {
       const services = [
            { id: 1, title: "ERP Software", description: " Our custom ERP solutions integrate data across departments, streamline business processes, and provide real-time insights. By reducing manual tasks and improving data accuracy, our ERP systems enhance operational efficiency and support data-driven decision-making." },
            { id: 2, title: "Warehouse & Inverntry Management System", description: "We create customized Warehouse Management Systems that optimize inventory tracking, order fulfillment, and warehouse operations. By integrating live data, our WMS solutions improve inventory accuracy, accelerate order processing, and reduce operational costs, ensuring a more efficient supply chain." },
            { id: 3, title: "HRM & CRM", description: "Akodah builds custom CRM and HRM solutions that help businesses improve customer engagement, streamline workforce management, and optimize employee performance. Our CRM systems help businesses nurture customer relationships, boost sales, and improve service, while our HRM software automates functions such as recruitment, payroll, and performance tracking." },
            { id: 4, title: "Business Sale Dashboards", description: " Our dynamic Business Sales Dashboards offer real-time insights into sales performance, trends, and key metrics. By integrating data from multiple sources, we provide businesses with a user-friendly interface to track revenue, sales targets, and customer behavior, enabling data-driven decision-making and boosting sales growth." },
          ];

      const [expandedId, setExpandedId] = useState(null);
    const toggleExpand = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
      };
  return (
    <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">
    Transforming Business Operations with Advanced Software Solutions
    </h2>
    <p className="text-gray-600 mb-4 border-l-[.2rem] border-blue-500 pl-4 text-sm md:text-base max-[1197px]:mt-[2rem] mt-[3rem]">
    At Akodah, we specialize in developing ERP systems, CRM solutions, HRM software, and management systems that revolutionize how businesses operate. Our enterprise software solutions are designed to automate processes, improve workflows, and drive efficiency across all departments.

    </p>

    {/* Expandable Containers */}
    <div className="space-y-4 mt-[3rem] max-[1197px]:mt-[2rem]">
      {services.map((service) => (
        <div key={service.id}>

          {/* Title and Toggle */}
          <button
            onClick={() => toggleExpand(service.id)}
            className={`flex items-center justify-between w-full text-left text-gray-400 hover:text-blue-500  transition duration-300 ${expandedId === service.id ? "font-medium text-black":""}`}
          >
            <span>
            <span
              className={`transition-transform duration-300 ${
                expandedId === service.id ? "rotate-90 text-[#F2135B]" : "rotate-0 "
              }`}
            >
              ▸
            </span>
              {service.title}</span>

          </button>

          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              expandedId === service.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="mt-2 ml-4 text-gray-600 text-sm md:text-base">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default HomeEnterPriseProductLeft
