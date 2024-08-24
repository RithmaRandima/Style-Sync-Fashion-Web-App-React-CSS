import React from "react";
import "./ServiceBox.css";

const ServiceBox = (props) => {
  return (
    <div className="serviceBox">
      <p className="serviceBoxIcon">{props.icon}</p>
      <p className="serviceBoxTitle">{props.title}</p>
      <p className="serviceBoxDescription">{props.description}</p>
    </div>
  );
};

export default ServiceBox;
