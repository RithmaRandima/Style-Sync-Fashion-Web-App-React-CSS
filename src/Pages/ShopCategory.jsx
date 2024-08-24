import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import arrow_down from "../Assets/down.png";

import Item from "../Components/Items/Item";
import PagesHero from "../Components/PagesHero/PagesHero";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <PagesHero
        img={props.banner_image}
        discount={props.discount}
        title={props.banner_name}
      />

      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="shop-category-sort">
          Sort by <img src={arrow_down} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-load-more">Explore More</div>
    </div>
  );
};

export default ShopCategory;
