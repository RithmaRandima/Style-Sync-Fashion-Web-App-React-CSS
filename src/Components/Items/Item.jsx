import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { LuScan } from "react-icons/lu";

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="item">
        <img onClick={() => {}} src={props.image} alt="" />

        {/* item overlay */}
        <div className="item-overlay"></div>
        <p className="item-name">{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">${props.new_price.toFixed(2)}</div>
          {props.old_price && (
            <div className="item-price-old">${props.old_price.toFixed(2)}</div>
          )}
        </div>

        {/* icon container */}
        <div className="img-box-icon-container">
          <button>add to cart</button>
          <button>
            <FaHeart />
          </button>
          <button>
            <LuScan />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Item;
