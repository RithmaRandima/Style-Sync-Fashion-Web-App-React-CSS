import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "./TestimonialBox.css";
import { FaStar } from "react-icons/fa";

const TestimonialBox = (props) => {
  return (
    <div className="testimonial-box">
      <BiSolidQuoteAltLeft className="testiQuoteMark" />
      <h1 className="testiQuote">{props.message}</h1>

      <div className="testiUserSection">
        <div className="testiUserDetails">
          <div>
            <p className="testiUserName">{props.name}</p>
            <div className="testiStarContainer">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
