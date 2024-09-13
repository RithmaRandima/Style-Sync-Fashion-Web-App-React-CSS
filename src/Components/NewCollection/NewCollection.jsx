import React from "react";
import "./NewCollection.css";
import new_collection from "../../Assets/New_collections";
import Item from "../Items/Item";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NewCollection = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="new-collection">
      <h1 className="section-title">NEW COLLECTION</h1>
      <p className="section-subtitle">
        These are the products that are trending now.
      </p>

      <hr />
      <div className="hidden md:grid collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>

      <div className="md:hidden block w-[100%] mt-[30px]">
        <Slider {...settings}>
          {new_collection.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default NewCollection;
