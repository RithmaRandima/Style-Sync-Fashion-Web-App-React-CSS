import React from "react";
import "./InstaBox.css";
import { FaInstagram } from "react-icons/fa";

const InstaBox = (props) => {
  return (
    <div className="instaBox">
      <div className="instaImgContainer">
        <img src={props.img} alt="" />
      </div>
      <div className="middle-icon-section">
        <FaInstagram className="middle-icon" />
      </div>
    </div>
  );
};

export default InstaBox;
