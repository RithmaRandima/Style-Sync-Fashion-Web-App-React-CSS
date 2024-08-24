import React, { useContext } from "react";
import "./PagesHero.css";
import { Background, Parallax } from "react-parallax";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import HeroBreadcrum from "../HeroBreadcrum/HeroBreadcrum";

const PagesHero = (props) => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="pages-hero">
      <Parallax strength={300} className="page-hero-parallax">
        <Background className="custom-bg">
          <img src={props.img} alt="fill murray" />
        </Background>
      </Parallax>

      <div className="overlay">
        <div className="pages-hero-text">
          <h1>{props.title}</h1>
          {productId && <HeroBreadcrum product={product} />}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ratione, aperiam voluptate ut aliquam illum sunt .
          </p>
        </div>

        {props.discount && (
          <div className="shop-category-discount">
            <div className="discount-heading">
              <h1>Special</h1>
              <h2>Discount</h2>
            </div>

            <div className="discount-box">
              <p>up to</p>
              <h1>{props.discount}%</h1>
              <p>off</p>
            </div>
            <button>shop now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagesHero;
