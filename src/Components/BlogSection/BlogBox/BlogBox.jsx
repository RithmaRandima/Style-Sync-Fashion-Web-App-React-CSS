import React from "react";
import "./BlogBox.css";

const BlogBox = (props) => {
  return (
    <div className="blogBottomBox">
      <div className="blogImgContainer">
        <img src={props.img} alt="" />
      </div>
      <div className="blogBoxDateSection">
        <p className="blogBoxDate">12{props.date}</p>
        <p className="blogBoxMonth">May{props.month}</p>
      </div>
      <div className="blogMiddleInfo">
        <h1 className="boxBoxTitle">{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="blogBottomBtnContainer">
        <button className="blogReadMoreBtn">REad More</button>
      </div>
    </div>
  );
};

export default BlogBox;
