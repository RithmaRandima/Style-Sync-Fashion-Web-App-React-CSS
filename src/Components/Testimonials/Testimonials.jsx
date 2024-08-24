import React from "react";
import "./Testimonials.css";
import TestimonialBox from "./TestimonialBox/TestimonialBox";
import { testimonialData } from "../../Data/TestimonialData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="testimonials">
      <div className="testiContainer">
        <div className="testiRight">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <TestimonialBox
                key={data.id}
                message={data.message}
                name={data.name}
                city={data.city}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
