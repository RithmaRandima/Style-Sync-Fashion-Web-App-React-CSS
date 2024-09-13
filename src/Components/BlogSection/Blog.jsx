import React from "react";
import "./Blog.css";
import BlogBox from "./BlogBox/BlogBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { blogData } from "../../Data/BlogData";

const Blog = () => {
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
    <div className="blog">
      <h1 className="section-title">Recent Blogs</h1>
      <p className="section-subtitle">Read Our News & articles about updates</p>

      <hr />
      <div className="hidden md:grid blogBottomSection">
        {blogData.map((data) => {
          return (
            <BlogBox
              key={data.id}
              img={data.img}
              title={data.title}
              month={data.month}
              date={data.date}
              description={data.description}
            />
          );
        })}
      </div>

      <div className="md:hidden block w-[100%] mt-6">
        <Slider {...settings}>
          {blogData.map((data) => {
            return (
              <BlogBox
                key={data.id}
                img={data.img}
                title={data.title}
                month={data.month}
                date={data.date}
                description={data.description}
              />
            );
          })}
        </Slider>
      </div>

      <button className="read-btn">READ ALL</button>
    </div>
  );
};

export default Blog;
