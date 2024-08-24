import React from "react";
import "./Services.css";
import ServiceBox from "./ServiceBox/ServiceBox";
import { FaTruckPlane } from "react-icons/fa6";
import { FaClipboardList, FaGift } from "react-icons/fa";

const Services = () => {
  return (
    <div className="servicesSection">
      <ServiceBox
        title="Quick Delivery"
        description="Inside City delivery within 5 days"
        icon={<FaTruckPlane />}
      />
      <ServiceBox
        title="Pick Up In Store"
        description="We have option of pick up in store."
        icon={<FaClipboardList />}
      />
      <ServiceBox
        title="Special Packaging"
        description="Our packaging is best for products."
        icon={<FaGift />}
      />
    </div>
  );
};

export default Services;
