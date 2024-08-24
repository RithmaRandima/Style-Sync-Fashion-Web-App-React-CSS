import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import { FaStar } from "react-icons/fa";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          {/* <img src={product.image} alt="" /> */}
        </div>
        <div className="product-display-image">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <FaStar className="rate-star" />
          <FaStar className="rate-star" />
          <FaStar className="rate-star" />
          <FaStar className="rate-star" />
          <FaStar className="rate-star" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-price-new">${product.new_price}</div>
          <div className="product-display-price-old">${product.old_price}</div>
        </div>
        <div className="product-right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          nostrum illum nisi magni? Nobis ex facere tempore voluptas quia
          perspiciatis, dolorem amet esse error reiciendis.
        </div>
        <div className="product-display-right-size">
          <h2>Select Size</h2>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
        <p className="product-display-right-category">
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
