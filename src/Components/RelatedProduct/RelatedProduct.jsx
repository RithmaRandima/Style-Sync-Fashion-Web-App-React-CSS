import React from "react";
import "./RelatedProduct.css";
import data_product from "../../Assets/Data";
import Item from "../Items/Item";

const RelatedProduct = () => {
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-product-item">
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

export default RelatedProduct;
