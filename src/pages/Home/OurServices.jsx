import React from "react";
import services from "../../../public/data/services.json"
import {
  FaShippingFast,
  FaGlobeAsia,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";

const icons = [
  <FaShippingFast size={36} className="mx-auto text-[#184042]" />,
  <FaGlobeAsia size={36} className="mx-auto text-[#184042]" />,
  <FaWarehouse size={36} className="mx-auto text-[#184042]" />,
  <FaMoneyBillWave size={36} className="mx-auto text-[#184042]" />,
  <FaBuilding size={36} className="mx-auto text-[#184042]" />,
  <FaUndo size={36} className="mx-auto text-[#184042]" />,
];

const OurServices = () => {
  return (
    <section className="bg-[#0d3c3f] rounded-3xl  my-15 ">
   <div className="container mx-auto py-10 px-8">
       <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
        Our Services
      </h2>
      <p className="text-[#b6e0e2] text-center max-w-2xl mx-auto mb-10 text-base md:text-lg">
        Enjoy fast, reliable parcel Travel  with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service, idx) => (
          <div
            key={service.title}
            className={`rounded-2xl p-7 bg-white flex flex-col items-center text-center shadow-sm transition duration-300 hover:shadow-2xl hover:bg-[#CAEB66] ${
              idx === 1 ? "bg-lime-200" : ""
            }`}
          >
            <div className="mb-4">{icons[idx]}</div>
            <h3 className={`font-bold text-lg md:text-xl mb-2 text-[#184042]`}>
              {service.title}
            </h3>
            <p
              className={`text-gray-600 text-sm md:text-base ${
                idx === 1 ? "text-[#5d6b5d]" : ""
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
   </div>
    </section>
  );
};

export default OurServices;
