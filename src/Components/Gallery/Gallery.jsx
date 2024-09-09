import React from "react";
import "./Gallery.css";
import GalleryImage from "./GalleryImage/GalleryImage";
import img1 from "../../Assets/gallery-1.jpeg";
import img2 from "../../Assets/gallery-2.jpeg";
import img3 from "../../Assets/gallery-3.jpeg";

const Gallery = () => {
  return (
    <div className="gallery">
      {/* left img */}
      <div className="left-gallery-img">
        <GalleryImage height={90} img={img1} title="Summer Outfits" />
      </div>
      <div className="right-gallery-img">
        <GalleryImage height={45} img={img2} title="Sweatshirts" />
        <GalleryImage height={45} img={img3} title="Graphic T-Shirts" />
      </div>
    </div>
  );
};

export default Gallery;
