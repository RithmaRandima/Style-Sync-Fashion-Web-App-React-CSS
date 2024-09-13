import React from "react";
import "./Services.css";
import ServiceBox from "./ServiceBox/ServiceBox";
import { serviceData } from "../../Data/ServiceData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Services = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="servicesSection">
      <div className="hidden md:grid w-[100%] b-black grid-cols-3 place-items-center gap-[30px]">
        {serviceData.map((service) => {
          return (
            <ServiceBox
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          );
        })}
      </div>

      <div className="md:hidden  w-[100%] px-2">
        <Slider {...settings}>
          {serviceData.map((service) => {
            return (
              <ServiceBox
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
