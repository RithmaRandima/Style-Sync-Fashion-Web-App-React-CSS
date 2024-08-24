import React from "react";
import "./NewsLetter.css";
import { Background, Parallax } from "react-parallax";
import hero_bg from "../../Assets/newsletter-bg.jpg";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <Parallax strength={300} className="hero-parallax">
        <Background className="custom-bg">
          <img src={hero_bg} alt="fill murray" />
        </Background>
        <div className="newsletter-info">
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to Your newsLetter and Stay Updated</p>
          <div className="input-section">
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default NewsLetter;
