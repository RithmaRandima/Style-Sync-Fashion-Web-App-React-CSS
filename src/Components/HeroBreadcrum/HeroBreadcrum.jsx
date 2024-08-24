import React from "react";
import "./HeroBreadcrum.css";
import arrow_icon from "../../Assets/banner_right.png";

const HeroBreadcrum = (props) => {
  const { product } = props;
  return (
    <div className="hero-breadcrum">
      <span>HOME</span> <img src={arrow_icon} alt="" />
      <span>SHOP</span> <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
      <span className="product-name">{product.name}</span>
    </div>
  );
};

export default HeroBreadcrum;
