import React from "react";
import "./NewCollection.css";
import new_collection from "../../Assets/New_collections";
import Item from "../Items/Item";

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1 className="section-title">NEW COLLECTION</h1>
      <p className="section-subtitle">
        These are the products that are trending now.
      </p>

      <hr />
      <div className="collections">
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
    </div>
  );
};

export default NewCollection;
