import React from "react";
import "./GalleryImage.css";

const GalleryImage = (props) => {
  return (
    <div className="gallery-image" style={{ height: `${props.height}vh` }}>
      <div className="gallery-img-container">
        <img src={props.img} alt="" />
      </div>

      {/* info */}
      <div className="gallery-img-info">
        <h1>{props.title}</h1>
        <button>Shop it Now</button>
      </div>
    </div>
  );
};

export default GalleryImage;
