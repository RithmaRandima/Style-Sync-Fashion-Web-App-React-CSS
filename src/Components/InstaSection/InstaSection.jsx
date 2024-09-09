import React from "react";
import "./InstaSection.css";
import img1 from "../../Assets/item-37.jpeg";
import img2 from "../../Assets/kids_banner.jpeg";
import img3 from "../../Assets/blog-4.jpeg";
import img4 from "../../Assets/gallery-2.jpeg";
import img5 from "../../Assets/mens_banner.jpeg";
import InstaBox from "./InstaBox/InstaBox";

const InstaSection = () => {
  return (
    <div className="instaSection">
      <h1 className="section-title">Shop Our Insta</h1>

      <hr />
      <div className="instaBottomSection">
        <InstaBox img={img1} title="Best Comfortable Clothes Ideas" />
        <InstaBox img={img2} title="Casual Denim Clothing For Women" />
        <InstaBox img={img3} title="Best Poses For Fashion Photo" />
        <InstaBox img={img4} title="Best Poses For Fashion Photo" />
        <InstaBox img={img5} title="Casual Denim Clothing For Women" />
      </div>
    </div>
  );
};

export default InstaSection;
