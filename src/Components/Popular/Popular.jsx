import React from "react";
import "./Popular.css";
import data_product from "../../Assets/Data";
import Item from "../Items/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1 className="section-title">What’s Trending</h1>
      <p className="section-subtitle">
        These are the products that are trending now.
      </p>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
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
    </div>
  );
};

export default Popular;
